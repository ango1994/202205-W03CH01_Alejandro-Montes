import { Person } from './Personaje.js';

export class King extends Person {
    constructor(name, family, age, yearsOfReign) {
        super(name, family, age);
        this.yearsOfReign = yearsOfReign;
        this.message = 'Vais a morir todos';
    }

    speak() {}
}
