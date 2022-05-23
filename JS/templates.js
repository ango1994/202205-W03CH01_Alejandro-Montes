import { Adviser } from './Asesor.js';
import { Fighter } from './Luchador.js';
import { King } from './Rey.js';

export function cards(personaje) {
    let personState = '';
    let list = '';

    if (personaje.state === 'alive') {
        personState = `<i class="fas fa-thumbs-up"></i>`;
    } else {
        personState = '<i class="fas fa-thumbs-down"></i>';
    }

    if (personaje instanceof King) {
        list = `<li>Años de reinado: ${personaje.yearsOfReign}</li>`;
    } else if (personaje instanceof Fighter) {
        list = `<li>Arma: ${personaje.weapon}</li><li>Destreza: ${personaje.skill}</li>`;
    } else if (personaje instanceof Adviser) {
        list = `<li>Asesora a: ${personaje.personAdvised}</li>`;
    } else {
        list = `<li>Peloteo: ${personaje.butterLevel}</li>
                <li>Sirve a: ${personaje.personButtered}</li>`;
    }
    return `<li class="character col">
          <div class="card character__card">
            <img
              src="${personaje.img}"
              alt="${personaje.name} - ${personaje.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.name} - ${personaje.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.age}</li>
                  <li>
                    Estado: 
                    ${personState}
                    
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${list}
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`;
}

export function phrases(personaje) {
    return `<p class="comunications__text display-1">
                ${personaje.speak()}
            </p>
              <img
                class="comunications__picture"
                src="${personaje.img}"
                alt="${personaje.name} - ${personaje.family}"
            />
    `;
}
