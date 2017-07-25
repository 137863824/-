module.exports = function (grunt) {
    grunt.initConfig({
        // 读取package.json文件
        package: grunt.file.readJSON('package.json'),

        // 具体执行的操作
        uglify: {
            options: {
                banner: '/* 压缩文件 */'
            },
            dist: {
                files: {
                    'min/js/index.min.js': 'page/js/index.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'min/css/reset.min.css': 'page/css/reset.css',
                    'min/css/style.min.css': 'page/css/style.css'
                }
            }
        }
    })

    // 加载相应操作模块
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')

    // 注册默认任务
    grunt.registerTask('default', ['uglify', 'cssmin'])
}