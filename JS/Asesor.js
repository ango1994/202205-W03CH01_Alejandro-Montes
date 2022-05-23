import { Person } from './Personaje.js';

export class Adviser extends Person {
    constructor(name, family, age, personAdvised) {
        super(name, family, age);
        this.personAdvised = personAdvised;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }

    speak() {}
}
