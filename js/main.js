/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 

 let click = 0;  
 let colors = []; // array of colors
 let refs = [] // array of dataset reference
 let matched = 0; // need to know when the game is over



/*----- cached element references -----*/ 
const gameEl = document.querySelector("#game");  // get all elements
const buttonEl = document.querySelector("#reset-btn"); // get reset button element
const messageEl = document.querySelector(".message");

/*----- event listeners -----*/ 
gameEl.addEventListener("click", handleClick); // listen any click event of game elements
buttonEl.addEventListener("click", resetAllElements);


/*----- functions -----*/
function resetState(){
  click = 0 ;
  colors = [];
  refs = [];
}

function resetAllElements(){
  
  const els = document.querySelectorAll('[data-ref]');
   els.forEach(el =>{
       el.classList.add('color-hidden');
       el.dataset.hidden = true;
  })
  messageEl.textContent = "";

}