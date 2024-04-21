function time() {
    var date = new Date("16 june 2024").getTime();
    var date2 = new Date().getTime()
    var diff = date - date2;

    var day = Math.floor(diff / (1000 * 3600 * 24));
    document.getElementById("day").innerHTML = day;
    
    var hour = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
    document.getElementById("hour").innerHTML = hour;
    
    var min = Math.floor((diff & (1000 * 3600)) / (1000 * 60 ));
    document.getElementById("min").innerHTML = min;

    var sec = Math.floor((diff % (1000 * 60))  / 1000 );
    document.getElementById("sec").innerHTML = sec;

}
time()
setInterval(time, 1000);