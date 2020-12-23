'use strict';

const root = document.querySelector('.todoapp');

const newToDoField = document.querySelector('.new-todo');

newToDoField.addEventListener('keydown', (event) => {

    if (event.key !== 'Enter') {
        return;
    }
    if (!newToDoField.value){
        return ;
    }



    const itemsList = root.querySelector('.todo-list');
    const id = +new Date();

    itemsList.insertAdjacentHTML('beforeend', `<li>
    <input id="todo-${id}" class="toggle" type="checkbox">
    <label for="todo-${id}">${newToDoField.value}</label>
    <button class="destroy"></button>
    </li>`);
    newToDoField.value = '';

    const notCompletedTogglers = root.querySelectorAll('.toggle:not(:checked)');
    const counter = root.querySelector('.todo-count');

    counter.innerHTML = `${notCompletedTogglers.length} item left`;
})