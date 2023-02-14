
function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("clock").innerHTML =
      hours + ":" + minutes + ":" + seconds;
  }
  setInterval(displayTime, 1000);