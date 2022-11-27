import React from 'react'
import $ from 'jquery'

export function BombTimer() {
    return (
        <div className='absolute top-[90px] left-[1115px]'>
            <div className='flex justify-center left'>
                <div id='bomb-timer' className='flex justify-start w-[464px] h-0 bg-[rgba(0,0,0,0.9)] overflow-hidden'>
                    <div id='bomb-line' className='flex justify-end w-full h-4 m-2 bg-red-600 text-[12px] text-white font-medium px-1'></div>
                </div>
            </div>
        </div>
    )
}

export function showBombTimer() {
    $('#bomb-timer').animate({
        height: '2rem'
    }, 300);

    let time = 40.0;

    $('#bomb-line').css({
        paddingLeft: '4px',
        paddingRight: '4px',
        width: '100%'
    }).animate({
        paddingLeft: '0px',
        paddingRight: '0px',
        width: 0,
    }, 40000, 'linear');

    let int = setInterval(() => {
        if (time < 0) clearInterval(int);

        time -= 0.1;        
        $('#bomb-line').empty().append(time.toFixed(1));
    }, 100);    
}

export function hideBombTimer() {
    $('#bomb-timer').animate({
        height: '0rem'
    }, 300);
    $('#bomb-line').finish();
}