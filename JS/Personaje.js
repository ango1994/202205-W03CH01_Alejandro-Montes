export class Person {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.state = 'alive';
        this.serie = 'Game of Thrones';
    }

    die() {
        this.state = 'dead';
    }
}
