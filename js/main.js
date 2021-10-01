/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 
let click = 0;  
let colors = []; // array of colors
let refs = [] // array of dataset reference
let matched = 0; // need to know when the game is over



/*----- cached element references -----*/ 
const gameEl = document.querySelector("#game");  // get all elements
const messageEl = document.querySelector(".message"); // get h2 element
const cardEls = document.querySelectorAll(".card");  // get all the cards
const buttonEl = document.querySelector("#reset-btn"); // get reset button element



/*----- event listeners -----*/ 
gameEl.addEventListener("click", handleClick); // listen any click event of game elements
buttonEl.addEventListener("click", resetAllElements); //Listen to click event on reset button



/*----- functions -----*/
function handleClick(e){
  const el = e.target;
  const isHidden = el.dataset.hidden;
  const getColor = el.dataset.color;
  const getRef = el.dataset.ref;
  colors.push(getColor)
  refs.push(getRef)
  if(isHidden){
      if (click === 0){ //check if it's the first time
        el.classList.add("animate__animated");
        el.classList.add("animate__flipInX");
        el.classList.remove('color-hidden');
        // el.classList.add("disabled");
        setTimeout(function(){
          el.classList.remove("animate__animated");
          el.classList.remove("animate__flipInX");
        }, 4000);
        el.dataset.hidden = "false";
        click++;
      } else {
        if(click === 1){ //check for the second click
          if(colors[0] === colors[1]){
            el.classList.add("transparent");
            el.classList.remove('color-hidden');
            el.dataset.hidden = "false";
            matched++;
            hiddingBox();
            resetState();
            if(matched === 8){
              messageEl.textContent = "Congratulations, you win!!!";
            }
          }else {
            const ref = document.querySelector(`[data-ref='${refs[0]}`);
            ref.classList.add('color-hidden')
            ref.dataset.hidden = "true";
            resetState();
          }
        }
      }
  } else { 
    alert('It is already selected');
  }
}

function resetState(){
  click = 0 ;
  colors = [];
  refs = [];
}


function resetAllElements(){
  cardEls.forEach(el =>{
    el.classList.remove('transparent')
      el.classList.add('color-hidden');
      el.dataset.hidden = true;
  })
  messageEl.textContent = "";
}

function hiddingBox(){
  const refEl = document.querySelector(`[data-ref='${refs[0]}`);// make the divs disappear
  refEl.classList.add('transparent');
}
