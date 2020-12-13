'use strict'
// TABS SERVICES

const tabs = document.querySelector('.tabs_services')
const titles = tabs.querySelectorAll('.tabs-title')
const items = tabs.querySelectorAll('.tab')

function tabNext(arr, i) {
    arr.forEach( item => {
        item.forEach( i => {i.classList.remove('active')})
        item[i].classList.add('active')
    })
}

for(let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', () => {
        tabNext([titles, items], i)
    });
}

// BUTTON MORE IMG

const btnMore = document.getElementById('btn_more');
const imgMore = document.querySelector('.load_tabs');
const thirdBlock = document.querySelector('.secondload_tabs');

btnMore.addEventListener('click', (event) => {
    event.preventDefault();
    imgMore.classList.remove('hidden_block');

    btnMore.addEventListener('click', () => {
        thirdBlock.classList.remove('blockhide_second');
        btnMore.style.display = 'none';
    })
});

// TABS IMG

let tabNav = document.querySelectorAll('.amazing_works'),
    tabContent = document.querySelectorAll('.data_tabs'),
    tabName;

tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
});

function selectTabNav() {
    tabNav.forEach(item => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach(item => {
        if (item.classList.contains(tabName) ) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

//SLIDER

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    const slides = document.querySelectorAll(".slider_block");
    const icons = document.querySelectorAll(".icon_slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('active-icon')
    }
    slides[slideIndex - 1].style.display = "block";
    icons[slideIndex - 1].classList.add("active-icon");
}
document.getElementById('btn_prev').addEventListener('click', prevSlide);
document.getElementById('btn_next').addEventListener('click', nextSlide);

