import React from 'react'

export function TabPlayer(props) {

    if (props.team_index === 1) {
        return (
            <div className='flex w-full h-12 justify-end'>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.kills}</div>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.deaths}</div>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.assists}</div>
                <div className='text-white w-12 h-full ml-1 py-3 text-center'>{props.map_stats.adr}</div>
                <div className='text-white w-12 h-full ml-1 py-3 text-center'>{props.map_stats.hsp}%</div>
                <div className='text-white w-12 h-full ml-1 py-3 text-center'>{props.map_stats.kdr}</div>
                <div className='w-[16.5rem] text-right text-white px-4 py-2.5 text-[18px]'>{props.name}</div>
            </div>
        )
    } else {
        return (
            <div className='flex w-full h-12'>
                <div className='w-[16.5rem] text-white px-4 py-2.5 text-[18px]'>{props.name}</div>
                <div className='text-white w-12 h-full mr-1 py-3 text-center'>{props.map_stats.adr}</div>
                <div className='text-white w-12 h-full mr-1 py-3 text-center'>{props.map_stats.hsp}%</div>
                <div className='text-white w-12 h-full mr-1 py-3 text-center'>{props.map_stats.kdr}</div>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.kills}</div>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.deaths}</div>
                <div className='text-white w-9 h-full py-3 text-center'>{props.map_stats.assists}</div>
            </div>
        )
    }

    
}