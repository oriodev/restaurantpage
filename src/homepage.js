const renderHeader = () => {

    const content = document.getElementById("content");

    const header = document.createElement('div');
    header.setAttribute("class", "header");
    content.appendChild(header);

    const homeLink = document.createElement('p');
    homeLink.textContent = "HOME";
    homeLink.setAttribute("id", "nav-links");
    homeLink.setAttribute("class", "home-link");
    header.appendChild(homeLink);

    const menuLink = document.createElement('p');
    menuLink.textContent = "MENU";
    menuLink.setAttribute("id", "nav-links");
    menuLink.setAttribute("class", "menu-link");
    header.appendChild(menuLink);

    const aboutLink = document.createElement('p');
    aboutLink.textContent = "ABOUT";
    aboutLink.setAttribute("id", "nav-links");
    aboutLink.setAttribute("class", "about-link");
    header.appendChild(aboutLink);

}

const renderBottomLine = () => {
    const content = document.getElementById("content");

    const bottomLine = document.createElement('div');
    bottomLine.setAttribute("class", "bottom_line");
    content.appendChild(bottomLine);
}

const renderCenter = () => {
    const content = document.getElementById("content");

    const center = document.createElement('div');
    center.setAttribute("class", "center");
    content.appendChild(center);

    // TITLE

    const title = document.createElement('div');
    title.setAttribute("class", "title");
    center.appendChild(title);

    const titleText = document.createElement('h1');
    titleText.textContent = "PANIKOS";
    title.appendChild(titleText);

    // CIRCLE

    const circles = document.createElement('div');
    circles.setAttribute("class", "circles");
    center.appendChild(circles);

    const circle1 = document.createElement('div');
    circle1.textContent = "-";
    circles.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.textContent = "-";
    circles.appendChild(circle2);

    const circle3 = document.createElement('div');
    circle3.textContent = "-";
    circles.appendChild(circle3);
    
}

export { renderHeader, renderBottomLine, renderCenter }