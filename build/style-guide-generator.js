var fs = require('fs-extra')
var path = require('path')

var htmlDir = path.resolve(__dirname, '../src/templates')
var sassDir = path.resolve(__dirname, '../src/sass')
var componentsJSON = path.resolve(__dirname, '../src/components.json')

var fileNames
var components = []

fs.readdir(htmlDir).then(function(files) {
  fileNames = removeExtension(files)
  return Promise.all(files.map(function(file) {
    var filePath = path.resolve(htmlDir, file)
    return fs.readFile(filePath, 'utf-8')
  }))
}).then(function(filesHTML) {
  return Promise.all(filesHTML.map(function(file, i) {
    components[i] = { html: file }
    var fileName = formatFileName(fileNames[i])
    var filePath = path.resolve(sassDir, fileName)
    return fs.readFile(filePath, 'utf-8')
  }))
}).then(function(fileSASS) {
  fileNames.forEach(function(fileName, i) {
    components[i].title = fileName
    components[i].sass = fileSASS[i]
  })
  return fs.writeFile(componentsJSON, JSON.stringify(components), 'utf-8') 
}).then(function(err) {
  if (err) throw err
  console.log('Success! Components documentation generated:', componentsJSON)
}).catch(function(err) {
  throw err
})

function removeExtension(files) {
  return files.map(function(file) {
    return file.slice(0, -5)
  })
}

function formatFileName(file) {
  return '_' + file.charAt(0).toLowerCase() + file.slice(1) + '.scss'
}
