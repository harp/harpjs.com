var fs = require('fs')
var path = require('path')
var should = require('should')
var cssstats = require('cssstats')
var numeral = require('numeral')

var css = fs.readFileSync(path.join(__dirname, '../www/css/index.css'), 'utf8')
var stats

describe('css', function () {

  it('should be css', function (done) {
    (function(){
      stats = cssstats(css, { safe: false })
      done()
    }).should.not.throw()
  })

  it('should not break perf budget', function (done) {
    var max = 15190 // First pass static site was 15.19kb gzipped
    var size = stats.gzipSize

    console.log('     ', numeral(size).format('0.00b') + ' of CSS')
    console.log('     ', numeral(size).divide(max).format('0%') + ' of budget used')
    should(stats.gzipSize).be.below(max)
    done()
  })

})
