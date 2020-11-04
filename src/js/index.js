/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { createObject } from "./createObject.js"

function printObject() {
  console.log(createObject());
  return printObject;
};

export function button() {
  const submit = document.getElementById("sub");
  submit.addEventListener("click", printObject);
  return button;
}































// const fn = document.querySelector('.fn');
// const ln = document.querySelector('.ln');
// const ct = document.querySelector('.ct');
// const ad = document.querySelector('.ad');
// const zip = document.querySelector('.zip');
// const email = document.querySelector('.email');
// const ph = document.querySelector('.ph');

// const ch = document.querySelectorAll('input[type="radio"]:checked');

// function print() {
  
//   const user = {
//     firstName: fn.value,
//     lastName: ln.value,
//     city: ct.value,
//     address: ad.value,
//     zipCode: zip.value,
//     email: email.value,
//     phone: ph.value,
//     check: ch,
//   };
  
//   console.log(user);

//   return print;
// };

// const button = document.getElementById("sub");
// button.addEventListener("click", print);