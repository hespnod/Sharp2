document.title = "Sharpner project1";


//New code for Query Selector and Qeuery Selector All->

// let item2 = document.querySelector('.list-group-item:nth-child(2)');
// let item3 = document.querySelector('.list-group-item:nth-child(3)');
// item2.style.backgroundColor = 'green';
// item3.style.visibility = 'hidden';

let item02 = document.querySelectorAll('li');
item02[1].style.color = 'green';


let odd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}