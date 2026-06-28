/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let winner = false;
let tie = false;
let turn = 'Blue';

/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board');
const circles = document.querySelectorAll('.crcl');
const butn = document.querySelector('button');
const head = document.querySelector('h1');
const msg = document.querySelector('h2');

/*-------------------------------- Functions --------------------------------*/
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

const changeColor = (circle) => {
    if (circle.style.backgroundColor === '') {

    circle.style.backgroundColor = turn;
    changeTurn();
    }

}

const changeTurn = () => {

    if (turn === 'Blue') turn = 'Yellow';
    else turn = 'Blue';
}

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {
console.log(turn);
console.log(`Hi I'm circle ${circle.id}`);
console.log(turn);
changeColor(circle);//We need to pass an input for the function
changeMessage(circle);// we change the message after changing turns

})});

butn.addEventListener ('click' , function() {
circles.style.backgroundColor = 'Blue';
});