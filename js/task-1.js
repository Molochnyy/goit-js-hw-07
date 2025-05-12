const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const items = document.querySelectorAll('.item');
items.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});