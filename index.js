console.log("Hellow World");

const element = $('#pageTitle');

console.log(element);

element[0].innerHTML = 'Hi My name is Ben';

const images = $('img');
console.log(images);

let iterations = 0;
setInterval(() => {
    iterations++;
    for (let i = 0; i < images.length; i++) {
        const curr = images[i];
        console.log(iterations);
        const borderColor = `hsl(${iterations*30 % 255},100%,50%)`;
        curr.style.border = `3px solid ${borderColor}`;
    }
}, 1000)

setTimeout(() => {
    const tempTextEle = $('#tempText')[0];
    tempTextEle.classList.add('invisible');
},3000)/*check back-notworking*/



 //keep tracker of how many cookies on hand
let cookieCount = 0;
 //every half second
setInterval(() => {
     //increase our number of cookie by 1
    cookieCount += 1;
    //update our cookie counter with the new current value
    const cookieCounterElement = document.getElementsByClassName('cookieCounter')[0];
    cookieCounterElement.innerHTML = `Number of Cookies: ${cookieCount}`;
 },500)
 
 
 //event listener
 //1.event delegation - we add the event to the parent element and figure out what was clicked afterwards
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'BUTTON') {
        const whatWasBought = event.target.classList[0];
        console.log(whatWasBought);
        
    }
    else {
        console.log('No button is clicked');
    }
    
})

//2.adding a event listenr to each item inidividually
function logWhatWasBought(event) {
    const whatWasBought = event.target.classList[0];
    console.log(whatWasBought);
}

const ovenButton = document.getElementsByClassName('oven')[0];
ovenButton.addEventListener('click', logWhatWasBought);

const factoryButton = document.getElementsByClassName('factory')[0];
factoryButton.addEventListener('click', logWhatWasBought);

const grammaButton = document.getElementsByClassName('gramma')[0];
grammaButton.addEventListener('click', logWhatWasBought);

//3.adding an event listener to each item using a loop
const purchaseButtons = document.getElementsByClassName('purchaseButton');
for (let i = 0; i < purchaseButtons.length; i++){
    const button = purchaseButtons[i];
    button.addEventListener('click', logWhatWasBought);
}


