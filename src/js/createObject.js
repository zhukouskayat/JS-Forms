/* eslint-disable import/prefer-default-export */

export function createObject() {
  const obj = {};

  document
    .querySelectorAll("input[type='text'], input[type='email'], input[type='radio']:checked, select, textarea, input[type='checkbox']:checked")
    .forEach((form) => {
      (obj[form.name] = form.value)
    });

  return obj;
};