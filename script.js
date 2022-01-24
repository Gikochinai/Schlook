
var x = document.getElementById('gym');
var y = document.getElementById('computer');
var z = document.getElementById('room');
var u = document.getElementById('books');
var p = document.getElementById('kekchen');
var i = document.getElementById('container');
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  u.style.display = "none";
  p.style.display = "none";
  i.style.display = "none";
$("#show").click(function(){
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});

$("#show1").click(function(){
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

});

$("#show2").click(function(){
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

});

$("#show3").click(function(){
  if (u.style.display === "none") {
    u.style.display = "block";
  } else {
    u.style.display = "none";
  }

});

$("#show4").click(function(){
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }

});

$("#btn-drop-down").click(function(){
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }

});
