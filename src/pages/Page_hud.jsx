import { React, useState, useEffect } from 'react';
import $ from 'jquery'

import { Scoreboard} from '../components/Scoreboard';

import { BombTimer, hideBombTimer, showBombTimer } from '../components/TimerBomb';
import { DefuseTimer, hideDefuseTimer, showDefuseTimer } from '../components/TimerDefuse';

import { PlayersAlive } from '../components/PlayersAlive';
import { Pause } from '../components/Pause';

import { Killfeed } from '../components/Killfeed';

import { PlayersList } from '../components/PlayersList';
import { TeamEconomy } from '../components/TeamEconomy'

import { BombDefusing } from '../components/BombDefusing';
import { BombPlanting, playAnimationPlantingBomb } from '../components/BombPlanting';

import { SpectatedPlayer } from '../components/SpectatedPlayer';

const { io } = require('socket.io-client')
const socket = io('http://***.***.***.***:3000/', {
  auth: {token: 'test123'}
});


export function HudPage() {

  const [scoreboard, setScoreboard] = useState();

  const [spectatedPlayer, setSpectatedPlayer] = useState()

  const [playersAlive, setPlayersAlive] = useState();

  const [players, setPlayers] = useState();

  const [leftEconomy, setLeftEconomy] = useState();

  const [rightEconomy, setRightEconomy] = useState();

  const [defuseTimer, setDefuseTimer] = useState();

  // showBombTimer();

  useEffect(() => {
    socket.on('get_global_update', (data) => {

      let jsondata = JSON.parse(data);

      // console.log(jsondata);

      let new_score = {team_left: {name: jsondata.teams[0].name,side: jsondata.teams[0].team_side,score: jsondata.teams[0].score,series: jsondata.teams[0].match_score},team_right: {name: jsondata.teams[1].name,side: jsondata.teams[1].team_side,score: jsondata.teams[1].score,series: jsondata.teams[1].match_score},match: {round: jsondata.map_info.round,win_series: jsondata.map_info.format,countdown: jsondata.map_data.round_info.countdown}}

      let new_spectatedPlayer;

      if (jsondata.spectated_player !== 'freecam') {new_spectatedPlayer = {name: jsondata.spectated_player.name,team: jsondata.spectated_player.team,hp: jsondata.spectated_player.state.health,armor: jsondata.spectated_player.state.armor,armor_type: jsondata.spectated_player.state.armor_type,ammo_clip: jsondata.spectated_player.loadout.active.ammo_clip,ammo_reserve: jsondata.spectated_player.loadout.active.ammo_reserve,kills: jsondata.spectated_player.map_stats.kills,assists: jsondata.spectated_player.map_stats.assists,deaths: jsondata.spectated_player.map_stats.deaths,kills_per_round: jsondata.spectated_player.round_stats.kills,obs_slot: jsondata.spectated_player.observer_slot,team_index: jsondata.spectated_player.team_index,team_slot: jsondata.spectated_player.team_slot,}} else {new_spectatedPlayer = ['freecam']}

      let new_playersAlive = {team_left_side: jsondata.teams[0].team_side,team_right_side: jsondata.teams[1].team_side,team_left_players: jsondata.teams[0].players_alive,team_right_players: jsondata.teams[1].players_alive}

      let new_allPlayers = jsondata.all_players;

      let new_leftEconomy = {team_side: jsondata.teams[0].team_side,team_index: 0,total_balance: jsondata.teams[0].total_balance,equipment: jsondata.teams[0].equip_value,utility: jsondata.teams[0].grenades_evaluation,grenades_count: jsondata.teams[0].grenades_count}

      let new_rightEconomy = {team_side: jsondata.teams[1].team_side,team_index: 1,total_balance: jsondata.teams[1].total_balance,equipment: jsondata.teams[1].equip_value,utility: jsondata.teams[1].grenades_evaluation,grenades_count: jsondata.teams[1].grenades_count}

      let new_defuseTimer = {countdown: Number(jsondata.bomb.countdown)};

      setScoreboard(new_score);
      setSpectatedPlayer(new_spectatedPlayer);
      setPlayersAlive(new_playersAlive);
      setPlayers(new_allPlayers);
      setLeftEconomy(new_leftEconomy);
      setRightEconomy(new_rightEconomy);
      setDefuseTimer(new_defuseTimer);














      switch (jsondata.map_data.round_info.phase) {
        case 'freezetime':
          $('#players-alive').hide();
          $('#economy-0, #economy-1, #player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').show();
          break;
        case 'live':
          $('#players-alive').show();
          $('#economy-0, #economy-1, #player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').hide();
        break;
        case 'over':
          $('#players-alive').show();
          $('#economy-0, #economy-1, #player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').hide();
        break;  
        default:
          break;
      }

      if (jsondata.map_info.status === 'intermission') {
        $('#players-alive').hide();
        $('#economy-0, #economy-1, #player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').hide();
      }
    });
  }, []);

  useEffect(() => {
    socket.on('round_phase_changed', (round_phase) => {
      round_phase = JSON.parse(round_phase);
      
      if (round_phase.state === 'live') {
        setTimeout(() => {
          $('#economy-0, #economy-1, #player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').animate({
              width: '0px'
          }, 400);
        }, 3000);
        
        $('#players-alive').animate({
          right: '16px'
        }, 400)
      } else if (round_phase.state === 'freezetime') {
        $('#economy-0, #economy-1').animate({
          width: '480px'
        }, 400);

        $('#player_kda_1, #player_kda_2, #player_kda_3, #player_kda_4, #player_kda_5, #player_kda_6, #player_kda_7, #player_kda_8, #player_kda_9, #player_kda_0').animate({
          width: '130px'
        })

        $('#players-alive').animate({
          right: '-300px'
        })
      } else if (round_phase.state === 'over') {
        hideBombTimer();
        hideDefuseTimer();
      }
    })
  }, []);

  useEffect(() => {
    socket.on('round_secondary_phase_changed', (round_phase) => {
      round_phase = JSON.parse(round_phase);
      
      if (round_phase.state === 'paused' || round_phase.state === 'timeout_ct' || round_phase.state === 'timeout_t') {
        $('#pause_tab').animate({
            right: '16px'
        }, 300);
      } else {
        $('#pause_tab').animate({
          right: '-260px'
      }, 300);
      }
    })
  }, []);

  useEffect(() => {
    socket.on('bomb_state_changed', (data) => {
      let jsondata = JSON.parse(data);
      console.log(jsondata);
      
      switch (jsondata.state) {
        case 'planting':
          playAnimationPlantingBomb();
          break;
        case 'planted':
          showBombTimer();
          break;
        case 'defusing':
          showDefuseTimer();
          break;
        default:
          break;
      }
    })
  }, [])































































  return (
    <>
      <Scoreboard {...scoreboard}/>
      <DefuseTimer {...defuseTimer}/>
      <BombTimer/>

      <SpectatedPlayer {...spectatedPlayer}/>
      <BombDefusing/>
      <BombPlanting/>

      <PlayersList {...players}/>
      <TeamEconomy {...leftEconomy}/>
      <TeamEconomy {...rightEconomy}/>

      <Killfeed/>

      <Pause/>
      <PlayersAlive {...playersAlive}/>
    </>
  );
}


//animate bomb timer scoreboard
//animate defuse timer scoreboard
//animate planting timer
//animate defusing timer
