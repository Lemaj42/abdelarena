import { createSlice } from '@reduxjs/toolkit'
import Player1 from "../assets/images/players/Player1.gif";
import Player2 from "../assets/images/players/Player2.gif";
import Player3 from "../assets/images/players/Player3.gif";
import Player4 from "../assets/images/players/Player4.gif";


const initialState = {
    players: [
        { name: "Einstein", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player1, id: 0 },
        { name: "Hawking", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player2, id: 1 },
        { name: "Darwin", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player3, id: 2 },
        { name: "Tesla", pv: 100, pvMax: 100, mana: 30, manaMax: 30, img: Player4, id: 3 }
    ],

    isPlayerAttacking: [],

    monster: { pv: 200, pvMax: 200, mana: 300, manaMax: 300 }
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const damage = action.payload
            if (state.monster.pv < 0) {
                state.monster.pv = 0;
            }

            if (state.monster.pv === 0) {
                console.log("le monstre est mort");
            }
            else {
                state.monster.pv -= damage;

            }
        },
        hitback: (state, action) => {
            const id = Math.floor(Math.random() * state.players.length)
            const damage = action.payload
            if (state.players[id].pv < 0) {
                state.players[id].pv = 0;
            }

            if (state.players[id].pv === 0) {
                console.log("le joueur est mort");
            } else {
                state.players[id].pv -= damage;
            }
        },
        getMana: (state, action) => {
            const id = action.payload.id
            state.players[id].mana -= action.payload.mana
        },
        getManaMonster: (state, action) => {
            console.log(action);
            state.monster.mana -= action.payload
        },
        addIdIsPlayerAttacking: (state, action) => {
            state.isPlayerAttacking.push(action.payload)
        }
    },
})

export const { hitMonster, hitback, getMana, getManaMonster, addIdIsPlayerAttacking } = fightSlice.actions
export default fightSlice.reducer
