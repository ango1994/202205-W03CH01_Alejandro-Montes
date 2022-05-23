import { Person } from './Personaje';

export class Squire extends Person {
    constructor(name, family, age, personButtered) {
        super(name, family, age);
        this.personButtered = personButtered;
        this.message = 'Soy un loser';
    }
}
