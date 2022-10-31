import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        // addContact(state, { payload }) {
        //     state.items.push(payload);
        // },
        // deleteContact(state, { payload }) {
        //     state.items = state.items.filter(({ id }) => id !== payload);
        // },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
