# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [JS code for validation](#Code-for-form-validation)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Solution Screenshot](/images/desktop.png)
![Solution Screenshot](/images/desktop-error.png)
![Solution Screenshot](/images/mobile.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/responsive-intro-component-signup-page-aANG5YgSH)
- Live Site URL: [Live site](https://vicgok.github.io/Intro-component-signup/base.html)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Grid
- CSS custom properties
- Flexbox
- Javascript
- Fluid Typography

### Code for form validation

- RegEx

  - Email Regex

    ```
    /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+[.]+[a-zA-Z+]+$/
    ```

  - Password Regex

    ```
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$()])/
    ```

- Validation function

  ```js
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
  ```

## Author

- Frontend Mentor - [@Vicgok](https://www.frontendmentor.io/profile/Vicgok)
- Twitter - [@Vigneshwaraa4](https://twitter.com/Vigneshwaraa4)
