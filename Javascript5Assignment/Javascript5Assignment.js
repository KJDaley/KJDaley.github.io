function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor1 = "X coords: " + x;
    var coor2 = "Y coords: " + y;
    document.getElementById("uno").innerHTML = coor1;
    document.getElementById("dos").innerHTML = coor2;
}

function setZero(e) {
  if (e.keyCode == 67)
  {
    document.getElementById("uno").innerHTML = "X coords: "+ 0;
    document.getElementById("dos").innerHTML = "Y coords: " + 0;
  }
}

document.addEventListener('keydown', setZero, false);
