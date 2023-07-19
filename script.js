let ed = document.querySelectorAll('li');

let u = document.querySelector('ul');

ed.forEach((ele, i) => {
    let but = document.createElement('button');
    but.innerText = 'Edit';
    but.className = 'btn btn-danger btn-sm float-right';
    ele.appendChild(but);

    // u.appendChild(ele);  `
})

let form = document.getElementById('addForm');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // Creating ul to append the li in it
    let ul = document.querySelector('ul');
    //storing the value of form in a variable to append it into li
    let cb = document.createTextNode(e.target.firstElementChild.value);
    let li = document.createElement('li');
    li.append(cb);
    li.className = 'list-group-item';
    // li.appendChild(but);

    console.log('list valu=', li)
    //creating button and appending it into the li
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.innerText = 'X';
    li.appendChild(btn);
    ul.appendChild(li);
    e.target.firstElementChild.value = '';
}

let items = document.querySelector('ul');
items.addEventListener('click', remove);

function remove(e) {
    if (e.target.classList.contains('delete')) {

        items.removeChild(e.target.parentElement);
    }
}

console.log('list valu=', ed)
