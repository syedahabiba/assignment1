

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()  +":" + today.getMinutes() +":" + today.getSeconds();
var dateTime = date+'<br>'+time;

document.getElementById("displayDateTime").innerHTML =  dateTime + ' <br> Day :- ' + daylist[day];
