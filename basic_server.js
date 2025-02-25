const http=require('http');
const { receiveMessageOnPort } = require('worker_threads');

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
            req.on('data',(chunk)=>{data=chunk.toString();});
            req.on('end',()=> res.end("C++ ki jai 'Post' & ur data= "+data));
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
