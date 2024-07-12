import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
       blog:null,
       news:null,
    },
    reducers: {
        addBlog: (state, action) => {
            state.blog = action.payload;
            
        },
        addNews: (state,action) => {
            state.news = action.payload;
        }
       
        
    }
});

export const { addBlog, addNews } = dataSlice.actions;
export const dataSliceReducer = dataSlice.reducer;