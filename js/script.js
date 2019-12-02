
function run() {
    let btn = document.querySelector('#submit_button');
    btn.addEventListener('click', addToDoList);
    loadList();

}

function addNewItem(item) {
    const db = window.localStorage;
    const list = document.querySelector('#list_items');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
}
function loadList() {
    const db = window.localStorage;
     const list = document.querySelector('#list_items');
    Object.keys(db).forEach(addNewItem);
     Object.keys(db).forEach((item) => {
         const node = document.createRange().createContextualFragment(db.getItem(item));
        //  list.appendChild(node);
     });
}

function localstorage(cb) {
    if (cb.checked) {
        cb.setAttribute('checked', cb.checked);
    } else {
        cb.removeAttribute('checked');
    }
    const itemString = new XMLSerializer().serializeToString(cb.parentNode);
    const id = cb.id;
    window.localStorage.setItem(id, itemString);
}

function addToDoList(event) {
    event.preventDefault();

    const todo = document.querySelector('#label_content');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4)
         + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `select_item-${hash}`;
        const template = document.querySelector('#add-item');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#select_item')
        const list = document.querySelector('#list_items');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;

        const db = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        db.setItem(id, itemString);

        list.appendChild(item);
    }

    todo.value = '';
}





run();

    let deleteBtn = document.getElementsByClassName("button_delete");
    Array.prototype.slice.call(deleteBtn).forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.target.parentNode.remove()
      });
    
    })







