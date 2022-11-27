import {React, useEffect, useState} from 'react'
import { Tab } from '../components/Tab'

const { io } = require('socket.io-client')
const socket = io('http://***.***.***.***:3000/');

export function TabPage() {
    const [tab, setTab] = useState();
  
    useEffect(() => {
        socket.on('get_global_update', (data) => {
  
            let jsondata = JSON.parse(data);

            let new_tabSet = {
                round_history: jsondata.map_data.round_history,
                teams: jsondata.teams
            }

            setTab(new_tabSet);
        });
    }, []);

    return (
        <Tab {...tab}/>
    )
}
