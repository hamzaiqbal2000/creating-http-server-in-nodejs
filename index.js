//making http request with nodejs => perform a GET request
const https = require('https')

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d);
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

const data = JSON.stringify({
  todo: 'Buy the milk',
})

const options1 = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todo',
  method: 'POST',
  headers: {
    'Context-Type': 'application/json',
    'Context-Length': data.length,
  }
}

const req1 = https.request(options1, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on(`data`, d => {
    process.stdout.write(d)
  })
})

req1.on('error', error => {
  console.log(error)
})

req1.write(data)
req1.end()
