var elixir = require('laravel-elixir');
var gulp = require('gulp');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    //compile sass to css
    mix.sass('resources/assets/sass/app.sass', 'resources/assets/css');

    //combine css files
    mix.styles(
        [
            'css/app.css',
            'bower/vendor/slick-carousel/slick/slick.css'
        ],
        'public/css/all.css',//output file
        'resources/assets' //source folder
    );

    var bowerPath = 'bower/vendor';
    mix.scripts(
        [
            //JQuery
            bowerPath + '/jquery/dist/jquery.min.js',
            //foundation js
            bowerPath + '/foundation-sites/dist/js/foundation.min.js',
            //other dependncies
            bowerPath + '/slick-carousel/slick/slick.min.js'
        ],
        'public/js/all.js',
        'resources/assets'
    );
});
