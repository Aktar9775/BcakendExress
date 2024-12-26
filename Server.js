
//  ---------- HTTP -------------

// const http= require('http');
// const Server=http.createServer(function(req,res){
//   res.end("Hello i create a server");
// })
// Server.listen(3000);


//-=========== Express =============

const { error } = require('console');
const Express =  require('express');
const app= Express();
//-------Middlewares--------
app.use(function(req,res,next){
  console.log("This is first Middleware");
  next();
})
app.use(function(req,res,next){
  console.log("This is Second Middleware ");
  next();
})

//------------route--------------
app.get("/",function(req,res){
  res.send("I am Express JS");
})
app.get("/Home",function(req,res){
  res.send("Home Page");
})
app.get("/Error",function(req,res,next){
return next(new Error("I don't Know !!"))
})
//-------------Error-----------
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000);
