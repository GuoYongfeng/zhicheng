
var product = 'mox',
    namespace = 'common';

var type = "f3";
var deployObj = fis.deploy.getLocalDeployConf(type, product, namespace);


fis.config.merge({
    product : product,
    namespace: namespace,
    roadmap:{
        domain : {
            //为了解决恶心的字体跨域，common暂时特殊处理
            '**.eot' : ['http://res.ppzuche.com'], 
            '**.svg' : ['http://res.ppzuche.com'], 
            '**.ttf' : ['http://res.ppzuche.com'], 
            '**.woff' : ['http://res.ppzuche.com'],
            '**.**' : ['http://cdn.ppzuche.com']
        }
    },
    pack:{
        //打包方案由子系统负责人配置，配置策略可以参考这里 http://xqzuche.com:9999/doc/ppfe/best_practice/static_pack.md

        //common子系统的通用组件资源包
        'pkg/common_widget.js': [
            /widget\/(.*?).js$/
        ],
        'pkg/common_widget.css': [
            /common\/layout\/base\/(.*?).css$/, //由于资源加载框架资源加载顺序反了，所以暂时将layout固定到打包最前面
            /static\/(.*?).css$/,
            /widget\/(.*?).css$/
        ]
    },
    deploy : deployObj
});
