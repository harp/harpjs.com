// var loadCSS = require('fg-loadcss') // This is inlined in _layout.jade

var html = document.documentElement
html.className += ' js '
if(sessionStorage.fontsloaded) {
  html.classList.add('fonts-loaded')
}
loadCSS('http://fonts.googleapis.com/css?family=Work+Sans:300,400,700,800,900,600,500,200,100&subset=latin,latin-ext')
