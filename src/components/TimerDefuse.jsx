import React from 'react'
import $ from 'jquery'

let defuse_timer = 0;

export function DefuseTimer(props) {
    if (Object.keys(props).length !== 0) {
        console.log(props);
        defuse_timer = props.countdown*1000;
        let text_line_timer = props.countdown.toFixed(1);
    
        return (
            <div className='absolute top-[90px] left-[341px]'>
                <div className='flex justify-center'>
                    <div id='defuse-timer' className='flex justify-end w-[464px] h-0 bg-[rgba(0,0,0,0.9)] overflow-hidden'>
                        <div id='defuse-line' className='flex justify-start w-full h-4 m-2 bg-sky-600 text-[12px] text-white font-medium px-1'>
                            {text_line_timer}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return
    }
}

export function showDefuseTimer() {
    $('#defuse-timer').animate({
        height: '2rem'
    }, 300);
    $('#defuse-line').css({
        paddingLeft: '4px',
        paddingRight: '4px',
        width: '100%'
    }).animate({
        paddingLeft: '0px',
        paddingRight: '0px',
        width: 0,
    }, defuse_timer, 'linear');
}

export function hideDefuseTimer() {
    $('#defuse-timer').animate({
        height: '0rem'
    }, 300);
    $('#defuse-line').finish();
}