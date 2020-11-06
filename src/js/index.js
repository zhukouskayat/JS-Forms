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