import React from 'react';
import ProgressBar from './ProgressBar';
import ButtonCapacity from "./ButtonCapacity";

const PlayerCard = ({ player }) => {
    return (
        <div key={player.id} className="Carte1 col-lg-2 col-md-4 col-sm-12 card center" id={`joueur${player.id}`}>
            {player.pv > 0 ? (
                <div className="card-body text-center">
                    <img src={player.img} alt={player.name} className="card-img-top" style={{ height: '150px', width: 'auto', marginBottom: '15px' }} />
                    <h5 class="card-title font-weight-bold mb-2">{player.name}</h5>
                    <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className='col-3' >
                                <ButtonCapacity player={player} />
                            </div>
                            <div className='col-3' >
                                <ButtonCapacity player={player} />
                            </div>
                            <div className='col-3' >
                                <ButtonCapacity player={player} />
                            </div>
                            <div className='col-3'>
                                <ButtonCapacity player={player} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card-body text-center">
                    <h5 className="card-title">{player.name} est mort</h5>
                </div>
            )
            }
        </div >
    );
}

export default PlayerCard;
