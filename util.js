const MAX_SIZE = 30;
const MIN_SIZE = 15;

function posRandom(n) {
    return Math.random() * (n - MAX_SIZE/2);
}

function negPosRandom(n) {
    let val = Math.random() * (n - MAX_SIZE/2);
    let neg = Math.floor(Math.random() * 2);
    return neg == 1 ? val : -1 * val;
  }
  
function generateColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomSize() {
    return (Math.random() * MAX_SIZE) + MIN_SIZE;
}

module.exports = {negPosRandom, posRandom, generateColor, randomSize};