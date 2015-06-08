/**
 * Created by wangcheng on 14-9-10.
 */

var http = require("http"),
    util = require("util"),
    queryString = require("querystring");

/**
 *  1. content不能直接write
 *  2. 需要设置post的header ： form形式发送
 */

function listRequest(){

    var contents = queryString.stringify({
        pids : "common_static_pkg_aio_css,common_static_pkg_aio_js,common_static_photo_js"
    });


    process.on('uncaughtException', function (err) {
        console.log(err);
    });

    var req = http.request({
        host : "localhost",
        port : "8080",
        method : "POST",
        path : "/fis-diff?type=list&product=hybrid",
        headers : {
            'Content-Type':'application/x-www-form-urlencoded',
            'Content-Length':contents.length
        }
    }, function(res){
        res.setEncoding('utf8');
        var data = "";
        res.on("data", function(chunk){
            data += chunk;
        });
        res.on("end", function(){
            console.log(data);
            var result = JSON.parse(data);
            console.log(util.inspect(result, {
                depth : null
            }));
        });
    });

    req.write(contents);

    req.end();
}

listRequest();

function dataRequest(){
    var contents = queryString.stringify({
        common_static_pkg_aio_css : "aio_css_hash_1,aio_css_hash_2,aio_css_hash_3",
        common_static_pkg_aio_js : "",
        common_static_photo_js : ""
    });
    var options = {
        host : "localhost",
        port : 80,
        path : "/xampp/localStorage/ls-diff.php?type=data",
        method : "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Length" : contents.length
        }
    };
    var req = http.request(options, function(res){
        res.setEncoding("utf8");
        var data = "";
        res.on("data", function(chunk){
            data += chunk;
        });
        res.on("end", function(){
//            console.log(data);
            var result = JSON.parse(data);
            console.log(util.inspect(result, {depth : null}));
        });
    });
    req.write(contents);
    req.end();
}

// dataRequest();