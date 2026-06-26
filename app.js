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

/*-------------------------------- Functions --------------------------------*/
const getId = (circle) => {
    console.log('Hello, Im Circle')
};

const changeColor = (circle) => {

    circle.style.backgroundColor = turn;

}

const changeTurn = () => {

    if (turn === 'Blue') turn = 'Yellow';
    else turn = 'Blue'
}

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {
console.log(turn)
console.log(`Hi I'm circle ${circle.id}`)
changeTurn();
console.log(turn)
changeColor(circle);//We need to pass an input for the function

})});

butn.addEventListener('click' , function(){
circles.style.backgroundColor = 'Blue';
});