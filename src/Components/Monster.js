import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import MonsterImage from "../assets/images/Monster.gif";
import VicotyImage from "../assets/images/Victory.jpg";

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
                      <img className="img-fluid" src={MonsterImage} alt='monster' />
                    ) : (
                      <>
                        <h1>Vous avez gagné</h1>
                        <img className="img-fluid" src={VicotyImage} alt='monster' />
                      </>
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

