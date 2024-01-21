const https=require('https')
const server = https.createServer((req, res) => {
    console.log(req.url);
    res.end('hello');
});

server.listen(3000);