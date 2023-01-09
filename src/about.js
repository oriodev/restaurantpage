const renderAbout = () => {

    const content = document.getElementById("content");

    const aboutCenter = document.createElement('div');
    aboutCenter.setAttribute("class", "aboutCenter");
    content.appendChild(aboutCenter);

    const aboutTitle = document.createElement('h2');
    aboutTitle.setAttribute("class", "aboutTitle");
    aboutTitle.textContent = "PANIKOS";
    aboutCenter.appendChild(aboutTitle);

    const aboutMainSect = document.createElement('div');
    aboutMainSect.setAttribute("class", "aboutMainSect");
    aboutCenter.appendChild(aboutMainSect);

}

export { renderAbout }