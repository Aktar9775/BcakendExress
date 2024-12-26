var arr=[1,3,4,5];
// arr.forEach(function(val){
//   console.log(val+ "Hello");
// })
//-----------MAP------
// let newarr = arr.map(function(val){
//     return val*2;
// })
// console.log(newarr);
//------- Filter-------
// var ans=arr.filter(function(val){
//   if(val>3) return true;
//   else return false;
// })
// console.log(ans);
//------------Find----
// var ans =arr.find(function(val){
//   if(val===3){
//     return val;
//   }
// })
// console.log(ans);
//---------------------
// var obj={
//   Name:"Sohel",
//   Surname:"Aktar"
// }
// console.log( obj.Name +" "+ obj.Surname);
// console.log( obj);

//---------------- Async Function
async function fun (){
  var blob= await fetch(`https://randomuser.me/api/`) ;
  var ans = await blob.json();
  console.log(ans.results[0].name); 
}
fun();