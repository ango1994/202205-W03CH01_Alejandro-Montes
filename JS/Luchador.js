import { Person } from './Personaje.js';

export class Fighter extends Person {
    constructor(name, family, age, weapon, skill, img) {
        super(name, family, age, img);
        this.weapon = weapon;
        this.skill = skill;
        this.message = '"Primero pego y luego pregunto"';
    }

    speak() {
        return this.message;
    }
}
