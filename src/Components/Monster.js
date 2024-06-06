import React from "react";
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import MonsterImage from "../assets/images/Monsters/Monster.gif";
import imgVictory from "../assets/images/Victory.jpg";


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
                  <div>
                    <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                    {monster.pv > 0 ? (
                      <img className="img-fluid" src={MonsterImage} alt='monster' />
                    ) : (
                      <>
                        <h1>Vous avez gagné</h1>
                        <img className="img-fluid" src={imgVictory} alt='victory' />
                        <form action="">

                          <button className="button1">Recommencer</button>
                        </form>
                      </>
                    )}
                  </div>
                  <div id="comboOnMonster" className="col-sm-6"></div>
                </div>
              </div>
              {monster.pv > 0 && (
                <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
              )}
              {/* <ProgressBar pv={monster.mana} pvMax={monster.manaMax} faType='fa-fire-alt' barName=' : mana ' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Monster;
