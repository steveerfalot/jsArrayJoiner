module.exports = function(config){
    config.set({
        basePath: '../',
        frameworks: [
            'jasmine'
        ],
        files: [
            'app/**/*.js',
            'test/unit/**/*.js'
        ],
        logLevel: config.LOG_INFO,
        browsers: [
            'PhantomJS'
        ],
        autoWatch: true,
        singleRun: false,
        colors: true,
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            'app/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        }

    });
};