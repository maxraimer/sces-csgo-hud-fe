import { React, useEffect} from 'react'
import $ from 'jquery'

const { io } = require('socket.io-client')
const socket = io('http://176.108.2.93:3000/');

export function Scoreboard(scoreboard_info) {

    useEffect(() => {
        socket.on('round_winner', (data) => {
            let jsondata = JSON.parse(data);
        
            if (jsondata.team_index === 0) {
              winLeft();
            } else {
              winRight();
            }
          });
    }, [])
    
    if (Object.keys(scoreboard_info).length === 0) return;

    let countdown_timer;

    if (scoreboard_info.match.countdown >= 0) {
        let countdown = Math.round(scoreboard_info.match.countdown);
        let countdown_minutes = Math.floor(countdown / 60);
        let countdown_seconds = countdown % 60;
        countdown_timer = countdown_minutes + ':' + ((countdown_seconds < 10) ? "0" + countdown_seconds : countdown_seconds);    
    } else if (scoreboard_info.match.countdown < 0) {
        countdown_timer = 'Over';
    }
        
    return (
        <>
            <div id='scoreboard' className='flex justify-center mt-5'>
                <div id='team-left-name' className={`w-96 h-[70px] py-[14px] text-center bg-black opacity-80 ${scoreboard_info.team_left.side === 'CT' ? 'text-[#1c88f2]' : 'text-[#f3a124]'} text-[30px] font-bold uppercase`}>{scoreboard_info.team_left.name}</div>
                <img src={`${scoreboard_info.team_left.side === 'CT' ? 'ct.png' : 't.png'}`} alt='leftlogo' id='team-left-logo' className='w-[80px] h-[70px] bg-black py-[11px] px-4'/>
                <div id='team-left-score' className={`w-[80px] h-[70px] py-[14px] ${scoreboard_info.team_left.side === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'}  text-white text-[30px] font-bold text-center`}>{scoreboard_info.team_left.score}</div>

                <div id='timer-wrapper' className='w-[150px] h-[70px] bg-white py-1'>
                    <div id='timer' className='text-[30px] font-bold text-center uppercase'>{countdown_timer}</div>
                    <div id='round' className='font-medium uppercase text-center mt-[-5px]'>Round {scoreboard_info.match.round}</div>
                </div>

                <div id='team-right-score' className={`w-[80px] h-[70px] py-[14px] ${scoreboard_info.team_right.side === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} text-white text-[30px] font-bold text-center`}>{scoreboard_info.team_right.score}</div>
                <img src={`${scoreboard_info.team_right.side === 'CT' ? 'ct.png' : 't.png'}`} alt='rightlogo' id='team-left-logo' className='w-[80px] h-[70px] bg-black py-[11px] px-4'/>
                <div id='team-right-name' className={`w-96 h-[70px] py-[14px] text-center bg-black opacity-80 ${scoreboard_info.team_right.side === 'CT' ? 'text-[#1c88f2]' : 'text-[#f3a124]'} text-[30px] font-bold uppercase`}>{scoreboard_info.team_right.name}</div>
            </div>

            <div id='match-format' className={`flex justify-center w-[310px] h-8 bg-black opacity-80 py-1 mx-[50%] translate-x-[-155px] ${scoreboard_info.match.win_series === 1 ? 'hidden' : null}`}>
                <div id='lm-2' className='w-3 h-3 border-solid border-2 border-white mt-1.5 rotate-45 mr-4'></div>
                <div id='lm-1' className={`w-3 h-3 border-solid border-2 border-white mt-1.5 rotate-45 mr-14 ${scoreboard_info.team_left.series === 1 ? 'bg-white' : null}`}></div>
                <div id='format' className='text-white uppercase font-medium mt-0.5'>Best of 3</div>
                <div id='rm-1' className={`w-3 h-3 border-solid border-2 border-white mt-1.5 rotate-45 ml-14 ${scoreboard_info.team_right.series === 1 ? 'bg-white' : null}`}></div>
                <div id='lm-2' className='w-3 h-3 border-solid border-2 border-white mt-1.5 rotate-45 ml-4'></div>
            </div>

            <div id='left_team_win' className={`absolute w-[0] h-[70px] ${scoreboard_info.team_left.side === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} top-5 left-[21.3rem] text-[30px] font-bold uppercase text-center text-white py-[14px] truncate`}>Wins the round!</div>
            <div id='right_team_win' className={`absolute w-[0] h-[70px] ${scoreboard_info.team_right.side === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} top-5 right-[21.3rem] text-[30px] font-bold uppercase text-center text-white py-[14px] truncate`}>Wins the round!</div>
        </>
    )
}

function winLeft() {
    $('#left_team_win').animate({
        width: '+=464'
    }, 250).delay(3000).animate({
        width: '-=464',
        left: '+=464'
    }, 250).delay(250).animate({
        left: '-=464'
    }, 1)
}

function winRight() {
    $('#right_team_win').animate({
        width: '+=464'
    }, 250).delay(3000).animate({
        width: '-=464',
        right: '+=464'
    }, 250).delay(250).animate({
        right: '-=464'
    }, 1)
}

export function paintTimer(event) {
    if (event === 'bombPlanted') {
        $('#timer-wrapper').css('color', 'red');
    } else if (event === 'pause') {
        $('#timer-wrapper').css({
            'background': 'rgb(50, 50, 50)',
            'color': 'white'
        });
    }
}