// var $width = $(document).width();
// var $height = $(document).height();
// $(window).resize(function() {
//    $width = $(document).width();
//    $height = $(document).height();
//  });

$(document).ready(function() {
$('.grid').click(function () {
  console.log("click");
  var idNumber = parseInt(this.id);
  var currentPlayer = player;
  if (playTurn(idNumber)) {
  $(this).text(currentPlayer);
  }

var winner = whoWon();
if (winner === 1) {
 $('.para').text('Player 1 Wins');
  } else if (winner === 2) {
      $(".para").text("Player 2 Wins");
  } else if (winner === 3) {
      $('para').text("It's a Tie!");
    } else {
    }

  if (isGameOver() === true) {
alert('Game Over. Please Reset.');
    }

  $('.button').click(function () {
    	restart();
    	$('.grid').text('');
  	  });
});



var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];

var player = 'x';

function playTurn (index) {
  var thisMeansTheGameOver = isGameOver();
  // check if game can be played by a false return from isGameOver function
  if (thisMeansTheGameOver) return false;
// check if grid index is taken
  if (grid[index] !== 0) return false;
  // alternate players
  grid[index] = player;
  if (player === 'x') player = 'o';
  else player = 'x';
  return true;
}

function isGameOver () {
  if (whoWon() === 1) return true;
  if (whoWon() === 2) return true;
  else return false;
}

function whoWon () {
  if ((grid[0] === 'x') && (grid[1] === 'x') && (grid[2] === 'x')) return 1;
  if ((grid[0] === 'o') && (grid[1] === 'o') && (grid[2] === 'o')) return 2;

  if ((grid[3] === 'x') && (grid[4] === 'x') && (grid[5] === 'x')) return 1;
  if ((grid[3] === 'o') && (grid[4] === 'o') && (grid[5] === 'o')) return 2;

  if ((grid[6] === 'x') && (grid[7] === 'x') && (grid[8] === 'x')) return 1;
  if ((grid[6] === 'o') && (grid[7] === 'o') && (grid[8] === 'o')) return 2;

  if ((grid[0] === 'x') && (grid[3] === 'x') && (grid[6] === 'x')) return 1;
  if ((grid[0] === 'o') && (grid[3] === 'o') && (grid[6] === 'o')) return 2;

  if ((grid[1] === 'x') && (grid[4] === 'x') && (grid[7] === 'x')) return 1;
  if ((grid[1] === 'o') && (grid[4] === 'o') && (grid[7] === 'o')) return 2;

  if ((grid[2] === 'x') && (grid[5] === 'x') && (grid[8] === 'x')) return 1;
  if ((grid[2] === 'o') && (grid[5] === 'o') && (grid[8] === 'o')) return 2;

  if ((grid[0] === 'x') && (grid[4] === 'x') && (grid[8] === 'x')) return 1;
  if ((grid[0] === 'o') && (grid[4] === 'o') && (grid[8] === 'o')) return 2;

  if ((grid[2] === 'x') && (grid[4] === 'x') && (grid[6] === 'x')) return 1;
  if ((grid[2] === 'o') && (grid[4] === 'o') && (grid[6] === 'o')) return 2;

  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) return 3;
  return 0;
}

function restart() {
  grid = [0, 0, 0,
           0, 0, 0,
           0, 0, 0];
  player = 'x';
}
});
