'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const cards = [{
        name: 'beach',
        url: './style/img/becah.jpg',
        title: ' To the Beach!',
        description: 'Description about beach'
    },
    {
        name: 'space',
        url: './style/img/space.jpg',
        title: 'To the Space!',
        description: 'Description about space'
    },
    {
        name: 'desert',
        url: './style/img/desert.jpg',
        title: 'To the Desert!',
        description: 'Description about desert'
    },
    {
        name: 'mounts',
        url: './style/img/mounts.jpg',
        title: 'To the Mount!',
        description: 'Description about mounth'
    },
    {
        name: 'sea',
        url: './style/img/sea.jpg',
        title: 'To the sea!',
        description: 'Descripton abput sea!'
    }];
    
    const mainList = document.querySelector('.main__list');
    
    /*function createImageList(imageArr) {
        imageArr.forEach(obj => {
            const listItem = document.createElement('li');
            
            listItem.classList.add('main__item');
            listItem.classList.add(`main__item--${obj.name}`);

            listItem.style.backgroundImage = `url(${obj.url})`;
    
            const listHeading = document.createElement('h2');
            listHeading.textContent = `${obj.title}`;
    
            const listDescription = document.createElement('p');
            listDescription.textContent = `${obj.description}`;
    
            const btn = document.createElement('button');
            btn.textContent = 'Click me!';
    
            listItem.appendChild(listHeading);
            listItem.appendChild(listDescription);
            listItem.appendChild(btn);
    
    
            mainList.appendChild(listItem)
        });
    }
    
    createImageList(cards);*/

    function createImageList(imgArr) {
        imgArr.forEach(card => {
            const createdCard = `<li class = "main__item" style = "background-image: url(${card.url})">
                                    <h2>${card.title}</h2>
                                    <p>${card.description}</p>
                                    <button>Click me!</button>
                                </li>`
            
            mainList.insertAdjacentHTML("beforeend", createdCard)
        });
    }

    createImageList(cards)
})