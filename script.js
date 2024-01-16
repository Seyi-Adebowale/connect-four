const cells = document.querySelectorAll('.grid div')
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('currentPlayer')

  let currentPlayer = 1

    const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]

  function clearBoard(){
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = 'white'
      }
  }

  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const cell1 = cells[winningArrays[y][0]]
      const cell2 = cells[winningArrays[y][1]]
      const cell3 = cells[winningArrays[y][2]]
      const cell4 = cells[winningArrays[y][3]]

      //check those cells to see if they all have the background color of player 1
      if (
        cell1.style.backgroundColor=='red' &&
        cell2.style.backgroundColor == 'red' &&
        cell3.style.backgroundColor=='red' &&
        cell4.style.backgroundColor=='red'
      )
      {
        displayModal()
        result.innerHTML = 'Player One Wins!'
        
        clearBoard()
      }

      //check those cells to see if they all have the background color of player 2
      if (
        cell1.style.backgroundColor=='yellow' &&
        cell2.style.backgroundColor=='yellow' &&
        cell3.style.backgroundColor=='yellow' &&
        cell4.style.backgroundColor=='yellow'
      )
      {
        displayModal()
        result.innerHTML = 'Player Two Wins!'
        
        clearBoard()
    }
  }
}


for(let i = 0; i < cells.length; i++){
    cells[i].onclick = () =>{
        if (cells[i + 7].classList.contains('taken') &&! cells[i].classList.contains('taken')) {
            if (cells[i].classList.contains('taken')){
                alert ('Cant play there!')
            }
            if (currentPlayer == 1) {
                cells[i].classList.add('taken')
                cells[i].style.backgroundColor='red'
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if (currentPlayer == 2){
              cells[i].classList.add('taken')
              cells[i].style.backgroundColor='yellow'
              currentPlayer = 1
              displayCurrentPlayer.innerHTML = currentPlayer        
          } 
      }else alert('Cant play there!')       
      checkBoard()
  }
} 

const modal = document.getElementById("rulesModal")
const btn = document.getElementById("myBtn")

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0]

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

const modal2 = document.getElementById("resultsModal")

// Get the <span> element that closes the modal
const spann = document.getElementsByClassName("closed")[0]

// When the user clicks on the button, open the modal
function displayModal() {
  modal2.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
spann.onclick = function() {
  modal2.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none"
  }
}

