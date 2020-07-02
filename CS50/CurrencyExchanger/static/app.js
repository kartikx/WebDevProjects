const result = document.querySelector('#result');
const box1   = document.querySelector('#box1');
const box2   = document.querySelector('#box2');

document.addEventListener('DOMContentLoaded', () => {
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

    /**
     * I have prevented GET requests on /convert,
     * so that it is not accessible through
     * a URL access.
     */
    request.open('POST', '/convert');
    
    /**
     * This is a callback function which gets called 
     * when the request gets loaded, i.e. is returned
     * from Server-side.
     */
    request.onload = () => {
        
        // This converts the Request Response into a JS Object.
        const data = JSON.parse(request.responseText);

        // Success is a parameter I pass myself from Server side.
        if (data.success) {
            result.innerHTML = `1 ${base} is ${data.rates}${symbol}`;
        }
        else {
            result.innerHTML = "There was an error"; 
        }
    };

    /**
     * This is the logic for actually sending
     * the request to the server.
     */
    const data = new FormData();
    data.append('base', base);
    data.append('symbol', symbol);
    
    request.send(data);
}
