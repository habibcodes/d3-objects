// pass-by-value //
// original object
let exampleObject = { exampleKey: 'example value' };

// takes in object
const replace = function (ref) {
  // obj passed in and its pointer is reassigned to new a new val
  ref = { newExampleKey: 'new Example Value' };
};

// pass through takes in previous "ref" object
// and access .exampleKey, assigning new value to
// the same obj
const update = function (ref) {
  ref.exampleKey = 'new Value';
};

// test
console.log('Before update func: ');
console.log(exampleObject);

update(exampleObject);

console.log('After update func: ');
console.log(exampleObject);

// object methods //
const getName = function (person) {
  return this.firstName + ' ' + this.lastName;
};

const person = {
  firstName: 'Frodo',
  lastName: 'Baggans',
  age: '12',
  getName,
};

const person2 = {
  firstName: 'Samwise',
  lastName: 'Gamgee',
  age: '11',
  getName,
};

console.log(person.getName(this));
console.log(person2.getName(this));
