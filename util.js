const MAX_SIZE = 30;
const MIN_SIZE = 15;

function randomPosition(n) {
    let val = Math.random() * n;
    let neg = Math.floor(Math.random() * 2);
    console.log(neg);
    return neg == 1 ? val : -1 * val;
  }
  
function generateColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomSize() {
    return (Math.random() * MAX_SIZE) + MIN_SIZE;
}

module.exports = {randomPosition, generateColor, randomSize};