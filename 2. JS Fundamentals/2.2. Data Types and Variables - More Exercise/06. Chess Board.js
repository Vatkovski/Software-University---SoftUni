function generateChessBoard(n) {
    let chessBoard = '<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        chessBoard += '<div>\n';
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                chessBoard += '<span class="black"></span>\n';
            } else {
                chessBoard += '<span class="white"></span>\n';
            }
        }
        chessBoard += '</div>\n';
    }
    chessBoard += '</div>';
    return chessBoard;
}
