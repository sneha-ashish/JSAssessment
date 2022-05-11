// import all the required modules

const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');

// Instanitiate variable
// You can edit or create new variables if needed


const hat = '^';            //my Hat
const hole = 'O';
const fieldCharacter = '░'; //Grass patch 1m by 1m ->fill up the whole field(10 by 10)
const pathCharacter = '*';  //ME
const row = 10;
const col = 10;

// If you prefer to use the function, pls go ahead
// In this kick-starter we are using Class Object

// 1) Build the whole Field out (10 row x 10 col)
// Need to create An 2D Array to capture  
// construct the layout of the field using empty array

class Field {
    field = [];

    constructor() {
        // The current location of the character*
        // character * can be always at the default of position(0,0)

        this.locationX = 0;
        this.locationY = 0;

        for (let a = 0; a < row; a++) {
            this.field[a] = [];
        }
        this.generateField();
    }


    //console.lo(this.field);
    // Set the "hat" location
    generateField() {
        let holeCount = 0;
        for (let x = 0; x < row; x++) {
            for (let y = 0; y < col; y++) {
                const prob = Math.floor(Math.random() * 5)
                if(prob % 4 == 0 && holeCount < 30){
                    this.field[x][y] = hole;
                    holeCount = holeCount +1 ;
                }else {
                    this.field[x][y] = fieldCharacter;
                }
                

            }
        }

        // console.log(this.field);
        //set  the "hat" Location
        let randomRowNumber = Math.floor(Math.random() * 10)
        let randomColNumber = Math.floor(Math.random() * 10)
        this.field[randomRowNumber][randomColNumber] = hat;

        //set character position as  [0][0]
        this.field[this.locationX][this.locationY] = pathCharacter;
    }
    // Task 4: Create runGame, print, askQuestion Methods for the game
    // Create Run Game
    runGame() {
        //Implement your codes

        this.print();
        this.askQuestion();
    }
    print() {
        clear();
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n'); //new line /break

        console.log(displayString);

    }

    askQuestion() {
        const answer = prompt('Which way?(u, d, l, r)').toUpperCase();
        //Implement your codes
        if(answer == 'U'){
            if(this.locationX == 0){
                console.log("Out of bounds - Game End!");
                return;
            }else {
                // Current location of user changes to field 
                this.field[this.locationX][this.locationY] = fieldCharacter
                this.locationX = this.locationX -1;
                if(this.field[this.locationX][this.locationY] == hat){
                    console.log("Congrats, you found your hat!");
                    return;
                }else if(this.field[this.locationX][this.locationY] == hole){
                    console.log("Sorry, you fell down a hole!");
                    return;
                }
            }
        } else if(answer == 'D'){
            if(this.locationX == 9){
                console.log("Out of bounds - Game End!");
                return;
            }else {
               
                 // Current location of user changes to field 
                 this.field[this.locationX][this.locationY] = fieldCharacter
                 this.locationX = this.locationX + 1;
                 if(this.field[this.locationX][this.locationY] == hat){
                     console.log("Congrats, you found your hat!");
                     return;
                 }else if(this.field[this.locationX][this.locationY] == hole){
                     console.log("Sorry, you fell down a hole!");
                     return;
                 }
            }
        }  else if(answer == 'L'){
            if(this.locationY == 0){
                console.log("Out of bounds - Game End!");
                return;
            }else {
               
                  // Current location of user changes to field 
                  this.field[this.locationX][this.locationY] = fieldCharacter
                  this.locationY = this.locationY - 1;
                  if(this.field[this.locationX][this.locationY] == hat){
                      console.log("Congrats, you found your hat!t");
                      return;
                  }else if(this.field[this.locationX][this.locationY] == hole){
                      console.log("Sorry, you fell down a hole!");
                      return;
                  }
            }
        } else if(answer == 'R'){
            if(this.locationY == 9){
                console.log("Out of bounds - Game End!");
                return;
            }else {
                
                  // Current location of user changes to field 
                  this.field[this.locationX][this.locationY] = fieldCharacter
                  this.locationY = this.locationY + 1;
                  if(this.field[this.locationX][this.locationY] == hat){
                      console.log("Congrats, you found your hat!");
                      return;
                  }else if(this.field[this.locationX][this.locationY] == hole){
                      console.log("Sorry, you fell down a hole!");
                      return;
                  }
            }
        } else {
                console.log("Please enter the correct keys");
        } 
        this.field[this.locationX][this.locationY] = pathCharacter;
        this.runGame();

    }

} // End of the Field Class 


// Task 5: Instantiate Field Class to initialise constructor and generate rows and columns from the generateField Method. Call runGame Method to run the game
// Create an instance object for the field

const myField = new Field();
myField.runGame();

