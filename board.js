const figures = {
    rook: 'rook',
    knight: 'knight',
    bishop: 'bishop',
    king: 'king',
    queen: 'queen',
    pawn: 'pawn'
}

const colors = {
    white: 'white',
    black: 'black'
}

const board = [
    [['A', 8], ['B', 8], ['C', 8], ['D', 8],  ['E', 8], ['F', 8], ['G', 8], ['H', 8]],
    [['A', 7], ['B', 7], ['C', 7], ['D', 7],  ['E', 7], ['F', 7], ['G', 7], ['H', 7]],
    [['A', 6], ['B', 6], ['C', 6], ['D', 6],  ['E', 6], ['F', 6], ['G', 6], ['H', 6]],
    [['A', 5], ['B', 5], ['C', 5], ['D', 5],  ['E', 5], ['F', 5], ['G', 5], ['H', 5]],
    [['A', 4], ['B', 4], ['C', 4], ['D', 4],  ['E', 4], ['F', 4], ['G', 4], ['H', 4]],
    [['A', 3], ['B', 3], ['C', 3], ['D', 3],  ['E', 3], ['F', 3], ['G', 3], ['H', 3]],
    [['A', 2], ['B', 2], ['C', 2], ['D', 2],  ['E', 2], ['F', 2], ['G', 2], ['H', 2]],
    [['A', 1], ['B', 1], ['C', 1], ['D', 1],  ['E', 1], ['F', 1], ['G', 1], ['H', 1]],
];
const gameState = [
    { type: figures.rook, colors: colors.black },
    { type: figures.knight, colors: colors.black },
    { type: figures.bishop, colors: colors.black },
    { type: figures.king, colors: colors.black },
    { type: figures.queen, colors: colors.black },
    { type: figures.bishop, colors: colors.black },
    { type: figures.knight, colors: colors.black },
    { type: figures.rook, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    { type: figures.pawn, colors: colors.black },
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.pawn, colors: colors.white },
    { type: figures.rook, colors: colors.white },
    { type: figures.knight, colors: colors.white },
    { type: figures.bishop, colors: colors.white },
    { type: figures.queen, colors: colors.white },
    { type: figures.king, colors: colors.white },
    { type: figures.bishop, colors: colors.white },
    { type: figures.knight, colors: colors.white },
    { type: figures.rook, colors: colors.white },
];

function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}
function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

const container = document.querySelector('#board');

const firstRow = createRow();
container.append(firstRow);
board.forEach((rowEl) => {
    const row = createRow();
    const firstCell = createCell();
    row.append(firstCell);
    const lastCell = createCell();
    rowEl.forEach((el) => {
        const cell = createCell();
        row.append(cell);
    })
    row.append(lastCell);
    container.append(row);
})
container.append(lastRow);