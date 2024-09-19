// 获取一个随机数
function randomInt() {
    return Math.floor(Math.random() * 100) + 1;
}

function endGame() {
    document.getElementById('guessButton').disabled = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('playAgainButton').style.display = 'block';
}