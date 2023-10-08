var express=require("express");

var app=express();

app.use(express.static("upload"));
var path=require("path");

var options={
    root:path.join(__dirname)
};


app.get("/",function(req,res){
    res.send(`<img src="/upload/one.jpeg"/>`);
});



app.listen(8080,function(){
    console.log("server is running at the port no is 8080");
});