const renderMenu1 = () => {
    const content = document.getElementById("content");

    // CREATE CENTER
    const center = document.createElement('div');
    center.setAttribute("class", "center");
    center.setAttribute('id', 'center');
    content.appendChild(center);

    // CREATE MAIN SECT
    const mainSect = document.createElement('div');
    mainSect.setAttribute("class", "mainSect");
    mainSect.setAttribute('id', 'mainSect');
    center.appendChild(mainSect);

    // CREATE TITLE
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.setAttribute('id', 'menuTitle');
    menuTitle.textContent = "MENU ONE";
    mainSect.appendChild(menuTitle);

    // CREATE CIRCLES
    const menuCircles = document.createElement('div');
    menuCircles.setAttribute("class", "menuCircles");
    menuCircles.setAttribute('id', 'menuCircles');
    center.appendChild(menuCircles);

    const circle1 = document.createElement('div');
    circle1.setAttribute('id', 'circle1');
    circle1.textContent = "-";
    menuCircles.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.setAttribute('id', 'circle2');
    circle2.textContent = "-";
    menuCircles.appendChild(circle2);

    const circle3 = document.createElement('div');
    circle3.setAttribute('id', 'circle3');
    circle3.textContent = "-";
    menuCircles.appendChild(circle3);

    const CIRCLEONE = document.getElementById('circle1');
    const CIRCLETWO = document.getElementById('circle2');
    const CIRCLETHREE = document.getElementById('circle3');

    CIRCLEONE.addEventListener('click', function(event) {
        menuTitle.textContent = "MENU ONE";
    })

    CIRCLETWO.addEventListener('click', function(event) {
        menuTitle.textContent = "MENU TWO";
    })

    CIRCLETHREE.addEventListener('click', function(event) {
        menuTitle.textContent = "MENU THREE";
    })

}

export { renderMenu1 }