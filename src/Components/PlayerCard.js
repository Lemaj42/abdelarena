import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { ButtonCapacity } from './ButtonCapacity';
import { useSelector } from 'react-redux';

const PlayerCard = ({ player }) => {
    const state = useSelector(state => state.fight);
    const [selectedCapacity, setSelectedCapacity] = useState();
    let nbPlayersAlive = 0;
    let displayStyle = 1;

    // Compter le nombre de joueurs vivants
    state.players.forEach((player) => {
        if (player.pv > 0) {
            nbPlayersAlive++;
        }
    });

    // Définir le style d'affichage en fonction de l'état de l'attaque
    state.isPlayerAttacking.forEach((playerid) => {
        if (playerid === player.id) {
            displayStyle = 0;
        }
    });
    if (state.isPlayerAttacking.length >= nbPlayersAlive) {
        displayStyle = 1;
    }

    // Vérifier les PV du monstre
    if (state.monster.pv <= 0) {
        return null; // Ne pas afficher les cartes des joueurs si les PV du monstre sont à zéro
    }

    const handleCapacityChange = (capacityType) => {
        setSelectedCapacity(capacityType);
    };

    return (
        <div key={player.id} className="card col-lg-3 col-md-4 col-sm-12 card center" id={`joueur${player.id}`}>
            {player.pv > 0 ? (
                <div className={`card card-${player.name}`}>
                    <div className="card-body text-center">
                        <img src={player.img} alt={`${player.name}'s avatar`} style={{ height: '150px', width: 'auto', marginBottom: '15px' }} />
                        <h5 className={`card-title font-weight-bold mb-2 nom-card nom-${player.name}`}>{player.name}</h5>
                        <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                        <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                        <span className="badge badge-danger ml-2" id="degatSpanJ1"></span>
                    </div>
                    <div className="container text-center">
                        <div className="row justify-content-center" style={{ opacity: displayStyle, margin: '0' }}>
                            <div className='col-4 btn1'>
                                <ButtonCapacity
                                    name='Punch'
                                    capacityType='combat'
                                    player={player}
                                    checked={selectedCapacity === 'combat'}
                                    onChange={handleCapacityChange}
                                />
                            </div>
                            <div className='col-4'>
                                <ButtonCapacity
                                    name='Heal'
                                    capacityType='deffence'
                                    player={player}
                                    checked={selectedCapacity === 'deffence'}
                                    onChange={handleCapacityChange}
                                />
                            </div>
                            <div className='col-4'>
                                <ButtonCapacity
                                    name='Sort'
                                    capacityType='magie'
                                    player={player}
                                    checked={selectedCapacity === 'magie'}
                                    onChange={handleCapacityChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card-body text-center cardDeath">
                    <h5 className="card-title">{player.name} est mort</h5>
                    <img src={player.img} alt={`${player.name}'s avatar`} className="card-img-top" style={{ height: '200px', width: 'auto', marginBottom: '15px' }} />
                </div>
            )}
        </div>
    );
}

export default PlayerCard;
