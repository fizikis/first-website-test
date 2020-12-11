/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Scream.jpg') {
      myImage.setAttribute('src','images/Scream2.jpeg');
    } else {
      myImage.setAttribute('src','images/Scream.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Who makes you scream, ' + myName + "?";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Who makes you scream, ' + storedName + "?";
}

myButton.onclick = function() {
  setUserName();
}
