import React from 'react'

export function PlayersAlive(pa_info) {
    if (Object.keys(pa_info).length !== 0) {

        return (
            <div className='absolute w-full h-full top-0 overflow-hidden'>
                <div id='players-alive' className='absolute top-5 right-4 bg-[rgba(0,0,0,0.8)] w-52 h-[70px] pl-12 pr-2 text-white'>
                    <div className='absolute bg-black px-1 py-1 w-[70px] top-[0.8rem] -left-4 -rotate-90 text-center text-[12px] font-bold'>PLAYERS ALIVE</div>

                    <div className='flex justify-between text-center h-full'>
                        <div className={`text-[40px] font-bold w-10 pt-2 ${pa_info.team_left_side === 'CT' ? 'text-[#1c88f2]' : 'text-[#f3a124]'}`}>{pa_info.team_left_players}</div>
                        <div className='text-[30px] w-10 pt-3'>vs</div>
                        <div className={`text-[40px] font-bold w-10 pt-2 ${pa_info.team_right_side === 'CT' ? 'text-[#1c88f2]' : 'text-[#f3a124]'}`}>{pa_info.team_right_players}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return
    }
}