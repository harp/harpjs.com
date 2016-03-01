// require('dug.js') // Causing problems
var url = 'https://cdn.rawgit.com/harp-boilerplates/registry/master/index.json'
var el = document.getElementById('js-container')

var request = new XMLHttpRequest()
request.open('GET', url, true)

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText)
    var ul = document.createElement('ul')
    ul.classList.add('flex')
    ul.classList.add('flex-wrap')
    var items = ''
    for(var slug in data) {
      var b = data[slug]
      items += '\
      <li class="flex-auto col-6 md-col-4 list-reset p1 md-p2 h6">\
        <a href="https://github.com/' + slug + '">\
          <img src="http://placehold.it/800x600" class="block">\
          <div class="bg-silver p2">\
            <h3 class="h4 mt0"><span class="a-faux">' + slug.split('/')[1] + '</span></h3>\
            <div class="black">\
              <code>' + slug + '</code><p>' + b.join(', ') + '</p>\
            </div>\
          </div>\
        </a>\
      </li>'
    }
    ul.innerHTML = items
    el.appendChild(ul)

  } else {
    console.warn('Problem loading boilerplates')
  }
}

request.onerror = function(err) {
  console.error(err)
}

request.send()
