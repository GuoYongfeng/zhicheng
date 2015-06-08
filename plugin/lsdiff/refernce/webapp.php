<?php
define("WP_DATA_PATH", dirname(__FILE__));
define("WP_GET_LIST", "list");
define("WP_GET_DATA", "data");
define("WP_GET_MANIFEST", "manifest");
define("WP_ERROR_WRONG_PARAM", 1);

$g_get_type = $_GET['type'];//请求类型
$g_packageHashs = $_POST;//资源包与hash、sum关联数组
$g_res_obj = array(
    'data'=> array(),
    'time'=> 0,
    'error'=> ''
);//资源对象
$g_start = microtime(true);

if($g_get_type == WP_GET_LIST){//如果是请求list
    foreach($g_packageHashs as $package => $value){
        $g_res_obj['data'][] = Bd_Webapp_Reader::getList($package, $value);
    }
    Bd_Webapp_Reader::setHeader();
    $g_end = microtime(true);
    $g_res_obj['time'] = round(($g_end - $g_start)*1000);
    echo json_encode($g_res_obj);
}else if($g_get_type == WP_GET_DATA){//如果请求data
    foreach($g_packageHashs as $package => $value){
        if($value){
            $diffs = explode(',', $value);
        }else{
            $diffs = null;
        }
        $g_res_obj['data'][] = Bd_Webapp_Reader::getData($package, $diffs);
    }
    Bd_Webapp_Reader::setHeader();
    $g_end = microtime(true);
    $g_res_obj['time'] = round(($g_end - $g_start)*1000);
    echo json_encode($g_res_obj);
}else if($g_get_type == WP_GET_MANIFEST){
    if($manifest_status){
        header("HTTP/1.1 404 Not Found");
        header("Status: 404 Not Found");
        exit;
    }else{
        $module_name = $_GET['module'];
        $id = $_GET['name'];
        $manifest_content = Bd_Webapp_Reader::getManifest($module_name, $id);
        header('Content-Type:text/cache-manifest; charset=UTF-8;');
        echo $manifest_content;
    }
}else{
    $g_res_obj["errno"] = WP_ERROR_WRONG_PARAM;
}


class Bd_Webapp_Reader{
    public static function setHeader(){
        //CORS header
        if(preg_match('/\([^)]*OS\s*[^)]*6/i',$_SERVER['HTTP_USER_AGENT'])){
            header('Cache-Control:no-cache,no-store,must-revalidate');
        }
        header("Content-type: text/javascript");
        //Gzip压缩 ,不能同时使用 ob_gzhandler() 和 zlib.output_compression。
        if (Extension_Loaded('zlib') && !ini_get('zlib.output_compression')){
            //解决PHP开启Gzip页面没有输出的故障
            if (strnatcasecmp(PHP_VERSION, '5.3') <= 0 && ini_get('output_buffering') == "4096"){
                ini_set('output_buffering', 0);
            }
            //如果zlib扩展已经加载到PHP中，用php的内置压缩函数
            ob_start('ob_gzhandler');
        }
    }
    /**
     * @static
     * @param $packageName
     * @return string
     */
    private static function getPath($packageName){
        $tokens = explode('_', $packageName, 2);
        $moduleName = $tokens[0];
        return WP_DATA_PATH . '/' . $moduleName . '/' . $packageName;
    }

    /*
      *获取完整资源列表
     */
    public static function getList($packageName, $packageHash){
        $path = self::getPath($packageName) . '.list.php';
        if (file_exists($path)) {
            $_list = require_once $path;
        }else{
            trigger_error($path . "does not exist", E_USER_ERROR);
            return array();
        }

        $latestHash = $_list['hash'];
        $result = array(
            'name' => $packageName,
            'hash' => $latestHash,
            'data' => array()
        );
        if($packageHash != $latestHash){
            $list = $_list["resource"];
            foreach ($list as $key => $item) {
                $result['data'][] = array(
                    'hash' => $item['hash'],
                    'type' => $item['type']
                );
            }
        }
        return $result;
    }

    /*
    *获取资源数据
    */
    public static function getData($packageName, $diff_list){
        $_ret = array();
        $path = self::getPath($packageName) . '.data.php';
        if (file_exists($path)) {
            $_content = require_once $path;
        }else{
            trigger_error($path . "does not exist", E_USER_ERROR);
            return array();
        }

        $_list = self::getList($packageName, '');
        $_list_data = $_list['data'];

        if($diff_list){
            foreach ($diff_list as $_hash) {
                $_ret[$_hash] = $_content["resource"][$_hash];
            }
        }else{
            $_ret = $_content["resource"];
        }
        $resultContent = array(
            'name' => $packageName,
            'hash' => $_list['hash'],
            'data' => array()
        );

        foreach ($_ret as $key => $value) {
            foreach ($_list_data as $item) {
                if ($item['hash'] == $key) {
                    $resultContent['data'][] = array(
                        'hash' => $key,
                        'content' => $value,
                        'type' => $item['type']
                    );
                }
            }
        }
        return $resultContent;
    }

    /**
     * 根据模块名生成manifest
     * @static
     * @param $moduleName
     * @return string
     */
    public static function getManifest($moduleName, $id){
        $manifest_depends_path = WP_DATA_PATH . '/' . $moduleName . '/' . 'manifest_depends.php';
        if (file_exists($manifest_depends_path)) {//获取模块的依赖关系
            $manifest_depends = require_once $manifest_depends_path;
        }else{
            trigger_error($manifest_depends_path . "does not exist", E_USER_ERROR);
            return '';
        }
        $module_deps = $manifest_depends['modules'];
        $pageHash = $manifest_depends['pages'][$id];
        $manifest_content = "CACHE MANIFEST\n\nCACHE:\n";
        foreach($module_deps as $m){//合成manifest
            $manifest_path =  WP_DATA_PATH . '/' . $m . '/' . 'manifest.php';
            if (file_exists($manifest_path)) {
                $_manifest_fragment = require_once $manifest_path;
                $manifest_content .= $_manifest_fragment['content'];
                $manifest_content .= "\n";
            }else{
                trigger_error($manifest_path . "does not exist", E_USER_ERROR);
                return '';
            }
        }
        $manifest_content .= $pageHash;
        $manifest_content .= "\n\nNETWORK:\n*";
        return $manifest_content;
    }
}