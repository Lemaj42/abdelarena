import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';

const Monster = () => {
  const monster = useSelector(state => state.fight.monster);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="row">
                  <div className="col-sm-2 offset-sm-3">
                    <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                    {monster.pv > 0 ? (
                      <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                    ) : (
                      <><h1>
                        Vous avez gagné
                      </h1>
                        <img className="img-fluid" src="https://i0.wp.com/centres-dinteret-jeux-video.com/wp-content/uploads/2020/08/Victory.png?w=476&ssl=1" alt='monster dead' /></>
                    )}
                  </div>
                  <div id="comboOnMonster" className="col-sm-6"></div>
                </div>
              </div>
              <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Monster;
