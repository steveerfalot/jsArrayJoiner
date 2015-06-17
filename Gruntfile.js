'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({


        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.registerTask('test', [
        'karma:unit'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);
};

