import React from 'react'
import { Svgs } from './Svgs'
import $ from 'jquery'

export function SpectatedPlayer(spec_info) {
    
    if (Object.keys(spec_info).length === 0) return;

    if (spec_info[0] !== 'freecam') {
        $('#spectator-tab').show();

        let coords = [23.15, 17.65, 12.15, 6.65, 1.15];
    
        return (
            <div id='spectator-tab'>
                <div className='absolute bottom-5 ml-[50%] translate-x-[-250px]'>

                    <div className='flex justify-end'>
                        <Svgs type='kill' css={`h-8 p-1 m-1 fill-white ${spec_info.kills_per_round !== 5 ? 'hidden' : null}`}/>
                        <Svgs type='kill' css={`h-8 p-1 m-1 fill-white ${spec_info.kills_per_round !== 4 ? 'hidden' : null}`}/>
                        <Svgs type='kill' css={`h-8 p-1 m-1 fill-white ${spec_info.kills_per_round !== 3 ? 'hidden' : null}`}/>
                        <Svgs type='kill' css={`h-8 p-1 m-1 fill-white ${spec_info.kills_per_round !== 2 ? 'hidden' : null}`}/>
                        <Svgs type='kill' css={`h-8 p-1 m-1 fill-white ${spec_info.kills_per_round !== 1 ? 'hidden' : null}`}/>
                    </div>

                    <div className='w-[500px] h-14 bg-[rgba(0,0,0,0.8)] py-2 px-2'>
                        <img src="silh.png" alt="" className='absolute w-48 bottom-14' />
                        {/* <iframe src='https://vdo.ninja/?view=Tnyf4tj&autoplay&autostart' allow="autoplay;camera" className='absolute w-48 h-48 bottom-14 -ml-2'></iframe> */}
                        <div className='ml-52 mt-0.5 text-white text-[26px] font-bold'>{spec_info.name}</div>
                    </div>

                    <div className={`flex w-[500px] h-14 ${spec_info.team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} py-2 px-3`}>
                        <div className='absolute'>
                            <Svgs type='health' css='fill-white opacity-50 h-7 mt-1.5'/>
                        </div>
                        <div id='health' className='absolute ml-10 text-[20px] text-white font-bold mt-1'>{spec_info.hp}</div>

                        <div className='absolute ml-24'>
                            <Svgs type={`armor-${spec_info.armor_type}`} css='fill-white opacity-50 h-8 mt-1'/>
                        </div>
                        <div id='armor' className='absolute ml-32 text-[20px] text-white font-bold mt-1'>{spec_info.armor}</div>

                        <div className='absolute ml-48'>
                            <Svgs type='ammo' css='fill-white opacity-50 h-8 mt-1'/>
                        </div>
                        <div id='ammo' className='absolute ml-56 text-[20px] text-white font-bold mt-1'>{spec_info.ammo_clip}/{spec_info.ammo_reserve}</div>

                        <div className='text-white font-bold text-center w-12 h-14 bg-[rgba(0,0,0,0.3)] -mt-2 py-1.5 ml-80'>
                            <div>K</div>
                            <div>{spec_info.kills}</div>
                        </div>

                        <div className='text-white font-bold text-center w-12 h-14 bg-[rgba(0,0,0,0.3)] -mt-2 py-1.5 ml-2'>
                            <div>A</div>
                            <div>{spec_info.assists}</div>
                        </div>

                        <div className='text-white font-bold text-center w-12 h-14 bg-[rgba(0,0,0,0.3)] -mt-2 py-1.5 ml-2'>
                            <div>D</div>
                            <div>{spec_info.deaths}</div>
                        </div>
                    </div>

                </div>
                <div className={`absolute h-[5.1rem] w-4 ${spec_info.team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${spec_info.team_index === 0 ? 'left-[0rem]' : 'left-[119rem]'}`} style={{bottom: coords[spec_info.team_slot] + 'rem'}}></div>
            </div>
        )
    } else {
        $('#spectator-tab').hide();
        return (<div></div>)
    }
}