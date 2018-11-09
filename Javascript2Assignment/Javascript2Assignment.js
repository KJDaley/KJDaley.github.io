var random1 = function calcRandom1 (n)
{
  var randNum1 = Math.round(Math.random() * n);
  return randNum1;
}

var sans1 = random1(10);

var random2 = function calcRandom2 (m)
{
  var randNum2 = Math.round(Math.random() * m);
  return randNum2;
}

var sans2 = random1(10);

function calcSum (x1, y1)
{
  var sum = x1 + y1;
  return sum;
}

function calDiff (x2, y2)
{
  var diff = x2 - y2;
  return diff;
}

function calcPro (x3, y3)
{
  var pro = x3 * y3;
  return pro;
}

function calcQuo (x4, y4)
{
  var quo = x4 / y4;
  return quo;
}

var theSum = calcSum (sans1, sans2)
var theDiff = calDiff (sans1, sans2)
var thePro = calcPro (sans1, sans2)
var theQuo = calcQuo (sans1, sans2)

var el1 = document.getElementById("first");
el1.textContent = theSum;

var el1 = document.getElementById("second");
el1.textContent = theDiff;

var el1 = document.getElementById("third");
el1.textContent = thePro;

var el1 = document.getElementById("fourth");
el1.textContent = theQuo;
