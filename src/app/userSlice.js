import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isUser:false,
        isAuthenticated:false,
    },
    reducers:{
        addUser:(state,action)=> {
           state.user = action.payload;
           state.isUser = true;
           state.isAuthenticated = true;
        },
        removeUser:(state,action) => {
            state.user = null;
            state.isUser = false;
            state.isAuthenticated = false;
        }
    }
})

export const{addUser,removeUser} = userSlice.actions
export const userReducer =  userSlice.reducer;