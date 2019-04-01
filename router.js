const router = (req, res) => {
    if (req.url == '/'){
        res.writeHead(200, {'content-type' : "text/html"})
        res.end('Hello')
    } if (req.url == '/elephants'){
        res.writeHead(404, {'content-type' : "text/html"})
        res.end('unknown url');
    } if (req.url == '/blog' && req.method == 'POST' && req.headers.password === 'potato') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end("['a', 'b']");
    } if (req.url == '/blog' && req.method == 'POST'){
        res.writeHead(403, {'content-type' : "text/html"})
        res.end("FORBIDDEN")
    } if (req.url == '/blog') {
        res.writeHead(200, {'content-type' : "text/html"})
        res.end('["one", "two", "three"]');
    } 
};

module.exports = router;