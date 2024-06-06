import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import imgLoose from '../assets/images/loose.gif';

const PlayerList = () => {
    // Sélectionne les informations des joueurs depuis le store Redux
    const players = useSelector(state => state.fight.players);

    const displayPlayers = () => {
        return players.map((player) => {
            if (!player) {
                return null;
            }
            return <PlayerCard key={player.id} player={player} />;
        });
    };

    return (
        <div className='row'>
            {/* Vérifie si tous les joueurs ont des PV supérieurs à 0 */}
            {players.some(player => player.pv <= 0) ? (
                <div className="text-center">
                    <>
                        <img className="img-fluid" src={imgLoose} alt='defeat' />
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

