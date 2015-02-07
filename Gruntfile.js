module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        imagemin: {
            test: {
                options: {
                    optimizationLevel: 6
                },
                files: [{
                    expand: true, //是否可以自动创建文件夹
                    cwd: "src/images",
                    src: "{*,**/*}.{gif,GIF,jpg,JPG,png,PNG}",
                    dest: "dist/"
                }]
            }
        }
    })
    grunt.registerTask("test", ['imagemin:test']);
}
