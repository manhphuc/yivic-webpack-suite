/* Set webpack variables */

var webpackParams = {
    // Input file path
    entryPath: ['./assets/src/scss/main.scss', './assets/src/js/main.js'],

    // Output for CSS and JS
    jsOutputPath: './assets/dist/js/main.js',
    cssOutputPath: './assets/dist/css/main.css',

};

module.exports = {webpackParams};

