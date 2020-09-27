//alert('Hello!');

/*
console.log('Hello');
console.error('Hiba van');
console.warn('Lehet hiba');
*/

// -- Változók

//let, const, var
var kor = 20;
kor = 21;
//console.log(kor);

// -- ADAT TÍPUSOK

const nev = 'Zsolt'; // STRING
const kor2 = 21; // NUMBER
const suly = 80.5; //NUMBER
const felnott = false; // BOOLEAN
const date = new Date('2020-10-01');

const x = null;
let y;

//console.log(typeof y);

// --- MŰVELETEK

let szam1 = 10;
szam1 += '1';

let nev2 = 'Zsolt';
//nev2 += 10;

let szoveg = 'Hello';

//console.log(`${szoveg} ${nev2}!!!!`);

//console.log(szoveg.length);
//console.log(szoveg.toLowerCase());
//console.log(szoveg.substring(1, 5));
let lista = 'alma,korte,banán';
//console.log(lista.split(','));

date.setFullYear(2021);

//console.log(date);

// --- FELTÉTELEK
const x1 = 4;
const x2 = '14';
/*
if (x1 == 12) {
    console.log('IGAZ');
} else if (x2 == 13) {
    console.log('Majdnem IGAZ');
} else {
    console.log('NEM IGAZ');
}

switch (x1) {
    case 10:
    case 14:
        console.log('KICSIT IGAZ');
        break;
    default:
        console.log('NEM IGAZ');
}

    
if (x1 == x2 && (x1 < 10 || x2 == 14)) {
    console.log('IGAZ');
}
*/

if (!1) {
    console.log('IGAZ');
}

const color = x1 > 10 ? 'piros' : 'kek';

//console.log(color);

// TÖMBÖK

const allatok = ['kutya', 'macska', 'ló', 10, true];

//console.log(allatok[0]);
//allatok[6] = 'kacsa';

//allatok[allatok.length] = 'kacsa';
//allatok.push('kacsa');
//allatok.unshift('kacsa');

let elem = allatok.pop();

//console.log(allatok.indexOf('kutya'));

// OBJEKTUMOK

const ember = {
    name: 'Zsolt',
    age: 20,
    hobbies: ['snowboard', 'squash'],
    address: {
        street: 'valami utca',
        city: 'budapest'
    }
};

ember.email = 'zsolt@info.hu';

const { name, age, address: { street } } = ember; // ES6

const todos = [
    {
        id: 1,
        text: 'Ne felejtsd el feltöltenti a videót',
        completed: true

    },
    {
        id: 1,
        text: '----',
        completed: false
    },
    {
        id: 2,
        text: 'Linkeld facebook page-re is',
        completed: false
    }
];

//console.log(todo[0].id);

// CIKLUSOK

// for ciklus
for (let i = 0; i < 10; i++) {
    //console.log(i);
}

// while ciklus
let index = 0;
while (index < 10) {
    //console.log(index);
    index++;
}

for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i]);
}

for (let todo of todos) {
    //console.log(todo.text);
}

todos.forEach(function (todo) {
    //console.log(todo);
})

const todoIds = todos.map(function (todo) {
    return todo.text;
});

const filtered = todos.filter(function (todo) {
    return todo.completed;
});

//console.log(filtered);

// FUNCTIONS (függvény)

function osszeadas(szamx = 1, szamy = 2) {    
    return szamx + szamy;
}

let eredmeny = osszeadas(10, 25);

const osszeadas2 = (szamx, szamy) => { return szamx + szamy;  }

const osszeadas3 = (szamx, szamy) => szamx + szamy;

//console.log(osszeadas3(10, 10));

// OSZTÁLYOK

function Ember(nev, kor, aktiv) {
    this.nev = nev;
    this.kor = kor;
    this.aktiv2 = aktiv;

    this.getNev = function (elotag) {
        return `${elotag} ${nev}`;
    }
}

const emb1 = new Ember('Zsolt', 20, true);

Ember.prototype.getSzulEv = () => new Date().getFullYear() - this.kor;

// ES6

class Allat {
    constructor(nev, kor) {
        this.nev = nev;
        this.kor = kor;
    }

    getSzulEv() {
        return new Date().getFullYear() - this.kor;
    }
}

const allat1 = new Allat('kutya', 5);

console.log(allat1.getSzulEv());