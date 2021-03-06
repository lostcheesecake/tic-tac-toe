const checkForWinner = require('./checkWinner')
let move = 1
let play = true
const playerOne = 'X'
const playerTwo = 'O'

const updateGame = function () {
  event.preventDefault()

  if ($(event.target).text() === '' && play) {
    if ((move % 2) === 1) {
      $(this).append(playerOne)
    } else {
      $(this).append(playerTwo)
    }
    move++
    if (checkForWinner() === -1 && move === 10) {
      $('#player-is').text('Game is a draw, Click Restart to play again.')
    }
    if (checkForWinner() !== -1 && checkForWinner() !== '') {
      if (checkForWinner() === 'X') { $('#player-is').text('Player 1 wins! Click Restart to play again.') }
      if (checkForWinner() === 'O') { $('#player-is').text('Player 2 wins! Click Restart to play again.') }
      play = false
    }
  }
}

module.exports = {
  updateGame
}
