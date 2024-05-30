import React from 'react';
import ProgressBar from './ProgressBar';
import ButtonCapacity from "./ButtonCapacity";

const PlayerCard = ({ player }) => {
    return (
        <div key={player.id} className="col-sm-3 card center" id={`joueur${player.id}`}>
            {player.pv > 0 ? (
                <div class="container">
                    <section class="mx-auto my-5" style="max-width: 23rem;">
                        <div class="card">
                            <div class="card-body d-flex flex-row">
                                <h5 class="card-title font-weight-bold mb-2">{player.name}</h5>
                                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                            </div>
                            <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                                <img class="img-fluid" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDFnNGFudHZqcDkyMjI3ajhudHFzazljZWtha3d6cHdxMXB3ZWx0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IycI0rreFNQwmSQ/giphy.webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                <ButtonCapacity player={player} />
                                <ButtonCapacity player={player} />
                                <ButtonCapacity player={player} />
                                <ButtonCapacity player={player} />
                                <div class="d-flex justify-content-between">
                                    <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
                                        role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
                                    <div>
                                        <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                            data-mdb-placement="top" title="Share this post"></i>
                                        <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top"
                                            title="I like it"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            ) : (
                <div className="card-body text-center">
                    <h5 className="card-title">{player.name} est mort</h5>
                </div>
            )}
        </div>
    );
}

export default PlayerCard;