import { Adviser } from './Asesor.js';
import { Squire } from './Escudero.js';
import { Fighter } from './Luchador.js';
import { King } from './Rey.js';

const jeoffrey = new King(
    'Joffrey Baratheon',
    'Lannister',
    '14',
    '2',
    './img/joffrey.jpg'
);
const jaime = new Fighter(
    'Jaime Lannister',
    'Lannister',
    '32',
    'sword',
    '9',
    './img/jaime.jpg'
);
const daenerys = new Fighter(
    'Daenerys Targaryen',
    'Targaryen',
    '16',
    'dragons',
    '9',
    './img/daenerys.jpg'
);
const tyrion = new Adviser(
    'Tyrion Lannister',
    'Lannister',
    '28',
    daenerys.name,
    './img/tyrion.jpg'
);
const bronn = new Squire(
    'Bronn',
    'unknown',
    '36',
    jaime.name,
    '2',
    './img/Bronn.jpg'
);

export const personsArr = [jeoffrey, jaime, daenerys, tyrion, bronn];
