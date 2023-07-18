document.title = "Sharpner project1";
let maintitle = document.querySelector('#header-title');
maintitle.style.border = 'solid 3px black';

let title = document.querySelector('.title');
title.style.color = 'green';
title.style.fontWeight = 'bold';

// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// Array.from(items).forEach(function (element) {
//     element.style.fontWeight = 'bold';
// })

let li = document.getElementsByTagName('li');
li[4].style.backgroundColor = 'green';
li[4].style.color = 'white';