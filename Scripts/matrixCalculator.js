const matrixContainer = document.querySelectorAll('.matrix-container');
let rows = 2;
let columns = 2;
const matrixDropdown = document.querySelector('.matrix-size-dropdown');

// const matrixOne = [1, 2, 3, 4];
// const matrixTwo = [5, 6, 7, 8];

// function matrixAddition(mat1, mat2) {
//   const sumMatrix = [];
//   for (let j = 0; j < 4; j += 1) {
//     sumMatrix.push(mat1[j] + mat2[j]);
//   }
//   return sumMatrix;
// }

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateMatrixElements(rowSize, columnSize) {
  if (rowSize === columnSize) {
    matrixContainer.forEach((matrix) => {
      // eslint-disable-next-line no-param-reassign
      matrix.style.gridTemplate = `repeat(${rowSize}, 2rem) / repeat(${columnSize}, 2rem)`;
      const size = rowSize * columnSize;
      for (let i = 0; i < size; i += 1) {
        const matrixElement = document.createElement('input');
        matrixElement.className = 'mat-element';
        matrix.appendChild(matrixElement);
      }
    });
  } else {
    // eslint-disable-next-line no-alert
    alert('Rows must be equal to columns');
  }
}

function createMatrix() {
  matrixDropdown.addEventListener('change', (e) => {
    matrixContainer.forEach((matrix) => {
      removeAllChildNodes(matrix);
      rows = e.target.value;
      columns = e.target.value;
    });
    generateMatrixElements(rows, columns);
  });
}

// function clearMatrix() {

// }

createMatrix();
