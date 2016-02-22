'use strict'

// Instantiate Service
var watson = require('watson-developer-cloud')
var fs = require('fs')

var personality_insights = watson.personality_insights({
  username: process.env.IBM_USERNAME,
  password: process.env.IBM_PASSWORD,
  version: 'v2'
})

fs.readFile('./input.txt', 'utf8', function (err, data) {
  if (err) throw error

  personality_insights.profile({
    text: data
  },
    function (err, response) {
      if (err)
        console.log('errors:', err)
      else {
        var output = JSON.stringify(response, null, 2)
        console.log(output)
        fs.writeFile('./dist/output.txt', output)
      }
    }
  )
})
