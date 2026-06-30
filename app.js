/*-------------------------------- Constants --------------------------------*/
let gameBoard = [
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
let lastIndex;
let lastCircleId;
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
    circleColumn = circle.id % 7;
    console.log('Column: ' , circleColumn)
    circleRow = Math.floor((circle.id / 7)) + 1;
    console.log('Row: ' , circleRow)
    lastIndex = lastEmpty(circleColumn);
    console.log('Last index is: ' , lastIndex);
    lastCircleId = lastIndex * 7 + circleColumn;
    console.log('Last Id: ' , lastCircleId);
    document.getElementById(lastCircleId).style.backgroundColor = turn;
    // circle.style.backgroundColor = turn;
    gameBoard [lastIndex] [circleColumn] = turn;
    changeTurn();
    }

    console.log(gameBoard)
}

const changeMessage = (circle) => {
    
    if (circle.style.backgroundColor === '') {
        if (turn === 'Yellow') {
            msg.textContent = `It's Blue's Turn`;
        } else if (turn === 'Blue') {
            msg.textContent = `It's Yellow's Turn`;
        }
    }else{
        msg.textContent = 'Invalid!! Chose an empty circle';
    }
        
    //     if (circle.style.backgroundColor === 'blue'){
    //     msg.textContent = "Heyyy!!";
    // }
    console.log('cuurent turn: ' , turn)
};

// const getId = (circle) => {
//     console.log('Hello, Im Circle');
// };

const changeTurn = () => {

    if (turn === 'Blue') turn = 'Yellow';
    else turn = 'Blue';
}

const lastEmpty = (circleColumn) => {
    
    for (let i = 5; i >= 0;i--) {
        if (gameBoard[i][circleColumn] === '') {

            return i;

        }
    }

    return null;

};

const checkWinner = () => {
    
    
};

const resetGame = () => {

    gameBoard = [
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
];
    turn = 'Blue';
    winner = false;
    tie = false;
    msg.textContent = ('Chose a circle to start');

    circles.forEach((item) => {
        item.style.backgroundColor = '';
    });

};

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {

changeMessage(circle);// we change the message after changing turns
changeColor(circle);//We need to pass an input for the function
// console.log('Id: ' , circle.id);
// console.log(circle.className);
// checkWinner();
})});

butn.addEventListener ('click' , function() {
    // document.body.remove();
    resetGame();

});

