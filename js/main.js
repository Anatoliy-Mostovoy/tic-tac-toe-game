                            //* Обьявляем переменные 
const ROWS = 3;
const CELLS = 3
                            //* Ольявляем переменную для установки значения
let playerMove = 'X'        //* это значение будет тоглом
                            //* находим элемент всего поля
const field = document.querySelector('.field');

//* делаем разметку для полей

for(let i=0; i<ROWS; i+=1){
    const addRow = document.createElement('div');
    addRow.classList.add('row');

    for(let i=0; i<CELLS; i+=1){
        const addCell = document.createElement('div')
        addCell.classList.add('cell')
        addRow.appendChild(addCell)
    }
    field.appendChild(addRow)
}
const onCellTarget = ev=> {
    if(ev.target.className === 'cell'){
        ev.target.textContent = playerMove
    }

    if(ev.target.textContent==='X'){
        playerMove = 'O'
    } else {playerMove = 'X'}
}

field.addEventListener('click', onCellTarget)