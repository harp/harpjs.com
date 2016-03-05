// var supports = require('./_supports')
var scroll = require('smoothscroll')
var FontFaceObserver = require('fontfaceobserver')
var header = require('./_header')
// var Waypoint = require('waypoints/lib/commonjs.waypoints')
// var Inview = require('waypoints/lib/shortcuts/inview')
require('./vendor/prism.js')

var toc = document.getElementById('js-toc') || false
var width = typeof documentElement !== 'undefined' ? documentElement.clientWidth : window.innerWidth
var observer = new FontFaceObserver('Work Sans')
var win = window || false
// var fontsloaded = (window && typeof window.sessionStorage === 'object') ? sessionStorage.getItem('fontsloaded') : false
var breakpoint = {
  sm: 0,
  md: 840,
  lg: 0
}
var resizeTimer

observer.check().then(function () {
  // console.log('Font available')
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

if (win) {
  win.addEventListener('resize', function () {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      width = typeof documentElement !== 'undefined' ? documentElement.clientWidth : window.innerWidth
      if (toc && width >= breakpoint.md) {
        collapseNav()
        toc.setAttribute('open', 'open')
      }
    }, 500)
  })
}

if (typeof header !== 'undefined') {
  header('js-headerwaves')
}


// Stay in Standalone mode, MIT via http://git.io/iApOyQ
(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(chref=d.href).replace(e.href,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(chref)||chref.indexOf(e.protocol+"//"+e.host)===0)&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone");
