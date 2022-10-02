import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: ["Ahmet",],
}

export const reminderSlice = createSlice({
    name: "reminderAdder",
    initialState,
    reducers: {
        add: (state) => {
            state.value.push(document.getElementById('reminderInput').value);
        }
    }
});

export const { add } = reminderSlice.actions

export default reminderSlice.reducer;