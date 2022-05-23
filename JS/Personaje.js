export class Person {
    constructor(name, family, age, img) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.state = 'alive';
        this.serie = 'Game of Thrones';
        this.img = img;
    }

    die() {
        this.state = 'dead';
    }
}
