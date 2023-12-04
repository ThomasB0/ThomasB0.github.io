//les combos pour gagner
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

//variables

let board;
let turn = 'directions_boat';
let win;
let winner = null;

//endroit ou écrire

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.getElementById('testt');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
//fonction pour vérifier s'il y a un gagnant
function getWinner() {

    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

//foction pour savoir à qui le tour
function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    if (board[idx] == "" && winner == null){
    board[idx] = turn;
    turn = turn == 'directions_boat' ? 'train' : 'directions_boat';
    win = getWinner();
    render();
    }
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

partie1 = document.getElementById("partie1");
partie2 = document.getElementById("partie2");

//fonction pour faire l'affichage à l'écran

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
        if (win == 'directions_boat'){
            partie1.innerHTML = "";
            messages.innerHTML = "directions_boat";
            partie2.innerHTML = "gagne la partie";
        }
        else if (win == "train"){
            partie1.innerHTML = "";
            messages.innerHTML = 'train';
            partie2.innerHTML = " gagne la partie";
        }
        else if(win == "T"){
            partie1.innerHTML = "égalité";
            messages.innerHTML = "";
            partie2.innerHTML = "";
        } 
        else{
            partie1.innerHTML = "C'est à ";
            messages.innerHTML = turn;
            partie2.innerHTML = "de jouer";
        }
    };

init();

let footer = document.getElementById("foot");
let bouton = document.getElementById("afficher2");

//fonction pour afficher le footer ou le faire disparaitre
function AfficherFooter(){
    if(footer.className == ""){
        footer.className = "hidden";
        bouton.innerHTML = "expand_less";
    }
    else{
        footer.className = "";
        bouton.innerHTML = "keyboard_arrow_down"
    }
}

//fonction pour recommencer le jeu en appuyant sur le bouton réinitialliser
function reset(){
winner = null;
turn = "directions_boat";
win = null;
render();
}