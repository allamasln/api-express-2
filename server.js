const http = require('http')

const server = http.createServer((req, res) => {
	console.log(req.url)

	if (req.url === '/') {
		res.setHeader('Content-Type', 'text/html')
		res.end('<h1>HOME</h1>')
	} else if (req.url === '/about') {
		res.setHeader('Content-Type', 'text/html')
		res.end('<h1>QUIENES SOMOS</h1>')
	} else {
		res.statusCode = 404
		res.end('404 - La página no existe.')
	}
})

server.listen(4000, () => console.log('server on...'))
