// let button = document.getElementById("button12");

const { fips } = require('crypto');

// var height1 = document.createAttribute("height");
// height1.value = "50rem";
// game.setAttributeNode(height1);

// var fs = require ('fs');

// fs.writeFile('like.txt', '5', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

var i;

function myFunction() {
    var game4 = document.getElementById("game1");
    var att = document.createAttribute("class");
    att.value = "game123"
    game4.setAttributeNode(att);
}

function myFunction1() {
  var game4 = document.getElementById("game1");
  var att = document.createAttribute("class");
  att.value = "game"
  game4.setAttributeNode(att);
}
var i = 1;
if(i == 1)
{
  sessionStorage.setItem("like",i);
}

function like()
{
  var like1 = document.getElementById("aaaa");
  i = sessionStorage.getItem("like");
  i++;
  like1 = console.log(i);
  sessionStorage.setItem("like",i);
  // sessionStorage.setItem("like",0);
  // fs.writeFile(i);
  // sessionStorage.setItem("like",fs);
  let partd = document.getElementById("pardt");
  let html;
  html = "";
  html += `<h2>${i-1}</h2>`;
  partd.innerHTML = html;
  // File myFile = new File("like.txt");
  // myFunction12();
  var fs = require('fs');
  fs.open("likestore.txt",'w');
  fs.writeFile("likestore.txt","5");
  var str = fs.readFile("likestore.txt");
  console.log(str);
}

function myFunction12()
{
  var fs = require('fs');
  fs.open("likestore.txt",'w');
  fs.writeFile("like123.txt",'5');
  fs.close();
  // var str = fs.readFile("like123.txt");
  // console.log(str);
}


/*like1.forEach(function (element, index) {
    html += `
          <h2>${i}</h2>        
    `;
  });*/

/*function myFunction02() {
  var game4 = document.getElementById("game2");
  var att = document.createAttribute("class");
  att.value = "game123"
  game4.setAttributeNode(att);
}

function myFunction002() {
var game4 = document.getElementById("game2");
var att = document.createAttribute("class");
att.value = "game"
game4.setAttributeNode(att);
}*/