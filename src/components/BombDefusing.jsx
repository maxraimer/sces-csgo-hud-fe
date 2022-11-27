import React from 'react'
import { Svgs } from './Svgs'
import $ from 'jquery'

export function BombDefusing() {

    return(
        <div id='defuser-bar' className='absolute w-[100px] h-[100px] left-[50%] translate-x-[-50px] bottom-[300px] opacity-0'>
            <div id='timer-circle' className='w-[100px] h-[100px] rotate-[315deg] ' style={{background: 'conic-gradient(#0060c1 350deg, #00000000 0deg)'}}></div>
            <div id='timer-cover' className='absolute w-[80px] h-[80px] rotate-[315deg] bg-[#1c88f2] top-[10px] left-[10px]'>
                <Svgs type='defuser' css='fill-white h-[50px] m-[15px] rotate-45'/>
            </div>
            <div id='timer-countdown' className='font-extrabold text-white text-[25px] text-center mt-5'>10.0</div>
        </div>
    )
}

export function playAnimationDefusingBomb(hasKits) {
    let time = (hasKits === true ? 5000 : 10000);
    let s, ms;

    let degs_delta = 3600/time;

    let degs = 0;


    $('#defuser-bar').animate({
        bottom: '+=20',
        opacity: 1
    }, 500);


    let int = setInterval(() => {

        s = Math.floor(time / 1000);
        ms = Math.floor((time - (s * 1000)) / 10);

        if (ms < 10) ms = '0' + ms;

        $('#defuser-bar #timer-circle').css('background', `conic-gradient(#0060c1 ${degs}deg, #00000000 0deg)`);
        $('#defuser-bar #timer-countdown').empty().append(`${s}.${ms}`);

        time -= 10;
        degs += degs_delta;

        if (time < -0.1) {
            $('#defuser-bar').delay(500).animate({
                bottom: '-=20',
                opacity: 0
            }, 500);
            clearInterval(int);
        }
    }, 10);
}