var socket = io();

var teams;

$.getJSON('/teams', (data) => {
    teams = data;
});

let current_map;
let x_offset;
let y_offset;
let map_scale;

function define_map() {
    $('#radar_bg').attr('src', `/img/radars/${current_map}.png`);

    switch (current_map) {
        case 'de_inferno':
            x_offset = 410;
            y_offset = 820;
            map_scale = 4.4;
        case 'de_dust2':
            x_offset = 515;
            y_offset = 730;
            map_scale = 4.35;
        case 'de_overpass':
            x_offset = 760;
            y_offset = 330;
            map_scale = 5.3;
        case 'de_mirage':
            x_offset = 750;
            y_offset = 250;
            map_scale = 3.5;
        case 'de_ancient':
            x_offset = 575;
            y_offset = 380;
            map_scale = 4;
        case 'de_nuke':
            x_offset = 460;
            y_offset = 380;
            map_scale = 6.5;
        case 'de_vertigo':
            x_offset = 930;
            y_offset = 410;
            map_scale = 2.85;
    }
}

socket.on('getData', (data) => {

    data = JSON.parse(data);
    current_map = data.map.name;

    console.log(data);
    
    define_map();

    for (let i = 0; i < teams.length; i++) {
        if (data.map.team_ct.name && data.map.team_ct.name.toUpperCase() == teams[i].name.toUpperCase()) {
            $(':root').css('--color-one', teams[i].primary_color);
            $(':root').css('--color-one-dark', teams[i].secondary_color);
        }
        
        if (data.map.team_t.name && data.map.team_t.name.toUpperCase() == teams[i].name.toUpperCase()) {
            $(':root').css('--color-two', teams[i].primary_color);
            $(':root').css('--color-two-dark', teams[i].secondary_color);
        }      
    }

    let local_players = {
        player_1: '',
        player_2: '',
        player_3: '',
        player_4: '',
        player_5: '',
        player_6: '',
        player_7: '',
        player_8: '',
        player_9: '',
        player_0: ''
    }

    let playersArray = Object.keys(data.allplayers);

    for (let i = 0; i < playersArray.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (data.allplayers[playersArray[i]].observer_slot == j) {
                local_players[`player_${j}`] = data.allplayers[playersArray[i]];
            } 
        }       
    }

    for (let i = 0; i < 10; i++) {
        let player_pos = local_players[`player_${i}`].position;
        player_pos = player_pos.split(', ');

        if ($(`.name#player${i}`).text() != local_players[`player_${i}`].name) {
            $(`.name#player${i}`).empty().append(local_players[`player_${i}`].name);
        }

        if (local_players[`player_${i}`].team == 'CT') {
            $(`.dot#player${i}`).css('background', 'var(--color-one)')
            $(`.name#player${i}`).css('color', 'var(--color-one)');
        } else if (local_players[`player_${i}`].team == 'T') {
            $(`.dot#player${i}`).css('background', 'var(--color-two)')
            $(`.name#player${i}`).css('color', 'var(--color-two)');
        }

        if (local_players[`player_${i}`].state.health <= 0) {
            $(`.dot#player${i}`).fadeOut();
            $(`.name#player${i}`).fadeOut();
        } else {
            $(`.dot#player${i}`).show();
            $(`.dot#player${i}`).animate({
                'top': `${y_offset - (player_pos[1] / map_scale)}px`,
                'left': `${x_offset + (player_pos[0]/ map_scale)}px`
            }, {duration: 200, easing: "linear" });
            
            $(`.name#player${i}`).show();
            $(`.name#player${i}`).animate({
                'top': `${y_offset - (player_pos[1] / map_scale)}px`,
                'left': `${x_offset + (player_pos[0]/ map_scale)}px`
            }, {duration: 200, easing: "linear" });
        }
    }

    if (data.bomb) {
        if (data.bomb.state == "planted") {
            let bomb_pos = data.bomb.position;
            bomb_pos = bomb_pos.split(', ');

            $(`#bomb`).css({
                'top': `${y_offset - (bomb_pos[1] / map_scale)}px`,
                'left': `${x_offset + (bomb_pos[0]/ map_scale)}px`
            }).show();
        } else if (data.bomb.state == "dropped") {
            let bomb_pos = data.bomb.position;
            bomb_pos = bomb_pos.split(', ');

            $(`#bomb`).css({
                'top': `${y_offset - (bomb_pos[1] / map_scale)}px`,
                'left': `${x_offset + (bomb_pos[0]/ map_scale)}px`
            }).show();
        } else {
            $(`#bomb`).hide();
        }
    }

});

setInterval(() => {
    $(`#bomb`).animate({
        'opacity': 0.1
    }, 1000);

    setTimeout(() => {
        $(`#bomb`).animate({
            'opacity': 1
        }, 1000);
    }, 1000);
}, 2000);
