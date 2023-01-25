const http = require('http');
const url = require('url')
const router = require('./contronller/router')
const notFoundHandle = require('./contronller/handle/notFoundHandle')
http.createServer((req, res) => {
    let urlParse = url.parse(req.url, true);
    let pathName = urlParse.pathname;
    let chooseHandle;
    if (typeof router[pathName] === "undefined") {
        notFoundHandle.showNotFound
    } else {
        chooseHandle = router[pathName]
        chooseHandle(req, res)
    }


}).listen(9999, () => {
    console.log('http://localhost:9999/home')
})