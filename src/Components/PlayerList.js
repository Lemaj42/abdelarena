import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import LooseImage from "../assets/images/loose.gif";


const PlayerList = () => {
  const players = useSelector(state => state.fight.players);

  const allPlayersAreDead = players.every(player => player.pv === 0);

  const displayPlayers = () => {
    return players.map((player, key) => (
      <PlayerCard key={player.id} player={player} />
    ));
  }

  return (
    <div className='row'>
      {allPlayersAreDead ? (
        <div className="text-center">
          <img className="img-fluid" src={LooseImage} alt='monster' />
          <h2 className="mt-3">Vous avez perdu</h2>
        </div>
      ) : (
        <div className='container'>
          <div className='row justify-content-center'>

            {displayPlayers()}
          </div>

        </div>
      )}
    </div>
  );
}

export default PlayerList;
