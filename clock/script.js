const HOURHAND = document.querySelector('.hour');
const MINUTEHAND = document.querySelector('.minute');
const SECONDHAND = document.querySelector('.second');

function runClock() {
    var date = new Date();
    console.log(date);
    var dateHour = date.getHours(); 
    var dateMinute = date.getMinutes();
    var dateSecond = date.getSeconds();
    console.log("Today's date is: "+"Hour: " + dateHour + " " + "Minute: "+dateMinute + " " + "Second: "+ dateSecond);

    let hourPosition = (dateHour * 360/12) + ((dateMinute * 360/60)/12);
    let minutePosition = (dateMinute * 360/60) + ((dateMinute*360/60)/60);
    let secondPosition = dateSecond * 360/60;

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
    
    document.getElementById("date").innerHTML = date;
}

var interval = setInterval(runClock, 1000);

