/*-------------------------------- Constants --------------------------------*/
let gameBoard = [
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
    ['' , '' , '' , '' , '' , '' , ''] , 
];

const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]
/*-------------------------------- Variables --------------------------------*/
let winner = false;
let tie;
let turn = 'Blue';
let circleColumn;
let circleRow;
let lastIndex;
let lastCircleId;
let winnerColor;
/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board');
const circles = document.querySelectorAll('.crcl');
const butn = document.querySelector('button');
const head = document.querySelector('h1');
const msg = document.querySelector('h2');

/*-------------------------------- Functions --------------------------------*/
const changeColor = (circle) => {
        
    if (!winner && !tie) {
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
    gameBoard [lastIndex] [circleColumn] = turn;
    }};

    console.log(gameBoard)
}

const changeMessage = (circle) => {
    
    if (winner === true) {
        msg.textContent = (`The winner is ${turn}`)
        return;
    };  

    if (circle.style.backgroundColor === '') {
        if (turn === 'Yellow') {
            msg.textContent = `It's Blue's Turn`;
        } else if (turn === 'Blue') {
            msg.textContent = `It's Yellow's Turn`;
        }
    }else{
        msg.textContent = 'Invalid!! Chose an empty circle';
    }

    console.log('cuurent turn: ' , turn)
};

const changeTurn = () => {
    
    if (winner || tie) {
        return;
    };

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

console.log(gameBoard.length);
console.log(gameBoard[0].length);

const checkTie = () => {
    tie = true;
    for (let i = 0; i < gameBoard.length;i++) {
        for (let y = 0; y < gameBoard[0].length;y++) {

            if (gameBoard[i][y] === '') {
                tie = false;
    }

        }
    }

    if (tie) {
        msg.textContent = 'Its a Tie !!!';
    }
    console.log(tie);

}

const checkWinner = () => {
    
    for (let y = 0; y < winningArrays.length; y++) {

        if (
            circles[winningArrays[y][0]].style.backgroundColor !== '' 
            && circles[winningArrays[y][0]].style.backgroundColor === circles[winningArrays[y][1]].style.backgroundColor 
            && circles[winningArrays[y][0]].style.backgroundColor === circles[winningArrays[y][2]].style.backgroundColor 
            && circles[winningArrays[y][0]].style.backgroundColor === circles[winningArrays[y][3]].style.backgroundColor
        ) {
            winner = true;
        }
    }

    console.log('Winner is: ', winner);
};

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {

changeColor(circle);//We need to pass an input for the function
checkTie();
checkWinner();
changeMessage(circle);// we change the message after changing turns
changeTurn();

})});

butn.addEventListener ('click' , function() {
    resetGame();
});

