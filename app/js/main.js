'use strict';

const root = document.querySelector('.todoapp');
const newToDoField = document.querySelector('.new-todo');
const itemsList = root.querySelector('.todo-list');

function updateInfo() {
    const notCompletedTogglers = root.querySelectorAll('.toggle:not(:checked)');
    const counter = root.querySelector('.todo-count');
    counter.innerHTML = `${notCompletedTogglers.length} item left`;
}

newToDoField.addEventListener('keydown', (event) => {

    if (event.key !== 'Enter') {
        return;
    }
    if (!newToDoField.value) {
        return;
    }

    const id = +new Date();

    itemsList.insertAdjacentHTML('beforeend', `<li class="todo-item">
    <input id="todo-${id}" class="toggle" type="checkbox">
    <label for="todo-${id}">${newToDoField.value}</label>
    <button class="destroy"></button>
    </li>`);
    newToDoField.value = '';

    updateInfo();
})

itemsList.addEventListener('click', (event) => {
    if (!event.target.matches('.destroy')) {
        return;
    }

    event.target.closest('.todo-item').remove();
    updateInfo();
})