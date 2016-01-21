var scroll = require('smoothscroll')
var FontFaceObserver = require('fontfaceobserver')
var loadCSS = require('fg-loadcss')
require('./vendor/prism.js')

var observer = new FontFaceObserver('Work Sans')
// var fontsloaded = (window && typeof window.sessionStorage === 'object') ? sessionStorage.getItem('fontsloaded') : false

// Inline this into the head
loadCSS('http://fonts.googleapis.com/css?family=Work+Sans:300,400,700,800,900,600,500,200,100&subset=latin,latin-ext')

observer.check().then(function () {
  console.log('Font available')
}, function () {
  console.warn('Font unavailable')
})
