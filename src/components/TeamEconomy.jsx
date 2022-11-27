import React from 'react'
import { Svgs } from './Svgs'

export function TeamEconomy(economy_info) {

    if (Object.keys(economy_info).length !== 0) {

        let utilityColor;

        switch (economy_info.utility) {
            case 'Poor':
                utilityColor = '#BC0022'
                break;
            case 'Low':
                utilityColor = '#FF0000'
                break;
            case 'OK':
                utilityColor = '#FFF851'
                break;
            case 'Fine':
                utilityColor = '#116315'
                break;
            case 'Good':
                utilityColor = '#41B619'
                break;
            default:
                break;
        }


        return (
            <div id={`economy-${economy_info.team_index}`} className={`absolute ${economy_info.team_side === 'T' ? 'bg-[#f3a124]' : 'bg-[#1c88f2]'} ${economy_info.team_index === 0 ? 'left-4' : 'right-4'} bottom-[28.75rem] w-[30rem] h-20 py-1 text-white overflow-hidden whitespace-nowrap`}>
                <div className={`flex ${economy_info.team_index === 1 ? 'flex-row-reverse text-right' : null} mx-3`}>
                    <div className='w-[11rem]'>
                        <div>Total balance</div>
                        <div className='text-[26px]'>${economy_info.total_balance}</div>
                    </div>

                    <div className='w-[9rem]'>
                        <div>Equipment</div>
                        <div className='text-[26px]'>${economy_info.equipment}</div>
                    </div>

                    <div className='w-[10rem]'>
                        <div className='mx-3'>Utility: <span className='font-bold' style={{color: utilityColor}}>{economy_info.utility}</span></div>
                        <div className='grid grid-rows-2 gap-0 w-full'>
                            <div className='grid grid-cols-4 '>
                                <Svgs type='flashbang' css='fill-white h-5 w-5 mx-2.5'/>
                                <Svgs type='hegrenade' css='fill-white h-5 w-5 mx-2.5'/>
                                <Svgs type='smokegrenade' css='fill-white h-5 w-5 mx-2.5'/>
                                {economy_info.team_side === 'CT' ? <Svgs type='incgrenade' css='fill-white h-5 w-5 mx-2.5'/> : <Svgs type='molotov' css='fill-white h-5 w-5 mx-2.5'/> }
                                
                            </div>

                            <div className='grid grid-cols-4 text-center'>
                                <div>{economy_info.grenades_count.flashbang}</div>
                                <div>{economy_info.grenades_count.he}</div>
                                <div>{economy_info.grenades_count.smoke}</div>
                                <div>{economy_info.grenades_count.molotov + economy_info.grenades_count.incendiary}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return
    }
}