import {PictureCard} from './pictureCard.js';

async function getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const pictureCards = document.getElementById('picture-cards');

    try {
        const response = await fetch(url);
        const data = await response.json();

        data.slice(0, 20).forEach(photo => {
            const pictureCard = new PictureCard(photo);
            const card = pictureCard.createCard();
            pictureCards.appendChild(card);
        });

        const mensajePromesa = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("Información Enviada");
                }, 3000);
            });
        };

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
