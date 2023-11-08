// select all the boxes
const boxes = document.querySelectorAll('.box')
//console.log(boxes)
//select the container of boxes for evt listner
const container = document.querySelector('.container')
// console.log(container)
//create players
let currentPlayer = null
const player1 = 'X'
const player2 = 'O'
let winner 

const domWinner = document.querySelector('.winner')
//check who the current player is with function
const checkCurrentPlayer = () => {
  if (currentPlayer === null) {
    currentPlayer = player1
  } else if (currentPlayer === player1) {
    currentPlayer = player2
  } else if (currentPlayer === player2) {
    currentPlayer = player1
  }
  //check if working
  //console.log(currentPlayer)
}

//winning combos
const win1 = [1, 2, 3]
const win2 = [1, 4, 7]
const win3 = [4, 5, 6]
const win4 = [2, 5, 8]
const win5 = [3, 6, 9]
const win6 = [1, 5, 9]
const win7 = [7, 5, 3]
const win8 = [7, 8, 9]

//update win array to match the selections by user
const updateWin1 = (id, currentPlayer) => {
  if (id === '1') {
    win1.splice(0, 1, currentPlayer)
  }
  if (id === '2') {
    win1.splice(1, 1, currentPlayer)
  }
  if (id === '3') {
    win1.splice(2, 1, currentPlayer)
  }
  //console.log(win1)
}
const updateWin2 = (id, currentPlayer) => {
  if (id === '1') {
    win2.splice(0, 1, currentPlayer)
  }
  if (id === '4') {
    win2.splice(1, 1, currentPlayer)
  }
  if (id === '7') {
    win2.splice(2, 1, currentPlayer)
  }

}
const updateWin3 = (id, currentPlayer) => {
  if (id === '4') {
    win3.splice(0, 1, currentPlayer)
  }
  if (id === '5') {
    win3.splice(1, 1, currentPlayer)
  }
  if (id === '6') {
    win3.splice(2, 1, currentPlayer)
  }

}
const updateWin4 = (id, currentPlayer) => {
  if (id === '2') {
    win4.splice(0, 1, currentPlayer)
  }
  if (id === '5') {
    win4.splice(1, 1, currentPlayer)
  }
  if (id === '8') {
    win4.splice(2, 1, currentPlayer)
  }

}
const updateWin5 = (id, currentPlayer) => {
  if (id === '3') {
    win5.splice(0, 1, currentPlayer)
  }
  if (id === '6') {
    win5.splice(1, 1, currentPlayer)
  }
  if (id === '9') {
    win5.splice(2, 1, currentPlayer)
  }

}
const updateWin6 = (id, currentPlayer) => {
  if (id === '1') {
    win6.splice(0, 1, currentPlayer)
  }
  if (id === '5') {
    win6.splice(1, 1, currentPlayer)
  }
  if (id === '9') {
    win6.splice(2, 1, currentPlayer)
  }

}
const updateWin7 = (id, currentPlayer) => {
  if (id === '7') {
    win7.splice(0, 1, currentPlayer)
  }
  if (id === '5') {
    win7.splice(1, 1, currentPlayer)
  }
  if (id === '3') {
    win7.splice(2, 1, currentPlayer)
  }

}
const updateWin8 = (id, currentPlayer) => {
  if (id === '7') {
    win8.splice(0, 1, currentPlayer)
  }
  if (id === '8') {
    win8.splice(1, 1, currentPlayer)
  }
  if (id === '9') {
    win8.splice(2, 1, currentPlayer)
  }

}
//check Winner by checking if EVERY - boolean value is x or o
const checkWinner = (currentPlayer) => {
  const answer1 = win1.every((ele) => ele === currentPlayer)
  const answer2 = win2.every((ele) => ele === currentPlayer)
  const answer3 = win3.every((ele) => ele === currentPlayer)
  const answer4 = win4.every((ele) => ele === currentPlayer)
  const answer5 = win5.every((ele) => ele === currentPlayer)
  const answer6 = win6.every((ele) => ele === currentPlayer)
  const answer7 = win7.every((ele) => ele === currentPlayer)
  const answer8 = win8.every((ele) => ele === currentPlayer)
  //if any above are true
  if (answer1 || answer2 || answer3 || answer4 || answer5 || answer6 || answer7 || answer8) {
    //console.log(`${player1} is the big winner`)
    //change winner to currentplayer
    winner = currentPlayer
    //change dom to winner
    domWinner.textContent = winner
 //remove eventlisten to prevent extra entries
    container.removeEventListener('click', handleClick)
    // console.log(winner)
  }
} 

//add event list function
const handleClick = (e) => {
  //console.log(e)
  //check who the player is
  checkCurrentPlayer()
  //var to hold the target
  const target = e.target
  //console.log(target)
  //change textcontent of target to currentplayer
  target.textContent = currentPlayer
  //save the id of target
  const id = target.id
  console.log(id)
  //use our updatewin function
  updateWin1(id, currentPlayer)
  updateWin2(id, currentPlayer)
  updateWin3(id, currentPlayer)
  updateWin4(id, currentPlayer)
  updateWin5(id, currentPlayer)
  updateWin6(id, currentPlayer)
  updateWin7(id, currentPlayer)
  updateWin8(id, currentPlayer)

  //use our checkwinner function
  checkWinner(currentPlayer)
  console.log(winner)
}


//add evt listner to container
container.addEventListener('click', handleClick)