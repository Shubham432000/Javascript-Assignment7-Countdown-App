
let remaining = new Date("mar 4 ,2023 09:55:00").getTime()

let x = setInterval(function(){

let current = new Date().getTime()

let diff = remaining-current;
console.log(diff)

let day= Math.floor(diff / (1000*60*60*24))
console.log(day)

let hour =Math.floor ((diff % (1000*60*60*24)) / (1000*60*60))
console.log(hour)
let min = Math.floor((diff % (1000*60*60)) / (1000*60))
console.log(min)
let sec1 = Math.floor((diff % (1000*60)) / 1000)
console.log(sec1)

// document.getElementById("count").innerHTML= day + " d" + hour + "hr" +min + "M"+ sec1 +"s"

document.getElementById("count").innerHTML= day 
document.getElementById("count1").innerHTML= hour 
document.getElementById("count2").innerHTML= min 
document.getElementById("count3").innerHTML= sec1 

},1000)