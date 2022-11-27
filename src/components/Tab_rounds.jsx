import React from 'react'
import { Svgs } from './Svgs'

export function TabRounds(props) {

    return (
        <div className={`flex h-14 border-solid border-2 ${props.team_side === 'CT' ? 'border-[#1c88f2]' : 'border-[#f3a124]'}`}>
            <div className={`w-8 h-13 py-3.5 text-white text-center font-extrabold border-r-solid border-r-2 ${props.team_side === 'CT' ? 'border-r-[#1c88f2]' : 'border-r-[#f3a124]'} opacity-80`}>{props.round}</div>

            <div className='grid grid-rows-5 gap-1 m-0.5 ml-1'>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[0] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[0] < 5 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[0] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[0] < 4 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[0] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[0] < 3 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[0] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[0] < 2 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[0] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[0] < 1 ? 'opacity-30' : null}`}></div>
            </div>

            <div className='w-10 p-1 my-2'><img src={props.team_side === 'CT' ? 'ct.png' : 't.png'} alt="ct" /></div>
            <div className='w-10 p-1 my-2.5'><Svgs type={props.win_condition} css='h-6 fill-white opacity-80'/></div>

            <div className='grid grid-rows-5 gap-1 m-0.5 ml-1'>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[1] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[1] < 5 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[1] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[1] < 4 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[1] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[1] < 3 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[1] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[1] < 2 ? 'opacity-30' : null}`}></div>
                <div className={`w-1.5 h-1.5 ${props.teams_sides[1] === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${props.players_alive[1] < 1 ? 'opacity-30' : null}`}></div>
            </div>
        </div>
    )

    
}