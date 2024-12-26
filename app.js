const express= require('express')
const app= express()
const userModel=require("./Usermodel") 
app.get('/',function(req,res){
  res.send("Server On")
})
// app.get('/create',async(req,res)=>{
//   let createUser= await userModel.create({
//     name:"Sohel Aktar",
//     email:"Sohelaktar234@gmail.com",
//     username:"Sohel9775"
//    })
//  res.send(createUser);
 
// })
app.get('/create',async(req,res)=>{
  let createUser= await userModel.create({
    name:"Asif",
    email:"asif234@gmail.com",
    username:"asif9775"
   })
 res.send(createUser);
 
})
app.get('/Update',async(req,res)=>{
  let updateUser= await userModel.findOneAndUpdate({username:"Sohel9775"},{name:"Aktar"},{new:true})
 res.send(updateUser);
 
})
app.get('/Read',async(req,res)=>{
  let readUser= await userModel.find();
 res.send(readUser);
 
})
app.get('/Delete',async(req,res)=>{
  let deleteUser= await userModel.deleteOne({name:"Sohel Aktar"});
 res.send(deleteUser);
 
})
app.listen(3000);