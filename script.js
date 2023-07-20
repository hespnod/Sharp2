let listItems = document.querySelectorAll('li');

let ulContent = document.querySelector('ul');

let filter = document.getElementById('filter');

let form = document.getElementById('addForm');

let description = document.getElementById('description');

//Creating and adding edit button
listItems.forEach((ele) => {
    let btn = document.createElement('button');
    btn.innerText = 'Edit';
    btn.className = 'btn btn-primary btn-sm float-right';
    ele.appendChild(btn);

})



form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // Creating ul to append the li in it
    let ul = document.querySelector('ul');
    //storing the value of form in a variable to append it into li
    let submitText1 = document.createTextNode(`${e.target.firstElementChild.value} `);
    let submitText2 = document.createTextNode(e.target[1].value);
    let li = document.createElement('li');
    li.append(submitText1);
    // li.append(" ");
    li.append(submitText2);
    li.className = 'list-group-item';


    //creating button and appending it into the li
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.innerText = 'X';
    li.appendChild(btn);
    ul.appendChild(li);
    e.target.firstElementChild.value = '';
    e.target[1].value = '';

    //Creating edit button and appending in li
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right';
    editBtn.innerText = 'Edit';
    li.appendChild(editBtn);
}

ulContent.addEventListener('click', remove);

function remove(e) {
    if (e.target.classList.contains('delete')) {
        ulContent.removeChild(e.target.parentElement);
    }
}

filter.addEventListener('keyup', filterEvents);

function filterEvents(e) {
    let inputText = e.target.value.toLowerCase();
    let lists = document.querySelectorAll('li');
    lists.forEach(function (ele) {
        if ((ele.firstChild.textContent.toLowerCase().indexOf(inputText) != -1) || (ele.firstChild.nextSibling.textContent.toLowerCase().indexOf(inputText) != -1)) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    })

}
