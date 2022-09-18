const getName=function(){
    console.log("This is my first function");
}
const myName=function(){
   console.log("I am Abu Al Shahriar Rifat");
}
const myCountry=function()
{
 console.log(`I love my Country so much`)
}
const cgpa=3.45
// exports.getName=getName;
// exports.myName=myName;
// exports.myCountry=myCountry;
// exports.cgpa=cgpa;

module.exports={
    getName,
    myName,
    myCountry,
    cgpa
}