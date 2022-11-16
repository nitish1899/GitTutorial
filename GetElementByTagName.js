/Get Elements BY ClassName
// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].textContent="Hello 2";
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
// items[i].style.fontWeight='bold';
// }

// //  give error
// //items.style.backgroundColor='green';

// // for(var i=0;i<items.length;i++){
// //     items[i].style.backgroundColor='#F4F4F4';
// // }
// var title= document.getElementsByClassName("title");
// title[0].style.fontFamily='bold';
// console.log(title);
// title[0].style.color='green';


// Get Element By Tag Name

var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].textContent="Hello 2";
li[2].style.backgroundColor='green';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}

//  give error
//items.style.backgroundColor='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#F4F4F4';
// }
var title= document.getElementsByTagName("li");
li[0].style.fontFamily='bold';
console.log(li);
li[0].style.color='green';