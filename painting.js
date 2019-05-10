
var brushColor = 'white'


document.addEventListener('DOMContentLoaded', (event) => {

var paintBlock = document.querySelectorAll('.paintSquare')
var paletteBlock = document.querySelectorAll('.paletteSquare')

var isDrawing = false

function canvasHandler(item) {
  if(item.style.backgroundColor == 'white'){
    item.style.backgroundColor = brushColor
    item.style.borderColor = brushColor
  } else if (item.style.backgroundColor == brushColor && !isDrawing){
    item.style.backgroundColor = 'white'
    item.style.borderColor = '#C1C1C1'
  } else{
    item.style.backgroundColor = brushColor
    item.style.borderColor = brushColor
  }
}

function paintBrushHandler(item){
  brushColor = item.id // blue, red, etc...
}

// Clicking on a canvas square
for (let i = 0; i < paintBlock.length; i++) {
  paintBlock[i].addEventListener('mousedown', function() {
    isDrawing = true
  })
  paintBlock[i].addEventListener('mouseup', function() {
    isDrawing = false
  })
  paintBlock[i].addEventListener('mouseenter', function() {
    if(isDrawing){
      canvasHandler(paintBlock[i])
    }
  })
  paintBlock[i].addEventListener('click', function() {
    canvasHandler(paintBlock[i])
  })
}

// Clicking on a palette color
for (let i = 0; i < paletteBlock.length; i++) {

  paletteBlock[i].addEventListener('click', function() {
    paintBrushHandler(paletteBlock[i])
    paletteBlock[i].style.border = "thick solid #000000"

    for(let j = 0; j < paletteBlock.length; j++){
      if(j !== i){
        paletteBlock[j].style.border = "thick dotted #000000"
      }
    }
  })
}

var trashCan = document.getElementById('delete')
trashCan.addEventListener('click', function() {
  if (confirm("Are you sure you want to delete this masterpiece? :(")) {
    // delete canvas
    var allCanvasSquares= document.getElementsByClassName('paintSquare')
    for (var i = 0; i < allCanvasSquares.length; i++) {
      // set all canvas squares to white
      allCanvasSquares[i].style.backgroundColor = 'white'
      allCanvasSquares[i].style.borderColor = '#C1C1C1';
    }
  }

})

});
