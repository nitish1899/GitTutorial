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

// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].textContent="Hello 2";
// li[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

// //  give error
// //items.style.backgroundColor='green';

// // for(var i=0;i<items.length;i++){
// //     items[i].style.backgroundColor='#F4F4F4';
// // }
// var title= document.getElementsByTagName("li");-
// li[0].style.fontFamily='bold';
// console.log(li);
// li[0].style.color='green';

//Query Selector
// var header=document.querySelector('#main-header');
// console.log(header);
//  header.style.borderBottom='solid 4px #ff0000';

//  var input=document.querySelector('.form-control mr-2');
// input.value='hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.textContent='Nitish';
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.textContent='kumar';
// thirditem.style.color='hsl(0,0%,100%';

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


//Transversing the DOM 

//var itemList=document.querySelector('#items');
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

// //Create a Div
// var newDiv=document.createElement('div');
// var newLi=document.createElement('li');

// //Add a class
// newDiv.className='hello';
// newLi.className='list-group-item';

// //Add id
// newDiv.id='hello1';

// //add Attr
// newDiv.setAttribute('title','Hello Div');

// //Create text node
// var  newDivText=document.createTextNode('HEllo word');
// var  newLiText=document.createTextNode('HEllo:::::word');

// //Add text to div
// newDiv.appendChild(newDivText);
// newLi.appendChild(newLiText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv, h1);


// console.log(newDiv);
// console.log(newLi);

// var ul=document.getElementById('items');
// console.log(ul.innerHTML);
// ul.insertBefore(newLi,ul.children[0]);
// //ul.innerHTML=newLi+ul.innerHTML;
// console.log(ul.innerHTML);

//Adding a li and div element, delete and edit button and removing li element
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item-description').value;
  localStorage.setItem(newItem,newItem2);
  var liItem=`${newItem} ${newItem2}`;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Add text node with input value
  li.appendChild(document.createTextNode(liItem));
  
  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right del';

//style="float:right;" type="submit" id="edit-button">Edit
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  //Add id
  editBtn.id='edit-button';
  //Add attribute
  editBtn.setAttribute('title','submit');
  editBtn.style="float:right;"
  
  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  
  // Append li to list
  itemList.appendChild(li);
  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('del')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    console.log(itemList);
    console.log(items);
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description= item.children[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  










