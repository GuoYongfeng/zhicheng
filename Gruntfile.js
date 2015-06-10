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
                    'static/js/mod.js', 
                    'static/js/fastclick.js', 
                    'static/js/zepto.js'
                ],
                dest: 'static/common.js'
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