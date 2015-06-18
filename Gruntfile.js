module.exports = function(grunt) {
 
    // include connect-include
    // var ssInclude = require("connect");
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['page/**/*.less'],
                tasks:['less:development'],
                options: {livereload:false}
            },
            css: {
                files: ['page/**/*.css'],
                options: {livereload:true}
            },
            html: {
                files: ['page/**/*.html'],
                options: {livereload:true}
            },
            js: {
                files: ['page/**/*.js'],
                options: {livereload:true}
            }
        },
        concat: {
            options: {
              separator: ';',
              stripBanners: true,
              banner: '/* author: guoyongfeng */'
            },
            dist: {
                src: [
                    'static/js/zepto.js',
                    'static/js/mod.js', 
                    'static/js/fastclick.js', 
                    'static/js/execFastclick.js'
                ],
                dest: 'static/js/common.js'
            }
        },
        less: {
            development:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "page/index/index.css": "page/index/index.less",
                    "page/login/login.css": "page/login/login.less",
                    "page/inform/inform.css": "page/inform/inform.less",
                    "page/forget/forget.css": "page/forget/forget.less",
                    "page/register/register.css": "page/register/register.less",
                    "page/confirm/confirm.css": "page/confirm/confirm.less",
                    "page/course/course.css": "page/course/course.less",
                    "page/select/select.css": "page/select/select.less",
                    "page/wait/wait.css": "page/wait/wait.less",
                    "page/query/query.css": "page/query/query.less",
                    "page/peccancy/peccancy.css": "page/peccancy/peccancy.less",
                    "page/auth/auth.css": "page/auth/auth.less",
                    "page/handle/handle.css": "page/handle/handle.less",
                    "page/upload/upload.css": "page/upload/upload.less",
                    "page/addcar/addcar.css": "page/addcar/addcar.less",
                    "page/dispose/dispose.css": "page/dispose/dispose.less",
                    "page/order/order.css": "page/order/order.less",
                    "page/city/city.css": "page/city/city.less",
                    "page/service/service.css": "page/service/service.less",
                    "page/announce/announce.css": "page/announce/announce.less",
                    "page/commission/commission.css": "page/commission/commission.less",
                    "page/card/card.css": "page/card/card.less",
                    "page/secondhand/secondhand.css": "page/secondhand/secondhand.less",
                    "page/newcar/newcar.css": "page/newcar/newcar.less",
                    "page/validatecar/validatecar.css": "page/validatecar/validatecar.less",
                    "page/change/change.css": "page/change/change.less",
                    "page/order_wait/order_wait.css": "page/order_wait/order_wait.less",
                    "page/order_upload/order_upload.css": "page/order_upload/order_upload.less",
                    "page/order_pay/order_pay.css": "page/order_pay/order_pay.less",
                    "page/exchange/exchange.css": "page/exchange/exchange.less",
                    "page/mycoupons/mycoupons.css": "page/mycoupons/mycoupons.less",
                    "page/myorder/myorder.css": "page/myorder/myorder.less",
                    "page/phone/phone.css": "page/phone/phone.less",
                    "page/addr/addr.css": "page/addr/addr.less",
                    "page/addr_search/addr_search.css": "page/addr_search/addr_search.less",
                    "page/phone_change/phone_change.css": "page/phone_change/phone_change.less",
                    "page/mycar/mycar.css": "page/mycar/mycar.less",
                    "page/nickname/nickname.css": "page/nickname/nickname.less",
                    "page/sex/sex.css": "page/sex/sex.less",
                    "page/order_detail/order_detail.css": "page/order_detail/order_detail.less",
                    "page/order_detail_overtime/order_detail_overtime.css": "page/order_detail_overtime/order_detail_overtime.less",
                    "page/order_detail_waiting/order_detail_waiting.css": "page/order_detail_waiting/order_detail_waiting.less",
                    "page/vip/vip.css": "page/vip/vip.less",
                    "page/user_center/user_center.css": "page/user_center/user_center.less",
                    "page/user_info/user_info.css": "page/user_info/user_info.less",
                    "page/user_credit/user_credit.css": "page/user_credit/user_credit.less",
                    
                    
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35729  //声明给 watch 监听的端口
            },

            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        './'  //主目录
                    ]
                }
            }
        }
    });
 
    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('lessc',['less:development']);
    grunt.registerTask('default', [ 'connect:server','watch', 'less:development', 'concat']);

    //使用watch，实时编译less成功
 
};