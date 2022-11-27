import React from 'react'
import { Svgs } from './Svgs'
import { TabPlayer } from './Tab_player'
import { TabRounds } from './Tab_rounds'

export function Tab(tab_info) {

    if (Object.keys(tab_info).length === 0) return;

    return (
        <div className='absolute w-full h-full top-0 overflow-hidden'>
            <div id='tab' className='w-[118rem] h-auto mb-4 absolute bottom-0 left-1/2 -translate-x-1/2' >
                <div className='grid grid-cols-7 gap-2'>
                    <div className='col-span-2'>
                        <div className={`flex h-16 bg-[rgba(0,0,0,0.8)] border-l-4 ${tab_info.teams[0].team_side === 'CT' ? 'border-[#1c88f2]' : 'border-[#f3a124]'} border-b-2`}>
                            <img src={tab_info.teams[0].team_side === 'CT' ? 'ct.png' : 't.png'} alt="ct" className='h-12 m-2'/>
                            <div className='text-white w-48 text-[22px] ml-2 my-4'>Team A</div>

                            <div className='text-white w-12 h-full mr-1 py-5 text-center'>ADR</div>
                            <div className='text-white w-12 h-full mr-1 py-5 text-center'><Svgs type='headshot' css='fill-white h-6 px-3' /></div>
                            <div className='text-white w-12 h-full mr-1 py-5 text-center'>K/D</div>
                            <div className='text-white w-9 h-full py-5 text-center'>K</div>
                            <div className='text-white w-9 h-full py-5 text-center'>D</div>
                            <div className='text-white w-9 h-full py-5 text-center'>A</div>
                        </div>
                        <div className={`bg-[rgba(0,0,0,0.8)] border-l-4 divide-y-2 ${tab_info.teams[0].team_side === 'CT' ? 'border-[#1c88f2] divide-[#1c88f2]' : 'border-[#f3a124] divide-[#f3a124]'}`}>
                            {tab_info.teams[0].players.map((player) => <TabPlayer key={player.observer_slot} {...player}/>)}
                        </div>
                    </div>

                    <div className={`w-full h-[304px] bg-[rgba(0,0,0,0.8)] mb-0 border-l-4 border-r-4 ${tab_info.teams[0].team_side === 'CT' ? 'border-l-[#1c88f2] border-r-[#f3a124]' : 'border-r-[#1c88f2] border-l-[#f3a124]'} col-span-3 p-1 grid grid-cols-6 grid-rows-5 gap-x-2 gap-y-1`}>
                        {tab_info.round_history.map((round) => <TabRounds key={round.round} {...round}/>)}

                        <div className='absolute w-[2px] h-14 bg-white left-[50%] translate-x-[-50%] top-[122px]'></div>
                    </div>

                    <div className='col-span-2'>
                        <div className={`flex justify-end h-16 bg-[rgba(0,0,0,0.8)] border-r-4 ${tab_info.teams[1].team_side === 'CT' ? 'border-[#1c88f2]' : 'border-[#f3a124]'} border-b-2 col-end-4`}>
                            <div className='text-white w-9 h-full py-5 text-center'>K</div>
                            <div className='text-white w-9 h-full py-5 text-center'>D</div>
                            <div className='text-white w-9 h-full py-5 text-center'>A</div>
                        <div className='text-white w-12 h-full ml-1 py-5 text-center'>ADR</div>
                            <div className='text-white w-12 h-full ml-1 py-5 text-center'><Svgs type='headshot' css='fill-white h-6 px-3' /></div>
                            <div className='text-white w-12 h-full ml-1 py-5 text-center'>K/D</div>

                            <div className='text-white w-48 text-[22px] mr-2 my-4 text-right'>Team B</div>
                            <img src={tab_info.teams[1].team_side === 'CT' ? 'ct.png' : 't.png'} alt="t" className='h-12 m-2'/>
                        </div>
                        <div className={`bg-[rgba(0,0,0,0.8)] border-r-4 divide-y-2 ${tab_info.teams[1].team_side === 'CT' ? 'border-[#1c88f2] divide-[#1c88f2]' : 'border-[#f3a124] divide-[#f3a124]'}`}>
                            {tab_info.teams[1].players.map((player) => <TabPlayer key={player.observer_slot} {...player}/>)}
                        </div>
                    </div>
                </div>

                {/* <div className='grid grid-cols-3 gap-2'></div> */}
            </div>
        </div>
    )
}