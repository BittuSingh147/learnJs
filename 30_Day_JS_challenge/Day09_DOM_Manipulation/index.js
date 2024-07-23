//DOM Manipulation
//Activity 1 Selecting and manipulating elements
//Task 1 Select an html element by its id and change the text content
document.getElementById("text").innerHTML = "New text"
//Task 2 select an html element by its class and change its background color
const boxes = document.querySelectorAll('.changeTextButton')
boxes.forEach(boxes => {
  boxes.style.backgroundColor="yellow"
})
//Activity 2 Creating and Appending elements
//Task 3 create  a new div element with some text content and appened to it body
const newdiv= document.createElement('div')
newdiv.id = "newdiv"
newdiv.textContent="This is a new div with some properties"
document.body.appendChild(newdiv)
//Task 4 create a new li element and add it to an existing ul list
// Create a new <li> element
const newLi = document.createElement('li');

// Set text content for the new <li> element
newLi.textContent = 'This is a new list item';

// Append the new <li> element to the <ul> with id 'itemList'
document.getElementById('itemList').appendChild(newLi);

// Select all <li> elements within the <ul> with id 'itemList'
const allLiItems = document.querySelectorAll('#itemList li');

// Get the last <li> element
const lastLiItem = allLiItems[allLiItems.length - 1];

// Log the text content of the last <li> element
console.log(lastLiItem.textContent); // Output: This is a new list item

//Activity 3 Removing elements
//Task 5 select an html element and remove it from dom
//remove div
const removediv = document.querySelector('#newdiv')
removediv.remove()

//Task 6 Remove the last child of a specific HTML elemnt 
const removeelement = document.querySelector('#itemList li:nth-child(4)')
removeelement.remove() //nth-child() use for select child 
//Activity 4 Modify Attributes and classes
//Task 7 Select an html elements and change one of its attributes (eg src of an image tag)
const changeimagesrc = document.getElementById('Myimage')
changeimagesrc.src="02.png"

//Task 8 Add and remove a css class to/from an HTML element
const addcssclass = document.getElementById('text')
addcssclass.classList.add('highlight')
addcssclass.classList.remove('highlight')

//Activity 5  Event Listener 
//Task 9 Add a click event listener to a button that changes the text content of a paragraph
const button =document.getElementById('myButton')
const paragraph = document.getElementById('myParagraph')

button.addEventListener('click', ()=>{
  paragraph.textContent="The text content has been changed"
  button.style.backgroundColor="Red"
});

//Task 10 Add a mouseover event listener to an element that changes its border color
const element = document.getElementById('myElement')
element.addEventListener('mouseover', ()=>{
  element.style.borderColor = 'red';
})
element.addEventListener('mouseout', ()=>{
  element.style.borderColor='Green';
})
