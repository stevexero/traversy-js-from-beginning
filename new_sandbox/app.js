let val;

val = document;
// Gives us all the elements
val = document.all;
// Access certain indexes
val = document.all[42];
// Counts all the elements in the dom
val = document.all.length;
// Access the head alone
val = document.head;
// Access the body
val = document.body;
// Shows doctype
val = document.doctype;
// Show domain
val = document.domain;
// Show URL
val = document.URL;
// Show character set
val = document.characterSet;
// Get content type
val = document.contentType;

// Select without using selectors (not recommended)
val = document.forms;
// Access one form with its index
val = document.forms[0];
// Get stuff from form
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].actions;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// How to loop through HTML Arrays
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
