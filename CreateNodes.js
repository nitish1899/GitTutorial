//Transversing the DOM 

var itemList=document.querySelector('#items');
//praentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Nitish";

//lastChild 
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="Sonam";

//nextSibling 
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling 
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//CreateElement

//Create a Div
var newDiv= document.createElement('div');
console.log(newDiv);

//Add a class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//add Attr
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText=Document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize='30px';
CredentialsContainer.insertBefore(newDiv,h1);

