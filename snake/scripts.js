const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = canvas.width;
let snake = [{ x: gridSize * 2, y: gridSize * 2 }];
let direction = 'right';
let food = { x: gridSize * Math.floor(Math.random() * (canvasSize / gridSize)), y: gridSize * Math.floor(Math.random() * (canvasSize / gridSize)) };
let score = 0;

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    const key = event.key;
    if (key === 'w' && direction !== 'down') direction = 'up';
    if (key === 's' && direction !== 'up') direction = 'down';
    if (key === 'a' && direction !== 'right') direction = 'left';
    if (key === 'd' && direction !== 'left') direction = 'right';
}
let gameover=false
function gameLoop() {
    if(gameover){
        return;
    }
    if (checkCollision()) {
        document.getElementById("score").innerHTML="gameover din score var: "+score
        //document.location.reload();
        gameover=true
    }

    moveSnake();
    if (checkFoodCollision()) {
        score++;
        document.getElementById("score").innerHTML=score

        placeFood();
    }

    clearCanvas();
    drawSnake();
    drawFood();
}

function moveSnake() {
    const head = { ...snake[0] };
    if (direction === 'up') head.y -= gridSize;
    if (direction === 'down') head.y += gridSize;
    if (direction === 'left') head.x -= gridSize;
    if (direction === 'right') head.x += gridSize;

    snake.unshift(head);
    snake.pop();
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) return true;
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
}

function checkFoodCollision() {

    const head = snake[0];
    return head.x === food.x && head.y === food.y;
}

function placeFood() {
    food = {
        x: gridSize * Math.floor(Math.random() * (canvasSize / gridSize)),
        y: gridSize * Math.floor(Math.random() * (canvasSize / gridSize))
    };
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === food.x && snake[i].y === food.y) {
            placeFood();
            break;
        }
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
    }
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

setInterval(gameLoop, 300);