import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
    name:"habit",
    initialState:[],
    reducers:{
        addHabit(state,action){
            state.unshift(action.payload);
        },
        removeHabit(state,action){
            state.splice(action.payload,1);
        },
        updateFav(state,action){
            state = state[action.payload].isFav = !state[action.payload].isFav;
        },
        updateStatus(state,action){
            const {index ,i} = action.payload;
            const oldStatus = state[index].dates[i].status
            if(oldStatus === 'none'){
                state[index].dates[i].status = 'done';
            } else if(oldStatus === 'done'){
                state[index].dates[i].status = 'undone'
            } else{
                state[index].dates[i].status = 'none';
            }
            return state;
        },
    }
});

export default habitSlice.reducer;
export const {addHabit,removeHabit,updateFav,updateStatus} = habitSlice.actions;