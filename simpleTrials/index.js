let cat = document.getElementById('pixelCat');
// let document = document.getElementsByElementName('body');

cat.onmouseenter = function(e) {
  console.dir(cat);
}

let moveCatLeft = function (e) {
  console.log('cat left: ', cat.style);
  if (!cat.style.left) {
    cat.style.left = '20000px'
  }
  let left = cat.style.left.replace('px', '');
  console.log('replaced left: ', left);
  left--
  cat.style.left = left + 'px';
}

window.addEventListener('keydown', function(e) {
  let cat = document.getElementById('pixelCat');
  key = e.keyCode;
  if (key === 87 || key === 38) {
    key = 'up'
    cat.x = cat.x + 10
  } else if (key === 83 || key === 40) {
    key = 'down'
    cat.x = cat.x - 10
  } else if (key === 65 || key === 37) {
    key = 'left'
    moveCatLeft();
    cat.y = cat.y - 10
  } else if (key === 68 || key === 39) {
    key = 'right'
    cat.y = cat.y + 10
  }
  console.log('cat x coord: ', cat.x, ' cat y coord: ', cat.y)
})

console.log('running')