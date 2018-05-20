// Initialize variable
var count = 0;
var text = undefined;

// Run when document is finished loading (source code)
window.onload = function() {    
    text = document.getElementById('text')
    text.innerHTML = 'The button has not been clicked';
}

// Run when button has been clicked
function counterClicked() {
    count += 1;
    text.innerHTML = `The button has been clicked ${count} times`;
    text.style.color = "red";
}