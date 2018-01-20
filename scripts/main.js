//Icon swap behavior
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spotify-logo.png') {
      myImage.setAttribute ('src','images/construction-icon.png');
    } else {
      myImage.setAttribute ('src','images/spotify-logo.png');
    }
}

//local name storage behavior
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var welcomeMessage = "Welcome to my website, ";

function setUserName() {
  var name = prompt('Please enter your name.');
  localStorage.setItem('name', name);
  myHeading.textContent = welcomeMessage + name;
}

//init name if set
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = welcomeMessage + storedName;
}

//set button click behavior
myButton.onclick = function () {
    setUserName();
}