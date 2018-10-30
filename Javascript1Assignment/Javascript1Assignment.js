function random(myArray)
{
  return myArray[Math.floor(Math.random()*myArray.length)];
}
var myArray = [25, 'E', "Bean", true, "Meme", 17];

var el1 = document.getElementById("first")

el1.textContent = random(myArray);

var el2 = document.getElementById("second")

el2.textContent = random(myArray);

var el3 = document.getElementById("third")

el3.textContent = random(myArray);

var el4 = document.getElementById("fourth")

el4.textContent = random(myArray);
