import React from 'react'
import { Player } from './Player'

export function PlayersList(allPlayersList) {
    
    if (Object.keys(allPlayersList).length === 0) return;

    return (
        <div id="sidewall" className='mt-[500px]'>
            {allPlayersList[0] !== undefined ? <Player {...allPlayersList[0]} /> : null}
            {allPlayersList[1] !== undefined ? <Player {...allPlayersList[1]} /> : null}
            {allPlayersList[2] !== undefined ? <Player {...allPlayersList[2]} /> : null}
            {allPlayersList[3] !== undefined ? <Player {...allPlayersList[3]} /> : null}
            {allPlayersList[4] !== undefined ? <Player {...allPlayersList[4]} /> : null}
            {allPlayersList[5] !== undefined ? <Player {...allPlayersList[5]} /> : null}
            {allPlayersList[6] !== undefined ? <Player {...allPlayersList[6]} /> : null}
            {allPlayersList[7] !== undefined ? <Player {...allPlayersList[7]} /> : null}
            {allPlayersList[8] !== undefined ? <Player {...allPlayersList[8]} /> : null}
            {allPlayersList[9] !== undefined ? <Player {...allPlayersList[9]} /> : null}
        </div>
    )
}