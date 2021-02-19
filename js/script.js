var i = 0;
var txt = 'Joris ter Wolbeek';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}