'use strict';

const masonry = document.querySelector('.grid-gallery-list');

const msnr = new Masonry(masonry,{
    itemSelector: '.grid-gallery-item',
    columnWidth: 370,
    gutter: 21,
});

const hiddenGrid = document.querySelector('.grid-list.hidden-grid');
const btnGrid = document.getElementById('grid_btn');

    btnGrid.addEventListener('click', (event) => {
        event.preventDefault();
        btnGrid.style.display = 'none';
        hiddenGrid.classList.remove('hidden-grid');

        const hidden = document.querySelector('.grid-list');

        const hidGrid = new Masonry(hidden,{
            itemSelector: '.grid-hidden-item',
            columnWidth: 370,
            gutter: 21,
        });
    })
