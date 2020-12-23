'use strict';

const root = document.querySelector('.todoapp');
const newToDoField = document.querySelector('.new-todo');
const itemsList = root.querySelector('.todo-list');
const allToggler = root.querySelector('.toggle-all');
const clearCompletedButton = root.querySelector('.clear-completed')

function updateInfo() {
    const completedTogglers = root.querySelectorAll('.toggle:checked');
    const notCompletedTogglers = root.querySelectorAll('.toggle:not(:checked)');
    const counter = root.querySelector('.todo-count');

    counter.innerHTML = `${notCompletedTogglers.length} items left`;
    allToggler.checked = notCompletedTogglers.length === 0;
    clearCompletedButton.hidden = completedTogglers.length == 0;
}
clearCompletedButton.addEventListener('click', ()=>{
    const completedTogglers = root.querySelectorAll('.toggle:checked');

    for (const toggler of completedTogglers){
        toggler.closest('.todo-item').remove();
    }
    updateInfo();
});


allToggler.addEventListener('change', () => {
    const togglers = root.querySelectorAll('.toggle');

    for (const toggler of togglers) {
        toggler.checked = allToggler.checked;
        toggler.closest('.todo-item').classList.toggle('completed', allToggler.checked)
    }

})

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

itemsList.addEventListener('change', (event) => {
    if (!event.target.matches('.toggle')) {
        return;
    }

    event.target.closest('.todo-item').classList.toggle('completed', event.target.checked);
    updateInfo();
})