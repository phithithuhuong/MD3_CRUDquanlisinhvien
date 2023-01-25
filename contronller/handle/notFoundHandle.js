const fs=  require('fs')
class NotFoundHandle {
    static showNotFound(req,res){
        fs.readFile('./views/err/NotFound.html','utf8',(err, homeHtml)=>{
            if (err){
                console.log(err)
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(homeHtml)
                res.end()
            }
        })

    }
}
module.exports= NotFoundHandle