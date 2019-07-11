//ARRAR DE ARRAYS
const initialState = [
    [undefined, undefined, 1, 1, 1, undefined, undefined],
    [undefined, undefined, 1, 1, 1, undefined, undefined],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [undefined, undefined, 1, 1, 1, undefined, undefined],
    [undefined, undefined, 1, 1, 1, undefined, undefined]
];

let dynamicBoard = '<ul>';
// SE CREA UN UL CON ELEMENTOS LI DENTRO Y BOTONES
for (let i = 0; i < initialState.length; i++) {
    dynamicBoard += '<li>';

    for (let j = 0; j < initialState[i].length; j++) {
       dynamicBoard += '<button></button>';

    }
    dynamicBoard +='</li>';
}
dynamicBoard += '</ul>';

window.onload = function (){
    const boardEelement = document.getElementById('board');
    //SE ASIGNA DYNAMICBOARD
    boardEelement.innerHTML =  dynamicBoard;

}

