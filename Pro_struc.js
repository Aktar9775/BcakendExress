const express= require('express');
const path = require('path');
const { execPath } = require('process');
const app=express();
//=============== built in Middleware/ parser===========
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//=========ejs engine=======
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

//================Server===============
app.get("/",function(req,res){
res.render("index") //send replace to render and page name into the parameter-"page_name"
})
//===============port===========
app.listen(3000,function(){
  console.log("Connection ready");
})

