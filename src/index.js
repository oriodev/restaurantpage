import { renderHeader, renderCenter, renderBottomLine } from "./homepage";
import { renderMenu1, renderMenu2, renderMenu3 } from "./menu";
import { renderAbout } from "./about";

// render homepage first

renderHeader();
renderCenter();
renderBottomLine();

// get the links from the dom

const HOME = document.querySelector('.home-link');
const MENU = document.querySelector('.menu-link');
const ABOUT = document.querySelector('.about-link');

// add event listeners to them

HOME.addEventListener('click', function(event) {
    console.log("sup");
})

MENU.addEventListener('click', function(event) {
    console.log("menuuuu");
})

ABOUT.addEventListener('click', function(event) {
    console.log("abttt the wooow");
})