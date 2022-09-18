
/**
 * 1.Information Response-100-199
 * 2.Successful Response-200-299
 * 3.Redirects-300-399
 * 4.Client Errors-400-499
 * 5.Server Errors-500-599
 */
const fs=require('fs');
const http = require('http');
const port=3000;
const hostname='127.0.0.1';

const server=http.createServer((request,response)=>{
    const handleReadFile=function(statusCode,fileLocation){
     fs.readFile(fileLocation,(err,data)=>{
      response.writeHead(statusCode,{'Content-Type':'text/html'});
      response.write(data);
      response.end();
     })
    }

if(request.url==='/')handleReadFile(202,"./HTMLFILE/about.html")
else if(request.url==='/contact')handleReadFile(202,"./HTMLFILE/contact.html")
else if(request.url==='/help')handleReadFile(202,"./HTMLFILE/help.html")
else handleReadFile(404,"./HTMLFILE/error.html")
})

server.listen(port,()=>{
console.log(`The Server is running at http://${hostname}:${port}`);
})



