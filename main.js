function makeTransparent(event) {
    event.target.style.opacity = '.50';
}

document.querySelector('#feathers').addEventListener('click', makeTransparent)
