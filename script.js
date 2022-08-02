"use strict";

// code sample 1: calling a method
const sample1 = {
  name: "Aahil",
  dateOfBirth: 1996,
  calcAge() {
    console.log(this);
    console.log(`${this.name} is ${2022 - this.dateOfBirth} years old`);
  },
};

sample1.calcAge();

// code sample 2: A normal function call
const sample2 = function () {
  console.log(this);
};

sample2();

///code sample 3: As an event
const buttonEl = document.querySelector(".btn");
const handleClick = function () {
  console.log(this);
};
buttonEl.addEventListener("click", handleClick);

//code sample 4: arrow functions
const sample4_1 = () => console.log(this);

sample4_1();

const sample4_2 = function () {
  const sample4_2ArrowFunction = () => {
    console.log(this);
  };

  sample4_2ArrowFunction();
};

sample4_2();

console.log(this);

// sample 5: call() method
function sample5() {
  console.log(`${this.name} is ${this.age} years old`);
}

const sample5Obj1 = {
  name: "Prince",
  age: 24,
};

const sample5Obj2 = {
  name: "Aahil",
  age: 45,
};

sample5.call(sample5Obj1);
sample5.call(sample5Obj2);

//sample 6: apply() method
function sample6(name, age) {
  console.log(this);
  console.log(
    `${name} is ${age} years old and the name of this object is ${this.objectName}`
  );
}

const sample6Obj1 = {
  objectName: "object1",
};

const parameters = ["aahil", 14];

sample6.call(sample6Obj1, ...parameters);
