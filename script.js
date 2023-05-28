const gameScreen = document.getElementById('game-screen');


function generateDivs(columns, rows){
    for(let i =0; i <(columns * rows); i++ )
    {
        const div = document.createElement('div');
        div.style.border = '1px solid gray';
        gameScreen.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gameScreen.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gameScreen.appendChild(div).classList.add('section');
    }
}
generateDivs(46, 27)