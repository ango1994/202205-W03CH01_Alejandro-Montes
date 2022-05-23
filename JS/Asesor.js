import { Person } from './Personaje.js';

export class Adviser extends Person {
    constructor(name, family, age, personAdvised, img) {
        super(name, family, age, img);
        this.personAdvised = personAdvised;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }

    speak() {
        return this.message;
    }
}
