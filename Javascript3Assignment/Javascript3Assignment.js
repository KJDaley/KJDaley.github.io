function aGame(hn, vn)
{
  this.homeName = hn;
  this.vistorName = vn;
  this.getSummery = function()
  {
    var sumArray = new Array();
    sumArray[0] = this.homeName;
    sumArray[1] = Math.floor(Math.random() * 20 + 70);
    sumArray[2] = this.vistorName;
    sumArray[3] = Math.floor(Math.random() * 20 + 70);
    return sumArray;
  }
}

var game1 = new aGame("Cardinals: ", " Ravens: ");
var game2 = new aGame("Blue Jays: ", " Parrots: ");
var game3 = new aGame("Eagles: ", " Robins: ");
var game4 = new aGame("Vultures: ", " Penguins: ");
var game5 = new aGame("Falcons: ", " Swallows: ");
var game6 = new aGame("Owls: ", " Seagulls: ");

var element1 = document.getElementById("first");
var results1 = game1.getSummery();
element1.textContent = results1[0] + results1[1] + results1[2] + results1[3];

var element2 = document.getElementById("second");
var results2 = game2.getSummery();
element2.textContent = results2[0] + results2[1] + results2[2] + results2[3];

var element3 = document.getElementById("third");
var results3 = game3.getSummery();
element3.textContent = results3[0] + results3[1] + results3[2] + results3[3];

var element4 = document.getElementById("fourth");
var results4 = game4.getSummery();
element4.textContent = results4[0] + results4[1] + results4[2] + results4[3];

var element5 = document.getElementById("fifth");
var results5 = game5.getSummery();
element5.textContent = results5[0] + results5[1] + results5[2] + results5[3];

var element6 = document.getElementById("sixth");
var results6 = game6.getSummery();
element6.textContent = results6[0] + results6[1] + results6[2] + results6[3];
