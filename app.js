/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board');
const circles = document.querySelectorAll('.crcl');

/*-------------------------------- Functions --------------------------------*/
const getId = (circle) => {
    console.log('Hello, Im Circle')
};
/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
circle.addEventListener ('click' , function() {
console.log(`Hi I'm circle ${circle.id}`)
})
});
