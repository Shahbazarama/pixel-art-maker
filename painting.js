
var brushColor = 'white'


document.addEventListener('DOMContentLoaded', (event) => {

var paintBlock = document.querySelectorAll('.paintSquare')
var paletteBlock = document.querySelectorAll('.paletteSquare')

function canvasHandler(item) {
  if(item.style.backgroundColor == 'white'){
    item.style.backgroundColor = brushColor
  } else if (item.style.backgroundColor == brushColor){
    item.style.backgroundColor = 'white'
  } else{
    item.style.backgroundColor = brushColor
  }
}

function paintBrushHandler(item){
  brushColor = item.id // blue, red, etc...

}

for (let i = 0; i < paintBlock.length; i++) {
  paintBlock[i].addEventListener('click', function() {
    canvasHandler(paintBlock[i])
  })
}

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
});
