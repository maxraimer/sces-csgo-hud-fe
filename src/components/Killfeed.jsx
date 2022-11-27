import { React, useEffect, useState } from 'react'
import { Kill } from './Kill'

const { io } = require('socket.io-client')
const socket = io('http://176.108.2.93:3000/');

export function Killfeed() {

    let new_kill_entry = [];

    const [kills, setKills] = useState([])


    useEffect(() => {
        socket.on('get_new_kill', (kill) => {
            let jsonkill = JSON.parse(kill);
            
            let killIsAlreadyExist = false;

            for (let i = 0; i < new_kill_entry.length; i++) {
                if (jsonkill === new_kill_entry[i]) {
                    killIsAlreadyExist = true;
                }
            }
            
            if (killIsAlreadyExist === false) {
                new_kill_entry.push(jsonkill);
            }

            setKills(new_kill_entry);
        });    
    }, [])

    return (
        <div id='killfeed' className='absolute scale-90 right-1 top-20 h-[350px]'>
            {kills.map((kill) => <Kill key={kill.uuid} {...kill}/>)}
        </div>
    )
}