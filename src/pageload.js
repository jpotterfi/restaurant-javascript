function clearContentBox(){
    while(contentBox.firstChild) {
    contentBox.removeChild(contentBox.firstChild);
    }
}

function createHeader(){
    let header = document.createElement("h1");
    header.id = "header";
    header.innerHTML = "Capital Cats";
    
    let headerTwo = document.createElement("h2");
    headerTwo.id = "headerTwo";
    headerTwo.innerHTML = "Washington D.C.'s Premier Cat Cafe";

    content.appendChild(header);
    content.appendChild(headerTwo);
}

function createNavBar(){
    let navBar = document.createElement("nav");
    navBar.id = "navBar";
    
    let homepage = document.createElement("button");
    homepage.id = "homepageButton";

    let menupage = document.createElement("button");
    menupage.id = "menupageButton";

    let catspage = document.createElement("button");
    catspage.id = "catspageButton";

    let contactpage = document.createElement("button");
    contactpage.id = "contactpageButton";

    homepage.innerHTML = "home";
    menupage.innerHTML = "menu";
    catspage.innerHTML = "cats";
    contactpage.innerHTML = "contact";

    navBar.appendChild(homepage);
    navBar.appendChild(menupage);
    navBar.appendChild(catspage);
    navBar.appendChild(contactpage);

    content.appendChild(navBar);
}

function createHomepage() {
    let contentBox = document.createElement("div");
    contentBox.id = "contentBox";
    
    let homeContent = document.createElement("div");
    homeContent.id = "homeContent";
    homeContent.innerHTML = "Coffee. Cats." + "<br/>" + "Without the usual politics.";
    contentBox.appendChild(homeContent);

    content.appendChild(contentBox);
}

function createFooter(){
    let footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerHTML = "I am a footer";
    content.appendChild(footer);
}

function pageLoad(){
    createHeader();
    createNavBar();
    createHomepage();
    createFooter();
}

export {
    pageLoad,
    clearContentBox
}