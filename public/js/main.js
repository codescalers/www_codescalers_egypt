/**
 * Dropdown menu
 */
document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener('click', function () {
                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('hidden');
                }
            });
        }
    }
});

let menuBtn = document.getElementById('menuBtn');
let menu = document.getElementById('menu');

menuBtn.addEventListener('click', function () {
    console.log('clicked')
    if (menu.classList.contains('hidden')) {
        menu.classList.replace('hidden', 'block')
    } else {
        menu.classList.replace('block', 'hidden')
    }
});

let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.replace('top-10', 'top-0');
    } else {
        navbar.classList.replace('top-0', 'top-10');
    }
});
const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    }
];

const options = {
    activeItemPosition: 1,
    interval: 8000,
    indicators: {
        activeClasses: 'bg-cs-blue dark:bg-gray-800',
        inactiveClasses: 'bg-cs-blue/50 dark:bg-gray-800/50 hover:bg-cs-blue dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            }
        ]
    }
};
const carousel = new Carousel(items, options);
carousel.cycle()
