var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var merge = require('merge-stream');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');

var scriptsPath = 'src/modules';
var destinationPath = 'web/js/';
var jshintFiles = [];


// build a list of all module names based off of the directories.
var modules = (function () {
    var dir = 'src/modules',
        files = fs.readdirSync(dir),
        stat, file, i,
        result = [];
    for (i = 0; i < files.length; i++) {
        file = files[i];
        stat = fs.statSync(dir + '/' + file);
        if (stat.isDirectory()) {
            result.push(file);
        }
    }
    return result;
})();

//builds the config options.
(function () {
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i],
            scriptsdir = 'web/js/',
            concatenatedFile = scriptsdir + module + '.js',
            moduledir = 'src/modules/' + module + '/';

//        concatConfig[module] = {
//            options: {
//                banner: bannerTemplate
//            },
//            dest: concatenatedFile,
//            src: [
//                'src/intro.js',
//                    moduledir + module + '.js',
//                    moduledir + '/**/*.js',
//                'src/outro.js'
//            ]
//        };
//        uglifyConfig[module] = {
//            options: {
//                banner: bannerTemplate
//            },
//            files: {}
//        };

        //uglifyConfig[module].files[minified] = [concatenatedFile];
        jshintFiles.push(concatenatedFile);

        console.log(jshintFiles);

        //jasmineConfig.all.src.push(concatenatedFile);
    }
})();

function getModules(dir){
    return fs.readdirSync(dir).filter(function(file){
       return fs.statSync(path.join(dir,file)).isDirectory();
    });
}

gulp.task('scripts', function(){
   var folders = getModules(scriptsPath);

    var tasks = folders.map(function(folder){
       return gulp.src(path.join(scriptsPath, folder, '/*.js'))
           .pipe(concat(folder + '.js'))
           .pipe(gulp.dest(destinationPath))
    });
    return merge(tasks);
});

gulp.task('vet', function(){
    return gulp
        .src(jshintFiles)
        //.pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose : true}));
});





