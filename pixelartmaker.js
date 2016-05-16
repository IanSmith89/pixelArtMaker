
function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  newDiv.className += "pixel";
  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

var column = 5564;
for (var i = 0; i < column; i++){

    addElement();

}


var colorIt = function(e) {
  e.target.setAttribute('style', 'background-color:' + currentColor);
}
var divs = document.getElementsByClassName('pixel');

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', colorIt);
}

var currentColor = 'red';
var redButton = document.querySelector('.red');
var greenButton = document.querySelector('.green');
var blueButton = document.querySelector('.blue');


redButton.addEventListener('click', function(){
  currentColor = 'red';
  colorIt();
})
greenButton.addEventListener('click', function(){
  currentColor = 'green';
  colorIt();
})
blueButton.addEventListener('click', function(){
  currentColor = 'blue';
  colorIt();
})
