//1
const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
const itmoBornDate = new Date(ITMO_BORN_YEAR, ITMO_BORN_MONTH - 1, ITMO_BORN_DAY);

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990

//2
// Реализуйте функцию sum
function sum(){
    let rez = 0;
    for(let i = 0; i < this.length; i++) {
        rez += this[i];
    }
    return rez;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));

//3
const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(first, second){
    if(first == second){
        return true;
    }
    return JSON.stringify(first)===JSON.stringify(second);
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false

//4
function User(name) {
	this.name = name;
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
User.prototype.getName = function () {
    return this.name;
};

const me = new User('Rex');

console.log(me.getName()); // Rex

//5
function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    let number = 1;
    return function () {
        return number++;
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5