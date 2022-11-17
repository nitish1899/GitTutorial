//Query Selector
var header=document.querySelector('#main-header');
header.getElementsByClassName.borderBottom='solid 4px #ff0000';

var input=document.querySelector('input');
input.value='hello world';

var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.textContent='kumar';
thirditem.style.color='hsl(0,0%,100%';

// // QUERYSELECTORALL //
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Nitish';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// even[0].style.color='green';

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#00ff00';
//     //even[i].style.backgroundColor='#ccc';
// }

