const http = require('http')

const server = http.createServer((req,res)=> {
if(req.url=='/')
{
res.end('Welcome to Our Homepage')
}
else
if(req.url=='/about')
{
    res.end('This is a about page ')
}
else
{
    res.end('<h1> OOPS!</h1><p> The page not found</p><a href="/">back home</a>')
}
})
server.listen(5000)