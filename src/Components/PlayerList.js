import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';


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
          <img className="img-fluid" src="file:///home/garage404/Exo/abdelarena/nul.webp" alt='nul' />
          <h2 className="mt-3">Vous avez perdu</h2>
        </div>
      ) : (
        displayPlayers()
      )}
    </div>
  );
}

export default PlayerList;
