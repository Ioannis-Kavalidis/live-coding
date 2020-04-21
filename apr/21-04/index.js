// where I can link my js file

// Github assignment push

// window.alert === alert

// Zoom link always is
// https://zoom.us/j/3551491935
// Or you can join using ID
// Meeting ID: 355 149 1935

//
// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// Node tree https://dom.spec.whatwg.org/#concept-node

let avatar = document.querySelector(".img");
console.log(avatar);
//avatar.innerHTML = "cool";
// let list = avatar.querySelectorAll("span");
// div.img
let list = document.querySelectorAll(".img span");
console.log(list);

list.forEach((item) => {
  console.log(item);
  item.innerText = "nice";
  item.style.backgroundColor = "red";
});
console.log(list.length);
list[2].style.color = "pink";
let navList = document.querySelector("#menuList");
console.log(navList);
// > + ~
let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = " Nice one";
