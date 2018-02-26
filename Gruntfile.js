module.exports = function (grunt) {

    grunt.initConfig({

        imagemin: {
                options: {
                    progressive: true,
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'img/img_opt/',
                        src: ['*.{jpg,png}'],
                        dest: 'img_opt',
                        ext: '.jpg'
                }
            ]
            },

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 600,
                        quality: 50
          }, {
                        name: 'medium',
                        width: 800,
                        quality: 50

          }, {
                        name: 'large',
                        width: 1024,
                        quality: 80

          }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/img_src/',
                    dest: 'img/img_opt/'
        }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['responsive_images','imagemin']);

};
