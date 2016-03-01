// var SineWaves = require('sine-waves/sine-waves.min.js')

module.exports = function (id) {

  var el = document.getElementById(id)

  var waves = new window.SineWaves({
    // Canvas Element
    el: el,

    // General speed of entire wave system
    speed: 10,

    // How many degress should we rotate all of the waves
    rotate: 0,

    // Ease function from left to right
    ease: 'SineIn', // You can also pass in an easing function here

    // Specific how much the width of the canvas the waves should be
    // This can either be a number or a percent
    waveWidth: '100%',

    // An array of wave options
    waves: [
      {
        timeModifier: 0.9,   // This is multiplied againse `speed`
        lineWidth: 3,      // Stroke width
        amplitude: 150,    // How tall is the wave
        wavelength: 200,   // How long is the wave
        segmentLength: 10, // How smooth should the line be
        strokeStyle: 'rgba(255, 255, 255, 0.66)', // Stroke color and opacity
        type: 'sine'       // Wave type
      },
      // {
      //   timeModifier: 0.899,
      //   lineWidth: 1,
      //   amplitude: 150,
      //   wavelength: 200,
      //   segmentLength: 5,
      //   strokeStyle: 'rgba(255, 255, 255, 0.33)',
      //   type: 'sine'
      // },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 150,
        wavelength: 100,
        segmentLength: 10,
        strokeStyle: 'rgba(255, 255, 255, 0.5)'
      },
      // {
      //   timeModifier: 0.999,
      //   lineWidth: 1,
      //   amplitude: 150,
      //   wavelength: 100,
      //   segmentLength: 5,
      //   strokeStyle: 'rgba(255, 255, 255, 0.45)'
      // },
      {
        timeModifier: 0.75,
        lineWidth: 4,
        amplitude: 200,
        wavelength: 150,
        segmentLength: 10,
        strokeStyle: 'rgba(255, 255, 255, 0.33)'
      },
      // {
      //   timeModifier: 0.7499,
      //   lineWidth: 1,
      //   amplitude: 200,
      //   wavelength: 150,
      //   segmentLength: 5,
      //   strokeStyle: 'rgba(255, 255, 255, 0.25)'
      // }
    ],

    // Perform any additional initializations here
    initialize: function (){},

    // This function is called whenver the window is resized
    resizeEvent: function() {

      // Here is an example on how to create a gradient stroke
      // var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
      // gradient.addColorStop(0,"rgba(0, 0, 0, 0)")
      // gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)")
      // gradient.addColorStop(1,"rgba(0, 0, 0, 0)")
      //
      // var index = -1
      // var length = this.waves.length
      //   while(++index < length){
      //   this.waves[index].strokeStyle = gradient
      // }
    }
  })

  // el.style.marginBottom = (parseInt(el.style.height, 10) * -1) + 'px'

  // Set frame as background image
  // var header = document.getElementById('js-header')
  // header.style.backgroundImage = 'url(' + el.toDataURL('image/png') + ')'

}
