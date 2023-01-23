const http= require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
if(req.url == '/' && req.method =='GET'){
    fs.readFile('./home.html',(err,data)=>{
        if(err){
            res.setHeader('Content-type', 'text/html')
            res.statusCode=404;
            res.write('<h1>Error 404</h1>')
            res.end()
        }
      
    else{
        res.setHeader('Content-type', 'text/html')

       res.write(data);
       res.end();
    }
})
}
else if(req.url=="/images/fat_daly.png"){
    fs.readFile('./images/fat_daly.png',(err,data)=>{
        if(err){
            res.setHeader('Content-type', 'text/html')
            console.log(err);
            res.statusCode=404;
            res.write('<h1>Error 404</h1>')
            res.end()
        }
    else{
       res.setHeader('Content-type', 'image/png')
       res.write(data);
       res.end();
    }
    })
}
else if(req.url == '/about' && req.method =='GET'){
    fs.readFile('./about.html',(err,data)=>{
        if(err){
            res.statusCode=404;
            res.write('<h1>Error 404</h1>')
            res.end()
        }
    else{
       res.write(data);
       res.end();
    }
    })
}
else if(req.url == '/contact' && req.method =='GET'){
    fs.readFile('./contact.html',(err,data)=>{
        if(err){
            res.statusCode=404;
            res.write('<h1>Error 404</h1>')
            res.end()
        }
    else{
       res.write(data);
       res.end();
    }
    })
}
else{
    res.statusCode=404;
    res.write('<h1>Error 404</h1>');
    res.end();
}
})
server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
  });