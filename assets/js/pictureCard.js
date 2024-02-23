// Create a class to create a card for each picture
class PictureCard {
    constructor(picture) {
        this.picture = picture;
    }

    // Function to create a card
    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const img = document.createElement('img');
        img.src = this.picture.url;
        img.classList.add('card-img-top');

        const title = document.createElement('p');
        title.textContent = this.picture.title;
        title.classList.add('card-text');

        card.appendChild(cardBody);
        cardBody.appendChild(img);
        cardBody.appendChild(title);

        return card;
    }
}

export {PictureCard};