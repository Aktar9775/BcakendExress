const fs = require('fs');

//-----------Create File ---------------
// fs.writeFile("hey.txt","I am sohel Aktar learning NodeJS",function(err){
//   if(err) console.error(err);
//   else console.log("Done");
// })
//---------- Append File --------------
//  fs.appendFile("hey.txt"," I am from West Bengal",function(err){
//   if(err) console.error(err);
//   else console.log("File Append is done");
//  })
// -------------Rename File----------
// fs.rename("hey.txt","Hello.txt",function(err){
//    if(err) console.error(err);
//    else console.log("Rename Completed!");
//   })
//-------------Copy------------
// fs.copyFile("Hello.txt","./Copy/hi.txt",function(err){
//   if(err) console.error(err);
//   else console.log("File Copied");
//  })
//-------------Unlink / Delete File----------
// fs.unlink("Hello.txt",function(err){
//   if(err) console.error(err);
//   else console.log("Remove");
//  })
//--------------remove Directiory-----
// recursive:true means if any file are in the directory present
fs.rm("./Copy",{recursive:true},function(err){
  if(err) console.error(err);
  else console.log("Directory Remove");
})