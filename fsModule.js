const fs=require('fs');
console.log(fs);
//fs module
/**
 =>Asyncronus Module
 
 * 1.writeFile()
 * 2.appendFile()
 * 3.readFile()
 * 4.rename()
 * 5.unlink()
 * 6.Exists()
 
 =>Syncronus Module
 1.writeFileSync()
 2.appendFileSync()
 3.readFileSync()
 4.RenameSync()
 5.UnlinkSync()
 6.ExistsSync()
 */
fs.writeFile('index.txt','I am a full stack web application developer',(err)=>{
  if(err){
    console.log("TThere is a err",err)
  }else{
    console.log("The file has succesfully created");
  }
})
fs.writeFileSync('index2.txt','I am working as a software Enginner');

fs.readFile('index.txt','utf-8',(err)=>{
    if(err)console.log("Here is a Error");
    else console.log("The file has read");
})
fs.readFileSync('index2.txt','utf-8');

fs.appendFile('index.txt','I am a web application developer',(err,data)=>{
    if(err){
        console.log("Here is a Error")
    }else{
        console.log("The sentence has appended",data);
    }
})
fs.appendFileSync('index.txt',".I am a Computer Science Graduate");
fs.unlink('index.txt',(err,data)=>{
   if(err){
    console.log("Unable to read file")
   }else{
    console.log("The file is deleted")
   }
})
fs.unlinkSync('index.txt');

fs.exists('index2.txt',(err,data)=>{
  if(err){
    console.log("Unable to open the file")
  }else{
    console.log("The file is exists",data);
  }
})
fs.existsSync('index2.txt');

fs.rename('index2.txt','index3.txt',(err,data)=>{
  if(err){
    console.log("The file is Unable to open")
  }else{
    console.log("The File is succesfully renamed")
  }
})

fs.renameSync('index4.txt','index5.txt');