import './style.css';
import leo from './images/leo.png';
import lofi from './images/lofi.png';
import penelope from './images/penelope.png';
import brutus from './images/brutus.png';
import sandiego from './images/sandiego.png';
import {pageLoad, clearContentBox} from "./pageload";
import {cats, createCatBioBox} from "./catspage";
import {createHomeContent} from "./homepage";
import {coffeeArray, teaArray, foodArray, createMenu} from './menupage';

let content = document.getElementById("content");

pageLoad();




let homepageButton = document.getElementById("homepageButton");
homepageButton.addEventListener("click", function(){
    console.log("homepage");
    clearContentBox();
    createHomeContent();
});

let menupageButton = document.getElementById("menupageButton");
menupageButton.addEventListener("click", function(){
console.log("menupage");
clearContentBox();
createMenu(coffeeArray, teaArray, foodArray);
});

let catspageButton = document.getElementById("catspageButton");
catspageButton.addEventListener("click", function(){
console.log("catspage");
    clearContentBox();
    createCatBioBox(cats);
});



//on button click, load new content into content box

//let content = document.getElementById("content");
//let test = document.createElement("div");
//test.innerHTML = "lalala"
//content.appendChild(test);