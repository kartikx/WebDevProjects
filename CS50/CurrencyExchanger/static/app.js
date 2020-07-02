const result = document.querySelector('#result');
const box1   = document.querySelector('#box1');
const box2   = document.querySelector('#box2');

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    box1.onchange = optionChange;
    box2.onchange = optionChange;
});