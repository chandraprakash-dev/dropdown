# Dropdown
An implementation of a dropdown in vanilla javascript

### How it works

---
Takes in the content your dropdown's clickable content and an array of options.

Constructs a dropdown component, with the options passed in as the dropdown content.

The dropdown content is hidden by default. Please make sure to copy the styles from the stylesheets in the package.

This dropdown can be attached to any div eg. more options in navigation or anywhere in your project.

The dropdown button can be clicked to hide/render the dropdown.
Enjoy!

### Download

---
Download and install the package by running:

    npm install dropdown-odin --save-dev
    
### Usage

---
call dropdown function with the following parameters:

1. The content of the clickable button for the dropdown
2. An array of options (as strings) for the dropdown

- A dropdown is returned and can be used anywhere on the page.

- Event listeners can be added to the options of a dropdown to handle the functionality of the options.

- The clickable button renders and hides the dropdown.

Please copy the styling from the provided stylesheets. It is necessary to render and hide the dropdown properly.

Feel free to customize styles like font-size/family, color, background, 
padding etc. to your own taste or to suit your personal project


### Usage example

---
    const dropdown = require('dropdown-odin');

    const res = dropdown('...', ['one', 'two']);
    document.querySelector('main').appendChild(res);

### Methods

---
|Method|Description|
|----|----|
|toggle|Activated on clicking the clickable button, toggles display of dropdown

### Demo

---

