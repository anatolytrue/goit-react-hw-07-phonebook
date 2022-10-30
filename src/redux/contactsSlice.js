import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
    items: [],
    filter: '',
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, { payload }) {
            state.items.push(payload);
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(({ id }) => id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

const persistConfig = {
    key: "contacts",
    storage,
    blacklist:['filter'],
}
export const persistContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);



export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
