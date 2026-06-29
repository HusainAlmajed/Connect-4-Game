/*-------------------------------- Constants --------------------------------*/
const gameBoard = [
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
];
// console.log(gameBoard)
// gameBoard   [0] [0] = 'Red';
// gameBoard   [0] [1] = 'Green'
// gameBoard   [1] [3] = 'Green';
// gameBoard   [5] [5] = 'Red';
// gameBoard   [2] [5] = 'Green';
// gameBoard   [2] [6] = 'Red';
// console.log(gameBoard);
/*-------------------------------- Variables --------------------------------*/
let winner = false;
let tie = false;
let turn = 'Blue';
let circleColumn;
let circleRow;
/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board');
const circles = document.querySelectorAll('.crcl');
const butn = document.querySelector('button');
const head = document.querySelector('h1');
const msg = document.querySelector('h2');

/*-------------------------------- Functions --------------------------------*/
const changeColor = (circle) => {
    if (circle.style.backgroundColor === '') {
    
    circleColumn = circle.id;
    console.log('Id: ' , circleColumn);
    console.log(circle.id % 7);
    circleColumn = Math.ceil((circle.id % 7)) + 1;
    console.log('Column: ' , circleColumn)
    circleRow = Math.floor((circle.id / 7)) + 1;
    console.log('Row: ' , circleRow)
    circle.style.backgroundColor = turn;
    gameBoard [circleRow - 1] [circleColumn - 1] = turn;
    changeTurn();
    }

    console.log(gameBoard)
}

const changeMessage = (circle) => {
    
    if (circle.style.backgroundColor !== '') {
        if (turn === 'Blue') {
            msg.textContent = `It's Blue's Turn`;
        } else if (turn === 'Yellow') {
            msg.textContent = `It's Yellow's Turn`;
        }
    }
    console.log('cuurent turn: ' , turn)
};

const getId = (circle) => {
    console.log('Hello, Im Circle');
};

const changeTurn = () => {

    if (turn === 'Blue') turn = 'Yellow';
    else turn = 'Blue';
}

const checkWinner = () => {

};

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {

changeColor(circle);//We need to pass an input for the function
changeMessage(circle);// we change the message after changing turns
// console.log('Id: ' , circle.id);
console.log(circle.className);
})});

butn.addEventListener ('click' , function() {
    document.body.remove();
});

