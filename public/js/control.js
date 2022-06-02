var socket = io();
let isWinningProgress = false;
let isLoseBonus = false;

socket.on('checkState', (target, state) => {
    if (target == 'winrounds') {
        if (state == true) {
            $('#winning_progress').empty().append('Hide rounds');
            isWinningProgress = true;
        } else {
            $('#winning_progress').empty().append('Show rounds');
            isWinningProgress = false;
        }
    } else if (target == 'losebonus') {
        if (state == true) {
            $('#lose_bonus').empty().append('Hide lose bonus');
            isLoseBonus = true;
        } else {
            $('#lose_bonus').empty().append('Show lose bonus');
            isLoseBonus = false;
        }
    }
});

$('#confirmation_reset').hide();

$('#reset_hud').click(() => {
    $('#confirmation_reset').fadeIn();
});

$('#confirmation_cancel').click(() => {
    $('#confirmation_reset').fadeOut();
});

$('#confirmation_btn').click(() => {
    socket.emit('call_resethud');
    $('#confirmation_reset').fadeOut();
    $('#lose_bonus').empty().append('Show lose bonus');
    $('#winning_progress').empty().append('Show rounds');
});

$('#winning_progress').click(() => {
    if (isWinningProgress == false) {
        socket.emit('call_show_winrounds');
        $('#winning_progress').empty().append('Hide rounds');
        isWinningProgress = true;
    } else {
        socket.emit('call_hide_winrounds');
        $('#winning_progress').empty().append('Show rounds');
        isWinningProgress = false;
    }
});

$('#lose_bonus').click(() => {
    if (isLoseBonus == false) {
        socket.emit('call_show_losebonus');
        $('#lose_bonus').empty().append('Hide lose bonus');
        isLoseBonus = true;
    } else {
        socket.emit('call_hide_losebonus');
        $('#lose_bonus').empty().append('Show lose bonus');
        isLoseBonus = false;
    }
});