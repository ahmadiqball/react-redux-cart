import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showNotification: false,
        status: '',
        title: '',
        message: '',
    },
    reducers: {
        showNotification(state, action) {
            state.showNotification = true;
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.message = action.payload.message;
        },
        hideNotification(state) {
            state.showNotification= false
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;