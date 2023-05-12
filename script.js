// state variables
let match = 0
let firstBox
let secondBox
let click = 1
let win = 0
let turn = 0
let count = 30

// let winning combos be images for the matching game
let winningCombos = {
  img01: 'chucky',
  img02: 'chucky',
  img03: '2pac',
  img04: 'Britney',
  img05: 'Britney',
  img06: 'Biggie',
  img07: 'Biggie',
  img08: '2pac',
  img09: 'Meangirls',
  img10: 'Meangirls',
  img11: 'Forest',
  img12: 'Forest'
}

// initializing state of the game
const init = () => {
  gameBoard = false
  click = 1
  turn = false
  win = 0
}

// cached element references
const boxes = document.querySelectorAll('.front')
const gameBoard = document.querySelectorAll('.gameBoard')
let wins = document.querySelector('.wins')

// render boxes function; to actually get the boxes to actively flip over on the initial click

const renderBoxes = () => {
  boxes.forEach((box) => {
    box.addEventListener('click', (evt) => {
      let image = box.querySelector('.back')
      let front = box.querySelector('.front')
      // front.classList.add('hidden')
      // image.classList.remove('hidden')
      // image.classList.add('visible')
      clickedBox(evt)
    })
  })
}
renderBoxes()

// Match boxes function; possible winning matches, if a total of a set of 6 boxes match out of 12 within the 30 seconds of the game, then you will get an alert that will say YOU WON!PLAY AGAIN! after 5 seconds.
//Use set timeout function
const matchingBoxes = (first, second) => {
  console.log(first, second)
  if (winningCombos[`${first}`] === winningCombos[`${second}`]) {
    firstBox.removeEventListener('click', clickedBox)
    secondBox.removeEventListener('click', clickedBox)
    match++
    if (match === 6) {
      setTimeout(() => {
        alert('YOU WON! PLAY AGAIN!'), 500
        console.log('You Won')
      })
    }
    click = 1
    return
  } else {
    setTimeout(() => {
      firstBox.classList.remove('visible')
      firstBox.classList.add('hidden')
      secondBox.classList.remove('visible')
      secondBox.classList.add('hidden')
    }, 500)
    click = 1
  }
}

// make global click count or turn click that starts at 0 counts up by 1 everytime a click happens. Use slice

const clickedBox = (evt) => {
  if (click === 1) {
    click++
    firstBox = evt.target.querySelector('.back')
    firstBox.classList.remove('hidden')
    firstBox.classList.add('visible')
  } else if (click === 2) {
    secondBox = evt.target.querySelector('.back')
    let src2 = secondBox.src.slice(43, 48)
    let src1 = firstBox.src.slice(43, 48)
    secondBox.classList.remove('hidden')
    secondBox.classList.add('visible')
    console.log(src1, src2)
    matchingBoxes(src1, src2)
  }
}

// Use the setInterval() method for the timer to keep track of the game
let timer = setInterval(() => {
  count--
  if (count > 0) {
    time.textContent = count
  } else {
    time.textContent = 'GAME OVER'
    clearInterval(timer)
  }
}, 1000)

// I got my restart button to work by using the same link I used for my main.html page to link both pages
