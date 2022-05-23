import { personsArr } from './JS/personajes.js';
import { cards, phrases } from './JS/templates.js';

personsArr.forEach((element) => {
    const display = document.querySelector('.characters-list');
    display.innerHTML += cards(element);
});

personsArr.forEach((element) => {
    const display = document.querySelector('.comunications');
    document.addEventListener('click', () => {
        display.innerHTML = phrases(element);
        display.classList.add('on');
        setTimeout(() => {
            display.classList.remove('on');
        }, 2000);
    });
});
