var element1 =  document.querySelector("h1.first");
element1.innerHTML = "<b><i>This is the first line of the web page.</i></b>";

var listItems = document.getElementsByTagName("li");
listItems[0].parentNode.setAttribute("class", "first")

var newlist = document.createElement("li");
var some = document.createTextNode("I bless the rains down in Africa");
newlist.appendChild(some);

var parent = listItems[0].parentNode;
parent.appendChild(newlist);
