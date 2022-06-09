const intakeButton = document.querySelectorAll(".buttonClass button"); // For dimensions buttons 
const parentGrid = document.getElementsByClassName("grid")[0];  // For grid div
const clear = document.getElementsByClassName("clear")[0];  // For clear div
const eraser = document.getElementById("eraser");       // For eraser div
const rainbow = document.getElementById("rainbow");     //  For rainbow div
const dimension = document.getElementById("dimension"); // Displays this size of grid
let check1 = false; // for eraser
let check2 = false; // for rainbow
const hexArray = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]      // Array of  hex code


for(let i = 0; i < intakeButton.length ; i++){                  // Loop which adds event listener to all the dimension buttons
    
    intakeButton[i].addEventListener("click",function(){       
        let gridSize = 0;                                       // Gridsize is the dimensions of the grid
        let size = intakeButton[i].dataset.key;
        gridSize += Number(size);

        dimension.innerHTML = "Grid size is " + size;
        
        parentGrid.innerHTML = "";                              // Parent flex is the grid in which we will have all the blocks

        let counter = "";
        for(let d = 0; d < gridSize; d++){
            counter += "min-content ";
        }
        counter = counter.trim();
        parentGrid.style.gridTemplateColumns = counter;     // Defines number of columns in the grid
        
        for(let j = 0; j < gridSize*gridSize; j++){         
            let block = document.createElement('div');          // Creates (gridsize)^2 number of blocks
            block.style.width = String(504/gridSize)  + "px";   // Determines width of the block
            block.style.height = String(504/gridSize)  + "px";  // Determines height of the block
            block.classList.add("gridProperties");  // adding css class for styling
            parentGrid.style.display = "grid";      // display to grid for parentGrid
            parentGrid.appendChild(block);          // appending each block to parentGrid
            
            block.addEventListener("mouseenter", function(){    // Eventlistener for each block
                /* 
                    First we will check if "check1"{eraser} is true
                    If it is true then bg color will be transparent
                    If it is false then bg color will be either black or any random color
                    Secondly we will check if "check2"{rainbow} is true
                    If it is true then bg color will be a random color
                    If it is false then bg color will be black
                */
                if(check1 == true){                            
                    block.style.backgroundColor = "transparent";
                }
                else{
                    if(check2 == true){
                        block.style.backgroundColor = randomColor();
                    }
                    else{
                        block.style.backgroundColor = "black";
                    }
                }
            })
        }
    })
}


function randomColor(){         // Function which creates a string of randome hex code
    let colorString = "#";
    for(let i = 0; i < 6; i++){
        colorString += hexArray[Math.floor(Math.random()*16)];
    }
    return colorString;
}

clear.addEventListener("click",function(){  // Adding event listener to the clear div
    parentGrid.innerHTML = "";              // Clears the parentGrid's innerHTML
})


eraser.addEventListener("click",function(){ // Adding event listener to the eraser div
    // We will create this button a toggle button
    //If the button is initally not clicked {which means it is false} so when we click it, "check1" will become TRUE and change the bg color of the button so as to display that button is clicked
    //If the button is initally clicked {which means it is true} so when we click it, "check1" will become FALSE and bg color will be returned to  initial
    if(check1 == true){                       
        check1 = false;
        eraser.style.backgroundColor = "unset";
    }
    else{
        check1 = true;
        eraser.style.backgroundColor = "#3A5BA0";
    }
})

rainbow.addEventListener("click",function(){    // Adding event listener to the rainbow div
    // We will create this button a toggle button
    //If the button is initally not clicked {which means it is false} so when we click it, "check2" will become TRUE and change the bg color of the button so as to display that button is clicked
    //If the button is initally clicked {which means it is true} so when we click it, "check2" will become FALSE and bg color will be returned to  initial
    if(check2 == false && check1 == false){
        check2 = true;
        rainbow.style.backgroundColor = "#5FD068";
        
    }
    else{
        check2 = false;
        rainbow.style.backgroundColor = "unset";
    }    
})