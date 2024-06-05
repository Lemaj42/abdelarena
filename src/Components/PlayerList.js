import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector, useDispatch } from 'react-redux';
import LooseImage from "../assets/images/loose.gif";
import { resetGameLoose } from '../reducers/fightReducer';


const PlayerList = () => {
  const players = useSelector(state => state.fight.players);
  const dispatch = useDispatch();

  const allPlayersAreDead = players.every(player => player.pv === 0);

  const handleResetGame = () => {
    if (allPlayersAreDead) {
      dispatch(resetGameLoose());
    }
  };

  const displayPlayers = () => {
    return players.map((player) => (
      <PlayerCard key={player.id} player={player} />
    ));
  };

  return (
    <div className='row'>
      {allPlayersAreDead ? (
        <div className="text-center">
          <img className="img-fluid" src={LooseImage} alt='monster' />
          <h2 className="mt-3">Vous avez perdu</h2>
          <button className="btn btn-primary mt-3" onClick={handleResetGame}>Recommencer</button>
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