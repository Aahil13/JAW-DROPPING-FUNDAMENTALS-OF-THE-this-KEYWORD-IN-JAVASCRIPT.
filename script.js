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
