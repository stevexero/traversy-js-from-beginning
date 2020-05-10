// Single element selectors ****
// document.getElementBy()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'Task Listt';
// taskTitle.innerHTML = 'Task<span style="color:red"> Listtt</span>';

// document.querySelector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// Multiple Element Selectors - return html collection or node list ******
// document.getElementsByClassName

// Global
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// // Only classes inside specific selector
// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into Array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// document.querySelectorAll
// can do array methods without having to convert it
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

//
// Traversing the DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes - returns node list
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].name;
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node - line breaks read as text node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get children element nodes - returns HTML Collection
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = 'hello';

// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// // \First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;

// // Get parents of parents
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

//
//
// Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';
// // Add id
// li.id = 'new-item';
// // add attribute
// li.setAttribute('title', 'new-item');
// // create text node and append
// li.appendChild(document.createTextNode('hello world'));

// // create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // append link into li
// li.appendChild(link);
// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

//
//
// REPLACE ELEMENT

// Create element
// const newHeading = document.createElement('h2');
// // add id
// newHeading.id = 'task-title';
// // create new text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // Get old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');
// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove Child Elemtn
// list.removeChild(lis[3]);

// //  Classes and attr
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];

// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

//
//
// EVENT LISTENERS
// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('Hello World');
//   e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   //   console.log('Clicked');
//   let val;
//   val = e;

//   //   Event target element
//   val = e.target;
//   vall = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   //   e.target.innerText = 'Hello';

//   //   Event type
//   val = e.type;

//   //   Timestamp
//   val = e.timeStamp;

//   //   Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   //   Coords event relative to the elemtn
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

// Mouse Events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// //  Double Click
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mouse Down
// // clearBtn.addEventListener('mousedown', runEvent);
// // Mouse up
// // clearBtn.addEventListener('mouseup', runEvent);
// // Mouse Over
// // clearBtn.addEventListener('mouseover', runEvent);
// // Mouse Out
// // clearBtn.addEventListener('mouseout', runEvent);
// // Mouse Enter
// // clearBtn.addEventListener('mouseenter', runEvent);
// // Mouse Exit
// // clearBtn.addEventListener('mouseleave', runEvent);
// // Mouse Move
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`Event TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX} ${e.offsetY} ${40})`;
// }

//
//
// Forms and Inputs
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// // Clear Input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Key Down
// taskInput.addEventListener('keydown', runEvent);

// Key Up
// taskInput.addEventListener('keyup', runEvent);

// Key press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);

// function runEvent(e) {
//   console.log(`Event TYPE: ${e.type}`);
//   //   console.log(e.target.value);
//   //   heading.innerText = e.target.value;

//   //   Get input value
//   //   console.log(taskInput.value);

//   //   e.preventDefault();
// }

//
//
// Event bubbling

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// event delegation

// This only works on the first item
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// This works on all items
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   //   console.log(e.target);
//   //   if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //     console.log('delete item');
//   //   }
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     // console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

// Local Storage and Session Storage
// local storage stays until cleared out
// session storage clears when the browser is closed

// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // Clear local storage
// localStorage.clear();
// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e) {
//   const task = document.getElementById('task').value;

//   let tasks;

//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));

//   alert('Task Saved');

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task) {
//   console.log(task);
// });
