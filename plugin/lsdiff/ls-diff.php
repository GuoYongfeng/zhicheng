<?php

if (!defined("DS")) define("DS", DIRECTORY_SEPARATOR);
if (!defined("DIFF_TYPE_LIST")) define("DIFF_TYPE_LIST", "list");
if (!defined("DIFF_TYPE_DATA")) define("DIFF_TYPE_DATA", "data");
if (!defined("DIFF_ROOT")) define("DIFF_ROOT", dirname(__FILE__) . DS);

$req_type = $_GET["type"]; //请求类型
$product = $_GET["product"];
$req_post = $_POST;

/**
 * error ： 0表示正确、1表示错误
 */
$res_obj = array(
    'data' => array(),
    'errno' => 0,
    'msg' => ""
);

/**
 * todo : 支持gzip
 * todo : 设置header
 */
if($product){
    StaticReader::setDataDir(DIFF_ROOT . $product . DS);
    if($req_type == DIFF_TYPE_LIST){
        $pkgStr = $req_post["pids"];
        $pids = explode(",", $pkgStr);
        $result_list = array();
        foreach($pids as $pid){
            $result_list[$pid] = StaticReader::getList($pid);
        }
        $res_obj["data"] = $result_list;
        HttpHelper::setHeader();
        echo json_encode($res_obj);
    }else if($req_type == DIFF_TYPE_DATA){
        $result_data = array();
        foreach($req_post as $pid=>$hashStr){
            $package_data = array();
            if(strlen($hashStr) == 0){
                $hashs = null;
            }else{
                $hashs = explode(",", $hashStr);
            }
            $tmp_list = StaticReader::getList($pid);
            $package_data["data"] = StaticReader::getData($pid, $hashs);
            $package_data["type"] = $tmp_list["type"];
            $package_data["hash"] = $tmp_list["hash"];
            $result_data[$pid] = $package_data;
        }
        $res_obj["data"] = $result_data;
        HttpHelper::setHeader();
        echo json_encode($res_obj);
    }else{
        $res_obj["errno"] = 1;
        $res_obj["msg"] = "Wrong request type!";
        echo json_encode($res_obj);
    }    
}else{
    $res_obj["errno"] = 1;
    $res_obj["msg"] = "Undefine product!";
    echo json_encode($res_obj);
}

class HttpHelper{

    //增加gzip设置
    public static function setHeader(){
        // 如果页面头部信息还没有输出  而且php已经加载了zlib扩展 而且浏览器接受GZIP
        if( !headers_sent() && extension_loaded("zlib") && strstr($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")){
            ini_set('zlib.output_compression', 'On');
            ini_set('zlib.output_compression_level', '4');
        }
    }
}

/**
 * 静态资源读取类
 */
class StaticReader {

    private static $LIST_EXT = ".lslist.json";
    private static $DATA_EXT = ".lsdata.json";
    private static $CONNECTOR = "_";


    private static $module_list = array();
    private static $module_data = array();
    private static $dataDir = DIFF_ROOT;

    private static function getDataDir(){
        return self::$dataDir;
    }

    public static function setDataDir($dir){
        self::$dataDir = $dir;
    }

    /**
     * 获取对应package的资源列表
     */
    public static function getList($pid){
        $tokens = explode(self::$CONNECTOR, $pid);
        $module = $tokens[0];
        if(isset(self::$module_list[$module])){
            if(self::$module_list[$module][$pid]){
                return self::$module_list[$module][$pid];
            }else{
                return array();
            }
        }else{
            $listFile = self::getDataDir() . DS . $module . self::$LIST_EXT;
            // $listFile = dirname(__FILE__) . DS . "test" . DS . "data" . DS . $module . self::$LIST_EXT;
            if(file_exists($listFile)){
                $listObj = json_decode(file_get_contents($listFile), true);
                self::$module_list[$module] = $listObj;
                if($listObj[$pid]){
                    return $listObj[$pid];
                }else{
                    return array();
                }
            }else{
                trigger_error($listFile . "does not exist", E_USER_NOTICE);
                return array();
            }
        }
    }

    /**
     * 获取对应package的资源资源内容，可以获取指定的小文件资源
     */
    public static function getData($pid, $hashs=null){
        $tokens = explode(self::$CONNECTOR, $pid);
        $module = $tokens[0];
        if(isset(self::$module_data[$module])){
            if(isset(self::$module_data[$module][$pid])){
                $pkg_data = self::$module_data[$module][$pid];
            }else{
                $pkg_data = array();
            }
        }else{
            // $dataFile = dirname(__FILE__) . DS . "test" . DS . "data" . DS . $module . self::$DATA_EXT;
            $dataFile = self::getDataDir() .  DS . $module . self::$DATA_EXT;
            if(file_exists($dataFile)){
                self::$module_data[$module] = json_decode(file_get_contents($dataFile), true);
                if(isset(self::$module_data[$module][$pid])){
                    $pkg_data = self::$module_data[$module][$pid];
                }else{
                    $pkg_data = array();
                }
            }else{
                trigger_error($dataFile . "does not exist", E_USER_ERROR);
                $pkg_data = array();
            }
        }

        $newData = array();
        if(isset($hashs)){
            foreach($hashs as $hash){
                if(isset($pkg_data[$hash])){
                    $newData[] = array(
                        "hash" => $hash,
                        "content" => $pkg_data[$hash]
                    );
                }
            }
        }else{
            foreach($pkg_data as $hash => $content){
                $newData[] = array(
                    "hash" => $hash,
                    "content" => $content
                );
            }
        }
        return $newData;
    }
}