import { createSlice } from '@reduxjs/toolkit'
import Player1 from "../assets/images/players/Player1.gif";
import Player2 from "../assets/images/players/Player2.gif";
import Player3 from "../assets/images/players/Player3.gif";
import Player4 from "../assets/images/players/Player4.gif";
import { tab } from '@testing-library/user-event/dist/tab';


const initialState = {
    players: [
        { name: "Einstein", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player1, id: 0 },
        { name: "Hawking", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player2, id: 1 },
        { name: "Darwin", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player3, id: 2 },
        { name: "Tesla", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player4, id: 3 }
    ],

    isPlayerAttacking: [],

    monster: { pv: 150, pvMax: 800 }
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const damage = action.payload;
            if (state.monster.pv < 0) {
                state.monster.pv = 0;
            }

            if (state.monster.pv === 0) {
            } else {
                state.monster.pv -= damage;
            }
        },
        spellPlayer: (state, action) => {
            const poison = action.payload;
            if (state.monster.pv < 0) {
                state.monster.pv = 0;
            }


        },
        hitback: (state, action) => {
            let tableauId = [];

            let nbPlayersAlive = 0;
            state.players.map((player) => {
                if (player.pv > 0) {
                    tableauId.push(player.id);
                    nbPlayersAlive++;
                }
            });
            const nbId = Math.floor(Math.random() * nbPlayersAlive);
            const id = tableauId[nbId];
            const damage = action.payload;
            if (state.players[id].pv < 0) {
                state.players[id].pv = 0;
            }

            if (state.players[id].pv === 0) {
            } else {
                state.players[id].pv -= damage;
            }
        },
        getMana: (state, action) => {
            const id = action.payload.id;
            state.players[id].mana -= action.payload.mana;
        },
        // getManaMonster: (state, action) => {
        //     state.monster.mana -= action.payload;
        // },
        addIdIsPlayerAttacking: (state, action) => {
            state.isPlayerAttacking.push(action.payload);
        },
        heal: (state, action) => {
            const { playerId, healthRestored, manacost } = action.payload;
            const player = state.players[playerId];
            if (player.mana >= manacost) {
                player.pv += healthRestored;
                player.mana -= manacost;
            }
        },
        removetour: (state) => {
            state.isPlayerAttacking = [];
        },
        resetGameLoose: (state) => {
            state.players = initialState.players.map(player => ({
                ...player,
                pv: player.pvMax,
                mana: player.manaMax,
            }));
            state.monster = { ...initialState.monster };
        },
        resetGameWin: (state) => {
            state.players = initialState.players.map(player => ({
                ...player,
                pv: player.pvMax,
                mana: player.manaMax,
            }));
            state.monster = { ...initialState.monster };
        },
        spellPlayer: (state, action) => {
            const { playerId } = action.payload;
            const player = state.players[playerId];

            // 30% de réduction des PV du monstre
            const damage = state.monster.pv * 0.3;
            state.monster.pv -= damage;
            if (state.monster.pv < 0) {
                state.monster.pv = 0;
            }

            // 50% de réduction de la mana du joueur
            player.mana *= 0.5;
            if (player.mana < 0) {
                player.mana = 0;
            }
        },
    }
});

export const { hitMonster, hitback, getMana, getManaMonster, addIdIsPlayerAttacking, heal, removetour, resetGameLoose, resetGameWin, spellPlayer } = fightSlice.actions
export default fightSlice.reducer
