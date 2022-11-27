import React from 'react'
import { Svgs } from './Svgs';

export function Player(player_info) {

    let coords = [22.25, 16.75, 11.25, 5.75, 0.25];

    return (
        <div className={`absolute ${player_info.state.alive === true ? 'w-[350px]' : 'w-[200px]'} h-24 ${player_info.team_index === 0 ? 'left-4' : 'right-4'}`} style={{bottom: coords[player_info.team_slot] + 'rem'}}>

            <div className={`bg-[rgba(0,0,0,0.8)] h-10 flex ${player_info.team_index === 1 ? 'flex-row-reverse' : null}`}>
                
                <div className={`absolute h-5 w-5 mt-2.5 ${player_info.team_index === 0 ? 'ml-2.5' : 'mr-2.5'} rotate-45 border-solid border-white border-2`}>
                    <div className='text-white ml-1 -mt-0.5 font-medium -rotate-45 text-[12px]'>{player_info.observer_slot}</div>
                </div>
                
                <div className={`text-white pt-2 ${player_info.team_index === 0 ? 'ml-12' : 'mr-12 text-right'} w-40 font-medium text-[18px] truncate`}>{player_info.name}</div>

                {player_info.loadout.hasPrimary === true ? <Svgs type={player_info.loadout.primary.name.slice(7)} css={`absolute h-[20px] mt-[12px] fill-white ${player_info.team_index === 1 ? '-scale-x-100 left-2' : 'right-2'}`}/> : null}

            </div>

            <div className={`bg-black w-full h-8`}>
                <div className={`absolute text-white mt-1 font-medium  ${player_info.team_index === 0 ? 'left-2' : 'right-2'}`}>${player_info.state.money}</div>

                <div className={`absolute ${player_info.team_index === 0 ? 'left-20' : 'right-20'}`}>
                    <Svgs type='health' css='fill-white h-4 mt-2'/>
                    <div id='health' className={`absolute top-1 ${player_info.team_index === 0 ? 'left-5 ml-1' : 'right-5 mr-1'} text-white font-medium `}>{player_info.state.health}</div>
                </div>
                
                <div className={`absolute ${player_info.team_index === 0 ? 'left-36' : 'right-36'}`}>
                    <Svgs type={`armor-${player_info.state.armor_type}`} css='fill-white h-4 mt-2'/>
                </div>

                <div className={`absolute ${player_info.team_index === 0 ? 'left-40 ml-1' : 'right-40 mr-1'} `}>
                    {player_info.loadout.hasDefuseKit === true ? <Svgs type='defuser' css='fill-white h-4 mt-2'/> : null}
                    {player_info.loadout.hasC4 === true ? <Svgs type='c4' css='fill-white h-3 mt-2.5'/> : null}
                </div>

                {player_info.loadout.hasSecondary === true ? <Svgs type={player_info.loadout.secondary.name.slice(7)} css={`absolute h-[18px] mt-[7px] fill-white ${player_info.team_index === 1 ? '-scale-x-100 left-2' : 'right-2'}`}/> : null}

                <div className={`absolute ${player_info.team_index === 1 ? 'left-16' : 'right-16'}`}>
                    <div className={`flex h-8 py-2 ${player_info.team_index === 0 ? 'flex-row-reverse' : null}`}>
                        {player_info.loadout.grenades.flashbang === 1 ? <Svgs type='flashbang' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.flashbang === 2 ? <Svgs type='flashbang' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.he === 1 ? <Svgs type='hegrenade' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.incendiary === 1 ? <Svgs type='incgrenade' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.molotov === 1 ? <Svgs type='molotov' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.smoke === 1 ? <Svgs type='smokegrenade' css={`h-full fill-white mx-1`}/> : null}
                        {player_info.loadout.grenades.decoy === 1 ? <Svgs type='decoy' css={`h-full fill-white mx-1`}/> : null}
                    </div>
                </div>

            </div>

            <div className={`${player_info.team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${player_info.team_index === 1 ? 'float-right' : null} h-2.5`} style={{width: player_info.state.health + '%', background: player_info.state.health <= 20 ? 'red' : null}}></div>

            <div id={`player_kda_${player_info.observer_slot}`} className={`${player_info.team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} ${player_info.team_index === 0 ? 'left-[350px]' : 'right-[350px]'} absolute w-[130px] h-[82px] top-0 overflow-hidden`}>
                <div className='flex'>
                    <div className='text-white font-bold text-center w-12 h-[82px] bg-[rgba(0,0,0,0.3)] py-4'>
                        <div>K</div>
                        <div>{player_info.map_stats.kills}</div>
                    </div>

                    <div className='text-white font-bold text-center w-12 h-[82px] bg-[rgba(0,0,0,0.3)] py-4 ml-1'>
                        <div>A</div>
                        <div>{player_info.map_stats.assists}</div>
                    </div>

                    <div className='text-white font-bold text-center w-12 h-[82px] bg-[rgba(0,0,0,0.3)] py-4 ml-1'>
                        <div>D</div>
                        <div>{player_info.map_stats.deaths}</div>
                    </div>
                </div>
            </div>

            <div className={`${player_info.team_index === 0 ? 'left-[500px]' : 'right-[500px]'} absolute top-6 text-red-600 font-bold text-[20px] hidden`}>-$16000</div>
        </div>
    )
}