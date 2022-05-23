import { Person } from './Personaje.js';

export class King extends Person {
    constructor(name, family, age, yearsOfReign, img) {
        super(name, family, age, img);
        this.yearsOfReign = yearsOfReign;
        this.message = 'Vais a morir todos';
    }

    speak() {
        return this.message;
    }
}
