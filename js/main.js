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

function handleClick (e){
  console.log(e)
    const el = e.target;
    // console.log(el.dataset.hidden);
    const isHidden = el.dataset.hidden;
    const getColor = el.dataset.color;
    const getRef = el.dataset.ref;
    colors.push(getColor)
    refs.push(getRef)

    if(isHidden === "true"){
        if (click == 0){ //check if it's the first time
           el.classList.remove('color-hidden');
           el.dataset.hidden = "false";
          click++
        } else {
          if(click == 1){
           if(colors[0] == colors[1]){

             el.classList.remove('color-hidden');
             el.dataset.hidden = "false";
             matched++
           
             resetState();
              if(matched == 8){
                messageEl.textContent = "Congratulations , you win";
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
        
        alert('it already selected');
    }
}

function resetAllElements(){
  
  const els = document.querySelectorAll('[data-ref]');
   els.forEach(el =>{
       el.classList.add('color-hidden');
       el.dataset.hidden = true;
  })
  messageEl.textContent = "";

}
