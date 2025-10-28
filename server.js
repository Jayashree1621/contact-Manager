const server=require("./app");


const port =5000;

server.listen(port,err=>{
    if (err) throw err;
    console.log(`server is running 🚀 http://localhost:${port}`);
})