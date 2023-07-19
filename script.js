document.title = "Sharpner project1";


//New code for Query Selector and Qeuery Selector All->

// let item2 = document.querySelector('.list-group-item:nth-child(2)');
// let item3 = document.querySelector('.list-group-item:nth-child(3)');
// item2.style.backgroundColor = 'green';
// item3.style.visibility = 'hidden';

// let item02 = document.querySelectorAll('li');
// item02[1].style.color = 'green';


// let odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }



// Using Parent Element
let child = document.querySelector('.list-group-item');
console.log(child.parentNode);
child.parentElement.parentElement.style.backgroundColor = '#f4f4f4';


//Using Last Child Element
let parent = document.querySelector('.list-group');
console.log(parent.lastChild);
parent.lastElementChild.style.backgroundColor = 'pink';

//Using First Child Element
let parentFirst = document.querySelector('.list-group');
console.log(parentFirst.firstChild);
parentFirst.firstElementChild.style.backgroundColor = 'blue';

// Using Siblings
child.nextElementSibling.innerText = `Im next sibling of ${child.innerText}`;
parent.lastElementChild.previousElementSibling.innerText = `I'm previouse sibling of ${parent.lastElementChild.innerText}`;


//Using create append

let ul = document.querySelector('ul');

let li = document.createElement('li');
let cr = document.createTextNode('Item 5');
// li.innerText = 'Item 5';
li.className = 'list-group-item';
li.append(cr);
ul.appendChild(li);

