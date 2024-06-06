import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import imgLoose from '../assets/images/loose.gif';

const PlayerList = () => {
    const players = useSelector(state => state.fight.players);
    const allPlayersAreDead = players.every(player => player.pv === 0);
    const displayPlayers = () => {
        return players.map((player) => (
            <PlayerCard key={player.id} player={player} />
        ));
    };

    return (
        <div className='row'>
            {allPlayersAreDead ? (
                <div className="text-center">
                    <>
                        <img className="img-fluid" src={imgLoose} alt='monster' />
                        <form action="">
                            <h2 className="mt-3">Vous avez perdu</h2>
                            <button className="button1 margin-top">Recommencer</button>
                        </form>
                    </>
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