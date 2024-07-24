//Event Listener 
//Activity 1 Basic event handling
//Task 1 Add click event listener to a button that changes the text content of a paragraph
const changetextcontent = document.getElementById('clickButton')
const paragraph = document.getElementById('paragraph')

changetextcontent.addEventListener('click', ()=>{
  paragraph.textContent="text has been changed"
})

//Task 2 Add a double click event listener to an image that toggle its visibility
const togglebutton = document.getElementById('toggleButton')
const myimage = document.getElementById('myImage')
togglebutton.addEventListener('click', ()=>{
  if(myImage.style.display === 'none'){
    myImage.style.display = 'block';
  }else{
    myImage.style.display = 'none';
  }
});
//Activity 2 Mouse event 
//Task 3 Add a mouseover event listener to an element that changes its background color.
const mouseovervent = document.getElementById('mouseoverBox')
mouseovervent.addEventListener('mouseover' , () =>{
  mouseoverBox.style.backgroundColor ="Red"
})
//Task 4 Add a mouseout event listener to an element that resets its background color.
const mouseoutevent = document.getElementById('mouseoverBox')
mouseoutevent.addEventListener('mouseout', () =>{
  mouseoverBox.style.backgroundColor="white"
})

//Activity 3 Keyboard events
//Task 5 Add a keydown event listener to an input field that logs the key pressed to the console
// const keydownevent = document.getElementById('keypressInput')
// const paragraphkey = document.getElementById('message')
// keydownevent.addEventListener('keydown', (event) => {
//   console.log(`Key pressed: ${event.key}`);
//   message.textContent = `User pressed: ${event.key}`;
// });

//Task 6 Add a keyup event listener to an input field that displays current value in paragraph
const keyupevent = document.getElementById('keypressInput')
const paragraphkeyup = document.getElementById('message')
keyupevent.addEventListener('keyup' , () =>{
  console.log('key pressed:${keyupevent.value}');

  paragraphkeyup.textContent = `current input value:${keyupevent.value}`
})

//Activity 4 
//Task 7 Add a submit event listener to a form that prevents the dhe dfault submission and logs the form data to the console
const Form = document.getElementById('form')
const Log = document.getElementById('log')
Form.addEventListener('submit' , (Event) =>{
  Event.preventDefault();
  Form.textContent='Form submission prevented'
})

//Task 8 Add a change events listener to a select dropdown that displays the selected value in paragraph
const chnagevent = document.querySelector('.ice-cream')
const results = document.querySelector('.result')

chnagevent.addEventListener('change' , (Event) =>{
  results.textContent = `you like:${Event.target.value}`
})

//activity 5 Event delegation
//Task 9 Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const itemList = document.getElementById('itemList');

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// Task 10Add an event listener to a parent element that listens for events from dynamically added child elements
const parent = document.getElementById('parent');
parent.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('dynamic-item')) {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
});


const addItemButton = document.getElementById('addItemButton');


addItemButton.addEventListener('click', () => {
 
    const newItem = document.createElement('div');
    newItem.textContent = `Dynamic Item ${parent.children.length + 1}`;
    newItem.classList.add('dynamic-item');
    

    parent.appendChild(newItem);
});
