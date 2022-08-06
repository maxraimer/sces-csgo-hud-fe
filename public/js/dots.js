var socket = io();
$('#dot').hide();

socket.on('fn_show_dot', () => {
    $('#dot').show();
});

socket.on('fn_hide_dot', () => {
    $('#dot').hide();
});