import { ContextReplacementPlugin } from "webpack";
import { clearContentBox } from "./pageload";

function catFactory(name, bio, treat, toy, image){
    this.name = name;
    this.bio = bio;
    this.treat = treat;
    this.image = image;

    return {name, bio, treat, toy, image};
}

const leo = catFactory("Leo", "I'm a cute cat", "tuna fish", "url(./images/sleepy-cat.gif)")

const cafeCats = [leo];

function createCatBioBox(catArray){
    catArray.forEach(renderCats);
    function renderCats(cat) {
        let catBioBox = document.createElement("div");
        catBioBox.className = "catBioBox";

        let catImage = document.createElement("img");
        catImage.className = "catImage";
        catImage.style.backgroundImage = cat.image;

        
        //////////////////////

        let catInfoContainer = documnet.createElement("div");
        catInfoContainer.className = "catInfoContainer";

        let catName = document.createElement("div");
        catName.className = "catName";
        catName.innerHTML = "Name:" + cat.name;

        let catBio = document.createElement("div");
        catBio.className = "catBio";
        catBio.innerHTML = cat.bio;
        
        let favoriteTreat = document.createElement("div");
        favoriteTreat.className = "favoriteTreat";
        favoriteTreat.innerHTML = cat.treat;

        catInfoContainer.append(catName);
        catInfoContainer.append(catBio);
        catInfoContainer.append(catName);
        catInfoContainer.append(favoriteTreat);

        catBioBox.append(catImage);
        catBioBox.append(catInfoContainer);
        contentBox.appendChild(catBioBox);
    }
}

export {
    cafeCats,
    createCatBioBox
}