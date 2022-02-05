const http = require('http'); //save in same folder and look for local file called http

// Setting a web Server (anonymous function)
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write("ggggggg");  // write content = document.write
        res.end();  // end the write

    }

    if (url === '/message' && method === 'POST') {
    res.setHeader('Content-Type', 'text/html');
    res.write();  // write content = document.write
    res.end();  // end the write
    }
});


// become a ongoing process for listening the server request
server.listen(3000)