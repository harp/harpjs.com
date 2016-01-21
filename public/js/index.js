// var supports = require('./_supports')
var scroll = require('smoothscroll')
var FontFaceObserver = require('fontfaceobserver')
// var Waypoint = require('waypoints/lib/commonjs.waypoints')
// var Inview = require('waypoints/lib/shortcuts/inview')
require('./vendor/prism.js')

var toc = document.getElementById('js-toc') || false
var width = typeof documentElement !== 'undefined' ? documentElement.clientWidth : window.innerWidth
var observer = new FontFaceObserver('Work Sans')
// var fontsloaded = (window && typeof window.sessionStorage === 'object') ? sessionStorage.getItem('fontsloaded') : false
var breakpoint = {
  sm: 0,
  md: 840,
  lg: 0
}
var resizeTimer

observer.check().then(function () {
  console.log('Font available')
}, function () {
  console.warn('Font unavailable')
})

// Collapse nav by default for mobile
var collapseNav = function () {
  if (toc && width <= breakpoint.md) {
    toc.removeAttribute('open')
  }
}
collapseNav()

window.addEventListener('resize', function () {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(function () {
    width = typeof documentElement !== 'undefined' ? documentElement.clientWidth : window.innerWidth
    if (toc && width >= breakpoint.md) {
      collapseNav()
      toc.setAttribute('open', 'open')
    }
  }, 500)
})
