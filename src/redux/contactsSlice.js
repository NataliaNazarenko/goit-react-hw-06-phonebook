import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        return [...state, payload];
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
            isFavorite: false,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
    toggleFavorite: (state, { payload }) => {
      return state.map(contact => {
        if (contact.id === payload) {
          return { ...contact, isFavorite: !contact.isFavorite };
        }
        return contact;
      });
    },
  },
});

export const { addContact, deleteContact, toggleFavorite } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
