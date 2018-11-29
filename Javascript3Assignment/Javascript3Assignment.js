function aGame(hn, vn, hs, vs)
{
  this.homeName = hn;
  this.vistorName = vn;
  this.homeScore = hs;
  this.vistorScore = vs;
  this.getSummery = function()
  {
    var sumArray = new Array();
    sumArray[0] = this.homeName;
    sumArray[1] = this.homeScore;
    sumArray[2] = this.vistorName;
    sumArray[3] = this.vistorScore;
    return sumArray;
  }
}

var a = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var b = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var c = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var d = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var e = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var f = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var g = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var h = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var i = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var j = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var k = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var l = ['70', '71', '72', '73', '74', '75', '76', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];

var random1 = a[Math.floor(Math.random() * a.length)];
var random2 = b[Math.floor(Math.random() * b.length)];
var random3 = c[Math.floor(Math.random() * c.length)];
var random4 = d[Math.floor(Math.random() * d.length)];
var random5 = e[Math.floor(Math.random() * e.length)];
var random6 = f[Math.floor(Math.random() * f.length)];
var random7 = g[Math.floor(Math.random() * g.length)];
var random8 = h[Math.floor(Math.random() * h.length)];
var random9 = i[Math.floor(Math.random() * i.length)];
var random10 = j[Math.floor(Math.random() * j.length)];
var random11 = k[Math.floor(Math.random() * k.length)];
var random12 = l[Math.floor(Math.random() * l.length)];

var game1 = new aGame("Cardinals: ", " Ravens: ", random1, random2);
var game2 = new aGame("Blue Jays: ", " Parrots: ", random3, random4);
var game3 = new aGame("Eagles: ", " Robins: ", random5, random6);
var game4 = new aGame("Vultures: ", " Penguins: ", random7, random8);
var game5 = new aGame("Falcons: ", " Swallows: ", random9, random10);
var game6 = new aGame("Owls: ", " Seagulls: ", random11, random12);

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
