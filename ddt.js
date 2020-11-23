var cp=require('child_process')
var fs=require('fs')
username="dp"

var cmd=(fs.readFileSync("template.bat").toString().replace("edwinlau",username))
for (var sssss=0;sssss<100;sssss++)
cmd.replace("20w10a","20w14infinite");
console.log(cmd)