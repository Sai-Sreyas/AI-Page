var fs = require('fs');
var writeText = "Text to be written";
var appendText = ".....This will be added at the end";

fs.readFile('text1.txt','UTF-8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

fs.writeFile('text2.txt',writeText,function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log("Write Operaton complete")
    }
})

fs.appendFile('text2.txt', appendText,function(err,data) {
    if(err){
        console.log(err)
    }
    else{
        console.log("Append Operation complete")
    }
})