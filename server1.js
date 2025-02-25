const http=require('http');
const fs=require('fs');

const server=http.createServer(function(req,res){
    console.log("Method=> ",req.method);
    const mthd=req.method;
    if(mthd=='GET'){
        res.end("GET!! Out and Go To Clasroom no. 26.");
    }
    else if(mthd=='POST'){
        let data='';
        if(req.url=='/'){
            req.on('data',(chunk)=>{data=chunk.toString();});
            req.on('end',()=> res.end("welcome to Home! Pagal & ur data= "+data));
        }
        else if(req.url=='/room26'){
            res.write("Welcome to Room 26\n");
            req.on('data',(chunk)=>{data=chunk.toString();});
            req.on('end',()=> res.end("C++ ki jai 'Post' &\n ur data= "+data));
        }
        else if(req.url=='/file'){
            console.log("reading from the file.");
            req.on('data',(chunk)=>{data=chunk.toString();});
            fs.readFile('ram.txt','utf-8',function(err,data){
                if(err)res.end("can't read file");
                else res.end("file data= \n"+data);
            });

            
        }
        else{
            res.end("null");
        }
    }
});
const PORT=4000;
server.listen(PORT,function process(){
    console.log("Listening at PORT: ",PORT);
});