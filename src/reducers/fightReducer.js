import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 0 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 }
    ],
    monster: { pv: 200, pvMax: 800 }
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
                return console.log("le monstre est mort");
            }
            else (
                state.monster.pv -= damage
            )
        },
        hitback: (state, action) => {
            const id = Math.floor(Math.random() * 4)
            const damage = action.payload
            if (state.players[id].pv < 0) {
                state.players[id].pv = 0;
            }

            if (
                state.players[id].pv === 0
            ) return console.log("le monstre ne peut pas taper il est mort");
            else (
                state.players[id].pv -= damage
            )
        }
    },
})

export const { hitMonster, hitback } = fightSlice.actions
export default fightSlice.reducer
