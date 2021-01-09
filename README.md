# Dropdown
An implementation of a dropdown in vanilla javascript

### How it works

---


Enjoy!

### Download

---
Download and install the package by running:

    npm install dropdown-odin --save-dev
    
### Usage

---
A dropdown requires a toggle and a list of options/ items.

- For the toggle, add a div with class "dropdown-toggle". You can add any icon/text you want inside the dropdown toggle according to your preference.

- For the list of items, add a ul with class "dropdown-list". You can add the options as li elements in the list.

- The dropdown content is hidden by default. Please make sure to copy the styles from the styles.css stylesheet in the package.

- Click the dropdown toggle to hide/render the dropdown.


Feel free to customize styles like font-size/family, color, background, padding etc. to your own taste or to suit your personal project


### Usage example

---
    <div class="dropdown-toggle">
                <i class="fas fa-sort-down fa-2x"></i>
    </div>
    <ul class="dropdown-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>

### Methods

---
|Method|Description|
|----|----|
|toggle|Activated on clicking the clickable button, toggles display of dropdown

[npm](https://www.npmjs.com/package/dropdown-odin)