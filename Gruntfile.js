module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/css/radio-checkbox-switch.css': [
                        'build/less/common.less',
                        'build/less/radio.less',
                        'build/less/checkbox.less',
                        'build/less/switch.less'
                    ],
					'dist/css/demo.css': [
					    'build/less/demo.less'
					],
					'dist/css/switch.css': [
					    'build/less/switch.less'
					]
                }
            }
        },
        cssmin: {
            build: {
                src: 'dist/css/radio-checkbox-switch.css',
                dest: 'dist/css/radio-checkbox-switch.min.css'
            }
        },
        watch: {
            less: {
                files: ['build/less/*.less'],
                tasks: ['default'],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('watcher', ['watch']);
    grunt.registerTask('default', ['less', 'less', 'cssmin']);
};
