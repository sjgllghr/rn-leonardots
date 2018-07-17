const MAX_SIZE = 30;
const MIN_SIZE = 15;

const DEFAULT_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const NEON_COLORS = ['#FF0099', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#CC00FF'];
const GRAYSCALE_COLORS = ['gray', 'black', '#DCDCDC', '#A9A9A9', '#505050'];

function posRandom(n) {
    return Math.random() * (n - MAX_SIZE/2);
}

function negPosRandom(n) {
    let val = Math.random() * (n - MAX_SIZE/2);
    let neg = Math.floor(Math.random() * 2);
    return neg == 1 ? val : -1 * val;
}
  
function generateColor() {
    if (!global.colorsOn) {
        return 'gray';
    } else {
        let colors = [];
        if (global.theme == 'neon') {
            colors = NEON_COLORS;
        } else if (global.theme == 'grayscale') {
            colors = GRAYSCALE_COLORS;
        } else {
            colors = DEFAULT_COLORS;
        }
    
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

function randomSize() {
    return (Math.random() * MAX_SIZE) + MIN_SIZE;
}

module.exports = {negPosRandom, posRandom, generateColor, randomSize};