let theInput = document.querySelector(".get-repos input"),
getButton = document.querySelector(".get-button"),
photoData = document.querySelector(".show-data");

getButton.onclick = function(){
    getPhotos();
};

function getPhotos(){
    if(theInput.value == ""){
        photoData.innerHTML = "Enter Your any thing";
    }else{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) =>res.json())

        .then((photos) => {
            //Empty the container
            photoData.innerHTML= '';

            //Loop On repos

            photos.forEach(photo => {

                //Create the main div 
                let mainDiv = document.createElement("div");

                //Creat Repo Name Text
                let photoName = document.createTextNode(photo.title);

                //Append The Text To Main Div
                mainDiv.appendChild(photoName);

                

                //Creat Repo URL Anchor
                let theUrl = document.createElement('a');

                //Creat Repo Url Text 
                let theUrlText = document.createTextNode("Show");

                //Append The Repo Url Text To Anchor Tag 
                theUrl.appendChild(theUrlText);

                // Add The Hypertext Reference "href"
                theUrl.href = `https://via.placeholder.com/${theInput.value}`;

                //Set Attribute Blank 
                theUrl.setAttribute('target','_blank');

                //Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);
                
                //Add class to Main Div
                mainDiv.className = 'repo-box';

                //Appent The Main Div To Container
                photoData.appendChild(mainDiv);

            });
        })
    }
}
