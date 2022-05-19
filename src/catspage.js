
let cats = [ 
    {
    'name': "Leo",
    'bio':"Leo wants nothing more than to cuddle up on your lap and sleep for a long spell. Be prepared to sit motionless for countless hours.",
    'treat':"Tuna bite",
    'image':"13d1adc141285e2ed72c.png"
    },
    {
    'name': "Penelope",
    'bio':"Penelope prefers the finer things in life and will not shy away from voicing her displeasure at receiving an objectionable treat. (She still may eat it, though.)",
    'treat':"Sashimi",
    'image':"f365b875d3bd031bad90.png"
    },
    {
    'name': "Lofi",
    'bio':"Lofi enjoys sitting on the windowsill and watching passersby. He likes when customers join him in his observation of daily human life.",
    'treat':"Cream with catnip",
    'image':"d22abc97b2d0e2eecf0a.png"
    },
    {
    'name': "Sandiego",
    'bio':"An engimatic feline, Sandiego has been known to go missing from time to time, only to reappear with an artifact or relic from a nearby museum. Sandiego may approach you to trade a piece from her collection in exchange for a treat. If this happens, alert a staff member and we will put you in contact with the Smithsonian immediately.",
    'treat':"Mummified mouse",
    'image':"8897b12139ee87b12cdc.png"
    },
    {
    'name': "Brutus",
    'bio':"Our most senior cat, Brutus spends his time teaching his charges the ins and outs of cafe life.",
    'treat':"Chunky Chicken Fancy Feast",
    'image':"11458355297038ab49fd.png"
    }
]        


function createCatBioBox(catArray){
    catArray.forEach(renderCats);
    function renderCats(cat) {
        let catBioBox = document.createElement("div");
        catBioBox.className = "catBioBox";

        let catImage = document.createElement("img");
        catImage.className = "catImage";
        catImage.src = cat.image;

        
        //////////////////////

        let catInfoContainer = document.createElement("div");
        catInfoContainer.className = "catInfoContainer";

        let catName = document.createElement("div");
        catName.className = "catName";
        catName.innerHTML = "Name: " + cat.name;

        let catBio = document.createElement("div");
        catBio.className = "catBio";
        catBio.innerHTML = cat.bio;
        
        let favoriteTreat = document.createElement("div");
        favoriteTreat.className = "favoriteTreat";
        favoriteTreat.innerHTML = "Favorite Treat: " + cat.treat;

        catInfoContainer.append(catName);
        catInfoContainer.append(catBio);
        catInfoContainer.append(favoriteTreat);

        catBioBox.append(catImage);
        catBioBox.append(catInfoContainer);
        contentBox.appendChild(catBioBox);
    }
}

export {
    cats,
    createCatBioBox
}