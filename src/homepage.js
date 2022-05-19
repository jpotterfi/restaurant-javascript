function createHomeContent() {
    let homeContent = document.createElement("div");
    homeContent.id = "homeContent";
    homeContent.innerHTML = "Coffee. Cats." + "<br/>" + "Without the usual politics.";
    contentBox.appendChild(homeContent);

    content.appendChild(contentBox);
}

export {
    createHomeContent
}
