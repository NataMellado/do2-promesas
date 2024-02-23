import {PictureCard} from './pictureCard.js';

// Function async to get the photos from the API
async function getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const pictureCards = document.getElementById('picture-cards');

    // Use of try and catch to handle the promise and the error
    try {
        // Make an HTTP GET request using fetch and await the response
        const response = await fetch(url);
        // Extract the JSON body content from the response and turn it into a JavaScript object
        const data = await response.json();

        // Iterate over the first 20 photos and create a card for each one
        data.slice(0, 20).forEach(photo => {
            const pictureCard = new PictureCard(photo);
            const card = pictureCard.createCard();
            pictureCards.appendChild(card);
        });

        //Function to create a promise that will be resolved after 3 seconds
        const mensajePromesa = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("Información Enviada");
                }, 3000);
            });
        };

        //Function to show the message of the promise
        async function mostrarMensaje() {
            const mensaje = await mensajePromesa();
            console.log(mensaje);
        }

        mostrarMensaje();
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

getPhotos();
