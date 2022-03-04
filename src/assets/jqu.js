import $ from "jquery"

$(document).ready(function () {
    var x = 'X';
    var o = 'O';
    var turn = Math.ceil(Math.random() * 2);

    if(turn == 1) {
        $('.turn').html("Ход: 1 игрока: " + x)
    } else {
        $('.turn').html("Ход: 2 игрока: " + o)
    }

    $('.slot').on('click', function () {
        if ($(this).text() != x && $(this).text() != o) {
            if (turn == 1) {
                $(this).html(x)
                turn = 2
                $('.turn').html("Ход: 2 игрока: " + o)
            } else {
                $(this).html(o)
                turn = 1
                $('.turn').html("Ход: 1 игрока: " + x)
            }
        } else {
            console.log("Слот занят")
        }
    });
});