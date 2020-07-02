const result = document.querySelector('#result');
const box1   = document.querySelector('#box1');
const box2   = document.querySelector('#box2');

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    box1.onchange = optionChange;
    box2.onchange = optionChange;
});

/**
 * This function should see the current values of 
 * the two drop-down boxes, and then call an AJAX
 * request to the backend.
 */
function optionChange() {
    const request = new XMLHttpRequest();
    const base = box1.value;
    const symbol = box2.value;
