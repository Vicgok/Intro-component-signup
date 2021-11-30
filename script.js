"use-strict";
const form = document.querySelectorAll("form input");

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+[.]+[a-zA-Z+]+$/;
const passRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$()])/;

const inputValidate = () => {
  form.forEach((field) =>
    field.value === ""
      ? errorShow(field)
      : field.id === "email"
      ? emailRegex.test(field.value)
        ? errorHide(field)
        : errorShow(field)
      : field.id === "password"
      ? passRegex.test(field.value)
        ? errorHide(field)
        : errorShow(field)
      : errorHide(field)
  );
};

function errorShow(field) {
  document.querySelector(`#${field.id}`).classList.add("InputErrorShow");
  document
    .querySelector(`.${field.id}--errorText`)
    .classList.add("errorTextShow");
}

function errorHide(field) {
  document.querySelector(`#${field.id}`).classList.remove("InputErrorShow");
  document
    .querySelector(`.${field.id}--errorText`)
    .classList.remove("errorTextShow");
}
