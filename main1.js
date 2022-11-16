//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title=  123;// changes title of document
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Nitish';
//console.log(document.all[10]);
 //console.log(document.forms[0]);
//  console.log(document.links);  
//  console.log(document.images);

// Get Element by Id
// console.log(document.getElementById('header-title'));
//  var headerTitle=document.getElementById('header-title');
//  var header=document.getElementById('main-header'); 
// // console.log(headerTitle);
// // // headerTitle.textContent="hello";
// // // headerTitle.innerText="Goodbye";
// // console.log(headerTitle.textContent);// header is Item Lister 123
// // console.log(headerTitle.innerText);// header is Item Lister
// // headerTitle.innerHTML='<h3> Hello</h3>';
// headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom='solid 3px #000';


//Get Elements BY ClassName
var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='green';

//  give error
//items.style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#F4F4F4';
}
var title= document.getElementsByClassName("title");
title[0].style.fontFamily='bold';
console.log(title);
title[0].style.color='green';