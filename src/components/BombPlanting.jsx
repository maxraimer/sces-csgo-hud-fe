import React from 'react'
import { Svgs } from './Svgs'
import $ from 'jquery'

export function BombPlanting() {

    return(
        <div id='bomb-planting-bar' className='absolute w-[100px] h-[100px] left-[50%] translate-x-[-50px] bottom-[300px] opacity-0'>
            <div id='timer-circle' className='w-[100px] h-[100px] rotate-[315deg] ' style={{background: 'conic-gradient(#a66e18 0deg, #00000000 0deg)'}}></div>
            <div id='timer-cover' className='absolute w-[80px] h-[80px] -rotate-45 bg-[#f3a124] top-[10px] left-[10px]'>
                <Svgs type='c4' css='fill-white h-[35px] ml-[12px] mt-[22px] rotate-45'/>
            </div>
            <div id='timer-countdown' className='font-extrabold text-white text-[25px] text-center mt-5'>3.0</div>
        </div>
    )
}

export function playAnimationPlantingBomb() {
    let time = 3000;
    let s, ms;

    let degs_delta = 3600/time;

    let degs = 0;


    $('#bomb-planting-bar').animate({
        bottom: '320px',
        opacity: 1
    }, 500);


    let int = setInterval(() => {

        s = Math.floor(time / 1000);
        ms = Math.floor((time - (s * 1000)) / 10);

        if (ms < 10) ms = '0' + ms;

        $('#bomb-planting-bar #timer-circle').css('background', `conic-gradient(#a66e18 ${degs}deg, #00000000 0deg)`);
        $('#bomb-planting-bar #timer-countdown').empty().append(`${s}.${ms}`);

        time -= 10;
        degs += degs_delta;

        if (time < -0.1) {
            $('#bomb-planting-bar').delay(500).animate({
                bottom: '300px',
                opacity: 0
            }, 500);
            clearInterval(int);
        }
    }, 10);
}