let destinations = document.getElementById("destinations");

let request = new XMLHttpRequest();
let requestURL = "https://arfp.eu/dataset/voyages.json";

request.open('GET', requestURL, true);
request.send();
request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let reponse = JSON.parse(request.responseText);
        Object.keys(reponse).forEach(function(k){
            addDestination(destinations, reponse[k]);
        });
    }
}

function addDestination(elemt, value){
    let destination = document.createElement("div");
    destination.className = "destination";
    elemt.appendChild(destination);

    let titleDestination = document.createElement("h1");
    titleDestination.className = "title-destination";
    titleDestination.innerHTML = value.titre;
    destination.appendChild(titleDestination);

    let imgDestination = document.createElement("img");
    imgDestination.className = "img-destination";
    imgDestination.src = "./images/destination.jfif";
    destination.appendChild(imgDestination);

    let descriptionDestination = document.createElement("article");
    descriptionDestination.className = "description-destination";
    descriptionDestination.innerHTML = value.description;
    destination.appendChild(descriptionDestination); 

    let buttonDestination = document.createElement("button");
    buttonDestination.className = "button-description";
    buttonDestination.innerText = "Lire la suite";
    destination.appendChild(buttonDestination);
}