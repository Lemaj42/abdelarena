import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 0 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 }
    ],
    monster: { pv: 800, pvMax: 800 }
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const damage = action.payload
            state.monster.pv -= damage
        },
        hitback: (state, action) => {
            const id = Math.floor(Math.random() * 4)
            const damage = action.payload
            state.players[id].pv -= damage
        }
    },
})

export const { hitMonster, hitback } = fightSlice.actions
export default fightSlice.reducer
