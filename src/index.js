import './styles.css';
import { getHomePage } from './home.js';
import { getMenuPage } from './menu.js';
import { getAboutPage } from './about.js';

const content = document.getElementById('content');
getHomePage(content);

const pageBtns = [
    document.getElementById('home'),
    document.getElementById('menu'),
    document.getElementById('about')
];
pageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        changePage(btn.id);
    })
});

function changePage(id) {
    console.log(id);
    content.innerHTML = '';
    if (id === 'home') {
        getHomePage(content);
    } else if (id === 'menu') {
        getMenuPage(content);
    } else {
        getAboutPage(content);
    }
};
