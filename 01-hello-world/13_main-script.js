// h1 and title are queried only once
var heading = document.querySelector('h1');
var title = document.querySelector('title');

// this function is called at every keystroke, but causes no extra slow document querying
document.querySelector('input').onkeyup = function () {
    heading.innerText = this.value;
    title.innerText = this.value;
};
