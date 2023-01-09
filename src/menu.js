const renderMenu1 = () => {
    const content = document.getElementById("content");

    // CREATE CENTER
    const center = document.createElement('div');
    center.setAttribute("class", "center");
    content.appendChild(center);

    // CREATE MAIN SECT
    const mainSect = document.createElement('div');
    mainSect.setAttribute("class", "mainSect");
    center.appendChild(mainSect);

    // CREATE TITLE
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.textContent = "MENU ONE";
    mainSect.appendChild(menuTitle);

    // CREATE CIRCLES
    const menuCircles = document.createElement('div');
    menuCircles.setAttribute("class", "menuCircles");
    center.appendChild(menuCircles);

    const circle1 = document.createElement('div');
    circle1.textContent = "-";
    menuCircles.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.textContent = "-";
    menuCircles.appendChild(circle2);

    const circle3 = document.createElement('div');
    circle3.textContent = "-";
    menuCircles.appendChild(circle3);

}

const renderMenu2 = () => {
    const content = document.getElementById("content");

    // CREATE CENTER
    const center = document.createElement('div');
    center.setAttribute("class", "center");
    content.appendChild(center);

    // CREATE MAIN SECT
    const mainSect = document.createElement('div');
    mainSect.setAttribute("class", "mainSect");
    center.appendChild(mainSect);

    // CREATE TITLE
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.textContent = "MENU TWO";
    mainSect.appendChild(menuTitle);

    // CREATE CIRCLES
    const menuCircles = document.createElement('div');
    menuCircles.setAttribute("class", "menuCircles");
    center.appendChild(menuCircles);

    const circle1 = document.createElement('div');
    circle1.textContent = "-";
    menuCircles.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.textContent = "-";
    menuCircles.appendChild(circle2);

    const circle3 = document.createElement('div');
    circle3.textContent = "-";
    menuCircles.appendChild(circle3);

}

const renderMenu3 = () => {
    const content = document.getElementById("content");

    // CREATE CENTER
    const center = document.createElement('div');
    center.setAttribute("class", "center");
    content.appendChild(center);

    // CREATE MAIN SECT
    const mainSect = document.createElement('div');
    mainSect.setAttribute("class", "mainSect");
    center.appendChild(mainSect);

    // CREATE TITLE
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.textContent = "MENU THREE";
    mainSect.appendChild(menuTitle);

    // CREATE CIRCLES
    const menuCircles = document.createElement('div');
    menuCircles.setAttribute("class", "menuCircles");
    center.appendChild(menuCircles);

    const circle1 = document.createElement('div');
    circle1.textContent = "-";
    menuCircles.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.textContent = "-";
    menuCircles.appendChild(circle2);

    const circle3 = document.createElement('div');
    circle3.textContent = "-";
    menuCircles.appendChild(circle3);

}

export { renderMenu1, renderMenu2, renderMenu3}