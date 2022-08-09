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

//code sample 3: arrow functions
const sample3a = () => console.log(this);

sample3a();

const sample3b = function () {
  const sample3bArrowFunction = () => {
    console.log(this);
  };

  sample3bArrowFunction();
};

sample3b();

console.log(this);

// sample 4: call() method
function sample4() {
  console.log(`${this.name} is ${this.age} years old`);
}

const sample4Obj1 = {
  name: "Prince",
  age: 24,
};

const sample4Obj2 = {
  name: "Aahil",
  age: 45,
};

sample5.call(sample4Obj1);
sample5.call(sample4Obj2);

//sample 6: apply() method
function sample5(name, age) {
  console.log(this);
  console.log(
    `${name} is ${age} years old and the name of this object is ${this.objectName}`
  );
}

const sample5Obj = {
  objectName: "object1",
};

const parameters = ["aahil", 14];

sample5.call(sample5Obj, ...parameters);

// sample7: bind();
function sample7(name, age) {
  console.log(this);
  console.log(
    `${name} is ${age} years old and the name of this object is ${this.objectName}`
  );
}

const sample7Obj = {
  objectName: "object1",
};

const sample7Bind = sample7.bind(sample7Obj);

sample7Bind("aahil", 24);
