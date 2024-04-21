var sec = document.getElementById("sec");


var date = new Date("16 june 2024").getTime();
var date2 = new Date().getTime()
var diff = date - date2;

function time() {
    var cal1 = Math.floor(diff / (1000 * 3600 * 24));
    var day = document.getElementById("day").innerHTML = cal1;
    
    var hour = document.getElementById("hour");
    var cal2 = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hour.innerHTML = cal2;
    console.log(cal2);
    
    var min = document.getElementById("min");
    var diff3 = Math.floor((date - date2) / (1000 * 60 ));
    min.innerHTML = diff3;

// var min = Math.floor((diff % (1000 * 60 * 60 ) / (1000 * 60)));
// var sec = Math.floor((diff % (1000 * 60)) / 1000);

}
time()
// setInterval(time, 1000);