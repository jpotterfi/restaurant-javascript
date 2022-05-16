import './style.css';
import {pageLoad, clearContentBox} from "./pageload";

let content = document.getElementById("content");

pageLoad();


let homepageButton = document.getElementById("homepageButton");
homepageButton.addEventListener("click", function(){
console.log("homepage");
clearContentBox();
});

let menupageButton = document.getElementById("menupageButton");
menupageButton.addEventListener("click", function(){
console.log("menupage");
});

let catspageButton = document.getElementById("catspageButton");
catspageButton.addEventListener("click", function(){
console.log("catspage");
});

let contactButton = document.getElementById("contactpageButton");
contactButton.addEventListener("click", function(){
console.log("contactpage");
});

//on button click, load new content into content box

//let content = document.getElementById("content");
//let test = document.createElement("div");
//test.innerHTML = "lalala"
//content.appendChild(test);