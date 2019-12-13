
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

    // let deleteBtn = document.getElementsByClassName("button_delete");
    // Array.prototype.slice.call(deleteBtn).forEach(function(item) {
    //       var asd = item.parentNode;
    //       console.log("fhgfh"+asd.querySelector('[type="checkbox"]').id);
    //       var idDel = asd.querySelector('[type="checkbox"]').id;
    //       window.localStorage.removeItem(idDel);
    //      item.target.parentNode.remove();
    //     var firstParent = item.parentNode;
    //     console.log("fghj" + firstParent);
    //     var secondParent = firstParent.parentNode;
    //     secondParent.removeChild(firstParent);
    //   });
    

    let deleteBtn = document.getElementsByClassName("button_delete");
    Array.prototype.slice.call(deleteBtn).forEach(function(item) {
      item.addEventListener("click", function(e) {
        var asd = item.parentNode;
        var idDel = asd.querySelector('[type="checkbox"]').id;
        window.localStorage.removeItem(idDel);
        e.target.parentNode.remove();
      });
    
    })

    window.addEventListener('load', function() {
        var status = document.getElementById("status");
      
        function updateOnlineStatus(event) {
          var condition = navigator.onLine ? "online" : "offline";
      
          status.className = condition;
          status.innerHTML = condition.toUpperCase();
      
        }
      
        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
      });







