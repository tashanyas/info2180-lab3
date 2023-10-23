document.addEventListener('DOMContentLoaded', function(){

    
    let gameStatus = true; 
    let player = "X" 
    let selection = []; 
    let controls = document.querySelector(".controls");

    const board = document.querySelector("#board");
    const boxes = board.querySelectorAll("div");
    const status = document.querySelector("#status");
    const newGame = controls.querySelector('.btn');


//function to switch players
    function switch_player(){ 
        if (player=="X"){
            player = "O";
        }
        else{
            player = "X";
        }
    }


    boxes.forEach(function(box, index){  //Used to display the squares
        box.classList.add('square');      


//add hover effect over grids

        box.addEventListener("mouseover", () => {
            box.style.cursor = "pointer";
            box.classList.add("hover");
        })

        box.addEventListener("mouseout",()=>{ 
            box.classList.remove("hover");
        });



        // displays a X or O when the box is clicked
        box.addEventListener("click", function(e){ 

            if (gameStatus == true && box.innerHTML==""){

                if (player == "X"){
                    box.classList.add("X")
                }
                else{
                    box.classList.add("O");
                }

                box.innerHTML = player;
                

                selection[index] = player;


                if (winner(index,player) == true){ 
                    gameStatus = false;
                    
                    status.classList.add("you-won");
                    status.innerHTML = `Congratulations! ${player} is the Winner!`;

                };
                
                switch_player()
            
            }
            
        })
        
        
    })


    //check the boxes to determine the winner
     function winner(index,player){
     
        if (index == 0){
            if((selection[1] == player && selection[2] == player) || 
            (selection[4]==player && selection[8]==player) || 
            (selection[3]==player && selection[6] == player)){
                return true;
            }
        }

        else if(index == 1){
            if((selection[0] == player && selection[2]==player) || 
            (selection[4]==player && selection[7]==player)){
                return true;
            }
        }

        else if(index == 2){
            if((selection[0] == player && selection[1]==player) || 
            (selection[4]==player && selection[6]==player) ||
            (selection[5] == player && selection[8] == player)){
                return true;
            }
        }

        else if(index == 3){
            if((selection[4] == player && selection[5] == player) ||
            (selection[0] == player && selection[6] == player)){
                return true;
            }
        }

        else if(index == 4){
            if((selection[3] == player && selection[5] == player) ||
            (selection[0] == player && selection[8] == player) ||
            (selection[2] == player && selection[6] == player)){
                return true;
            }
        }

        else if(index == 5){
            if((selection[3] == player && selection[4] == player) ||
            (selection[2] == player && selection[8] == player)){
                return true;
            }
        }

        else if(index == 6){
            if((selection[7] == player && selection[8] == player) ||
            (selection[2] == player && selection[4] == player) ||
            (selection[0] == player && selection[3] == player)){
                return true;
            }
        }

        else if(index == 7){
            if ((selection[6] == player && selection[8] == player) ||
            (selection[1] == player && selection[4] == player)){
                return true;
            }
        }

        else if(index == 8){
            if((selection[6] == player && selection[7] == player) ||
            (selection[0] == player && selection[4] == player) || 
            (selection[2] == player && selection[5] == player)){
                return true;
            }
        }

        return false; 
     };


     newGame.addEventListener("click", () => { 
        
        boxes.forEach(box => {
            box.classList.remove("X")
            box.classList.remove("O")
            box.innerHTML="";

        
        });

        selection = [] 

        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."

        gameStatus = true; //restarts the game
        player = "X";

     })
        
    
});