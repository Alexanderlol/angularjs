'use strict';
module.exports = function(grunt){

	//Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);
	//Automatically load required Grunt tasks
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJson('package.json'),

		//Make sure code styles are up to par and there are no obvious mistakes
		jshint:{
			options:{
				jshintrc:'.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'app/scripts/{,*/}*.js'
				]
			}
		}
	});

	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('default',['build']);

};