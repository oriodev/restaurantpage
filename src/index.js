import { renderHeader, renderCenter, renderBottomLine } from "./homepage";
import { renderMenu1 } from "./menu";
import { renderAbout } from "./about";

renderHeader();
// render homepage

const homepage = () => {
    console.log("homepage");
    renderCenter();
    renderBottomLine();
}

// render menu

const menu = () => {
    console.log("menu1");
    renderMenu1();
    renderBottomLine();
}


// render about

const about = () => {
    console.log("about");
    renderAbout()
    renderBottomLine();
}

// remove everything

const wipe = () => {
    console.log("wiped");
    const content = document.getElementById("content");

    while (content.childNodes.length > 2) {

        content.removeChild(content.lastChild);
    }
}

// get the links from the dom

const HOME = document.querySelector('.home-link');
const MENU = document.querySelector('.menu-link');
const ABOUT = document.querySelector('.about-link');

// add event listeners to them

HOME.addEventListener('click', function(event) {
    console.log("home pressed");
    wipe();
    homepage();
})

MENU.addEventListener('click', function(event) {
    console.log("menu pressed");
    wipe();
    menu();
})

ABOUT.addEventListener('click', function(event) {
    console.log("about pressed");
    wipe();
    about();
})

homepage();