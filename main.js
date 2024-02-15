const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawBinaryTree(x, y, number, level) {
    if (number === 0 || number === 1) {
        ctx.fillText(number, x, y);
    } else {
        const remainder = number % 2;
        const quotient = Math.floor(number / 2);
        ctx.fillText(remainder, x, y);
        
        drawBinaryTree(x - level * 20, y + 30, quotient, level - 1);
        drawBinaryTree(x + level * 20, y + 30, remainder, level - 1);
    }
}

function decimalToBinary(decimalNumber) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    drawBinaryTree(200, 30, decimalNumber, 4);
}

const decimalNumber = 14;
decimalToBinary(decimalNumber);
