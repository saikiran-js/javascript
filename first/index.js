function displayTime() {
    time = new Date();
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);