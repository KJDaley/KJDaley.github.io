
function sans(a, b)
{
  var add = a + b;
  var sub = a - b;
  var multi = a * b;
  var div = a / b;

  var beans = [add, sub, multi, div];

  return beans;

}

function random(x)
{
  return x[Math.floor(Math.random()*x.length)];
}

var culk = sans(10, 10);

var el1 = document.getElementById("first");

el1.textContent = random(culk);

var el1 = document.getElementById("second");

el1.textContent = random(culk);

var el1 = document.getElementById("third");

el1.textContent = random(culk);

var el1 = document.getElementById("fourth");

el1.textContent = random(culk);
