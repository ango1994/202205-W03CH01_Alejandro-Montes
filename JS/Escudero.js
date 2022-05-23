import { Fighter } from './Luchador.js';
import { Person } from './Personaje.js';

export class Squire extends Person {
    constructor(name, family, age, personButtered = Fighter, butterLevel, img) {
        super(name, family, age, img);
        this.personButtered = personButtered;
        this.message = 'Soy un loser';
        this.butterLevel = butterLevel;
    }

    speak() {
        return this.message;
    }
}
