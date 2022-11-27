import React from 'react'
import { Svgs } from './Svgs'
import $ from 'jquery'

export function Kill(props) {

    setTimeout(() => {
        $(`#kill_${props.uuid}`).fadeOut(1000);
    }, 5000);

    setTimeout(() => {
        $(`#kill_${props.uuid}`).remove();
    }, 6000);

    return (
        <div id={`kill_${props.uuid}`} className='flex mb-1 justify-end'>
            {props.killer_name !== props.victim_name ? <div className='flex'><div id='killer' className={`flex ${props.killer_team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} py-1 pl-3 pr-4 font-extrabold text-white`}>{props.modifiers.blinded === true ? <Svgs type='blind' css='h-[18px] w-auto fill-white mt-0.5 mr-2'/> : null}{props.killer_name}</div><div className={`${props.killer_team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} w-[22.6px] h-[22.6px] mt-[4.3px] ml-[-11.2px] rotate-45`}></div></div> : null}
            <div className='flex'>
                <div id='killed_by' className={`${props.killer_team === 'CT' ? 'bg-[#145fa9]' : 'bg-[#aa7019]'} flex py-1 ml-[-11px] pl-5 pr-1 font-extrabold text-white`}>
                    <Svgs type={props.weapon} css='h-[18px] w-auto fill-white mt-0.5' />
                    {props.modifiers.noscope === true ? <Svgs type='noscope' css='h-[18px] w-auto fill-white mt-0.5 ml-1'/> : null}
                    {props.modifiers.throughsmoke === true ? <Svgs type='smoke' css='h-[18px] w-auto fill-white mt-0.5 ml-1'/> : null}
                    {props.modifiers.wallbang === true ? <Svgs type='wallbang' css='h-[18px] w-auto fill-white mt-0.5 ml-1'/> : null}
                    {props.modifiers.headshot === true ? <Svgs type='headshot' css='h-[18px] w-auto fill-white mt-0.5 ml-1'/> : null}
                    
                </div>
                <div className={`${props.killer_team === 'CT' ? 'bg-[#145fa9]' : 'bg-[#aa7019]'} w-[22.6px] h-[22.6px] mt-[4.3px] ml-[-11.2px] rotate-45 -z-10`}></div>
            </div>
            <div className='flex -z-20'><div id='victim' className={`${props.victim_team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} py-1 ml-[-10px] pl-6 pr-4 font-extrabold text-white`}>{props.victim_name}</div><div className={`${props.victim_team === 'CT' ? 'bg-[#1c88f2]' : 'bg-[#f3a124]'} w-[22.6px] h-[22.6px] mt-[4.3px] ml-[-11.2px] rotate-45`}></div></div>
        </div>
    )
}
