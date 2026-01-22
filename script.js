// script.js
'use strict';

// ==========================
// Fonctionnalité 1 et 1-bis
// ==========================
const footer = document.querySelector('footer');
let footerClickCount = 0;

if (footer) {
    footer.addEventListener('click', () => {
        footerClickCount += 1;
        console.log(`clic numéro ${footerClickCount}`);
    });
}

// ==================
// Fonctionnalité 2
// ==================
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');

if (navbarToggler && navbarHeader) {
    navbarToggler.addEventListener('click', () => {
        navbarHeader.classList.toggle('collapse');
    });
}

// ==================
// Fonctionnalité 3
// ==================
const cards = document.querySelectorAll('.card');

if (cards.length >= 1) {
    const firstCard = cards[0];
    const firstCardEditBtn = firstCard.querySelector('.btn-outline-secondary');
    const firstCardText = firstCard.querySelector('.card-text');

    if (firstCardEditBtn && firstCardText) {
        firstCardEditBtn.addEventListener('click', () => {
            firstCardText.style.color = 'red';
        });
    }
}

// ==================
// Fonctionnalité 4
// ==================
if (cards.length >= 2) {
    const secondCard = cards[1];
    const secondCardEditBtn = secondCard.querySelector('.btn-outline-secondary');
    const secondCardText = secondCard.querySelector('.card-text');

    if (secondCardEditBtn && secondCardText) {
        secondCardEditBtn.addEventListener('click', () => {
            if (secondCardText.style.color === 'green') {
            secondCardText.style.color = '';
            } else {
            secondCardText.style.color = 'green';
            }
        });
    }
}

// ==================
// Fonctionnalité 5
// ==================
const navbar = document.querySelector('.navbar');
const bootstrapLink = document.querySelector(
    'link[rel="stylesheet"][href*="bootstrap"]'
);

if (navbar && bootstrapLink) {
    navbar.addEventListener('dblclick', () => {
    bootstrapLink.disabled = !bootstrapLink.disabled;
    });
}

// ==================
// Fonctionnalité 6
// ==================
if (cards.length > 0) {
    cards.forEach((card) => {
        const viewBtn = card.querySelector('.btn.btn-sm.btn-success');
        const cardText = card.querySelector('.card-text');
        const cardImg = card.querySelector('.card-img-top');

        if (viewBtn && cardText && cardImg) {
            viewBtn.addEventListener('mouseenter', () => {
                cardText.classList.add('d-none');
                cardImg.style.width = '20%';
            });

            viewBtn.addEventListener('mouseleave', () => {
                cardText.classList.remove('d-none');
                cardImg.style.width = '';
            });
        }
    });
}

// ==================
// Fonctionnalité 7
// ==================
const cardsRow = document.querySelector('.album .container .row');
const nextBtn = document.querySelector('.btn.btn-secondary.my-2'); // ==>

if (cardsRow && nextBtn) {
    nextBtn.addEventListener('click', () => {
        const lastCardCol = cardsRow.lastElementChild;
        if (lastCardCol) {
            cardsRow.insertBefore(lastCardCol, cardsRow.firstElementChild);
        }
    });
}

// ==================
// Fonctionnalité 8
// ==================
const prevBtn = document.querySelector('.btn.btn-primary.my-2'); // <==

if (cardsRow && prevBtn) {
    prevBtn.addEventListener('click', (event) => {
        event.preventDefault(); // empêche la redirection vers THP
        const firstCardCol = cardsRow.firstElementChild;
        if (firstCardCol) {
            cardsRow.appendChild(firstCardCol);
        }
    });
}

// ==================
// Fonctionnalité 9
// ==================
const brand = document.querySelector('.navbar-brand');
const body = document.body;

if (brand && body) {
    brand.setAttribute('tabindex', '0'); // s'assure que le logo peut recevoir le focus

    brand.addEventListener('keypress', (event) => {
    // on repart d'un body sans classes à chaque fois
        body.className = '';

        switch (event.key) {
            case 'a':
                body.classList.add('col-4');
                break;
            case 'y':
                body.classList.add('col-4', 'offset-md-4');
                break;
            case 'p':
                body.classList.add('col-4', 'offset-md-8');
                break;
            case 'b':
// état normal (pas de classes supplémentaires)
                break;
                default:
 // autre touche : ne fait rien
                break;
        }
    });
}
