const main = document.querySelector('main');

const dropdownContainer = document.createElement('div');
dropdownContainer.classList.add('dropdown-container');

const dropdownDiv = document.createElement('div');
dropdownDiv.classList.add("dropdown-content");


function render() {
    console.log('in render');
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle('show');
}

function button() {
    const button = document.createElement('div');
    button.classList.add('button');
    button.addEventListener('click', render);

    return button;
}

function key(keyValue) {
    const p = document.createElement('p');
    p.textContent = keyValue;

    return p;
}

function dropdown(keyValue, options) {
    const btn = button();
    dropdownContainer.appendChild(btn);

    const p = key(keyValue);
    btn.appendChild(p);

    for(let option of options) {
        const li = document.createElement('li');
        li.textContent = option;
        dropdownDiv.appendChild(li);
    }
    dropdownContainer.appendChild(dropdownDiv);
    console.log(dropdownContainer);
    main.appendChild(dropdownContainer);
}

module.exports = dropdown;
