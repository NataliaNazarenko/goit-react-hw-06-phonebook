import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilterContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );
});
