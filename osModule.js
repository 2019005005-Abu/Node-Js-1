const os=require('os');
const path=require('path')
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(__dirname);
console.log(__filename);
console.log(path);
const extensionName=path.extname('index.js');
console.log(extensionName);
const joinName=path.join(__dirname+"/Abu Al "+"/Shah");
console.log(joinName);

