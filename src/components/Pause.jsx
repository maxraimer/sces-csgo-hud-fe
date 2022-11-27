import { React, useState, useEffect } from 'react'

const { io } = require('socket.io-client')
const socket = io('http://176.108.2.93:3000/');

export function Pause() {

    const [pause, setPause] = useState();

    useEffect(() => {
        socket.on('timeout', (data) => {
            let jsondata = JSON.parse(data);

            setPause(jsondata);
        })
    }, [])

    if (pause !== undefined && pause !== null && pause !== '') {
        if (pause.team_side === 'CT' || pause.team_side === 'T') {
            return (
                <div className='absolute w-full h-full top-0 overflow-hidden'>
                    <div id='pause_tab' className='absolute top-5 right-0 bg-[rgba(0,0,0,0.8)] w-64 h-[70px] px-4 py-2 text-white'>
                        <div className='flex'>
                            <img src={pause.team_side === 'CT' ? 'ct.png' : 't.png'} alt="admin" className='h-[52px]'/>
                            <div className='ml-4'>
                                <div className='font-bold text-[20px]'>{pause.team_name}</div>
                                <div>Tactical timeout ({pause.timeouts_total - pause.timeouts_remaining}/{pause.timeouts_total})</div>
                            </div> 
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='absolute w-full h-full top-0 overflow-hidden'>
                    <div id='pause_tab' className='absolute top-5 right-0 bg-[rgba(0,0,0,0.8)] w-64 h-[70px] px-4 py-2 text-white'>
                        <div className='flex'>
                            <img src='a.png' alt="admin" className='h-[52px]'/>
                            <div className='ml-4'>
                                <div className='font-bold text-[20px]'>Admin</div>
                                <div>Technical pause</div>
                            </div> 
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return
    }  
}