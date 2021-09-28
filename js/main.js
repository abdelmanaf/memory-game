/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 

 let click = 0;  // state to kn
 let colors = []; // array of colors
 let refs = [] // array of dataset reference
 let matched = 0; // need to know when the game is over



/*----- cached element references -----*/ 
const gameEl = document.querySelector("#game");  // get all elements
const buttonEl = document.querySelector("#reset-btn"); // get reset button element
const messageEl = document.querySelector(".message");

function resetState(){
  click = 0 ;
  colors = [];
  refs = [];
}