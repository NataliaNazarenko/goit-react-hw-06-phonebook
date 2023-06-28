import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyOptions } from '../styles/NotifyOptions';
import { Container } from './App.styled.jsx';
import { Section } from 'components/Section/index.js';
import { ContactForm } from 'components/ContactForm/index.js';
import { ContactList } from 'components/ContactList/index.js';
import { Filter } from 'components/Filter/index.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      return toast.error(`Contact with name "${contact.name}" already exists!`, NotifyOptions);
    }

    setContacts(prevContacts => [...prevContacts, contact]);
    toast.success(`Contact with name ${contact.name} is added to the contact list!`, NotifyOptions);
  };

  const handleDeleteContact = (id, name) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    toast.info(`Contact with with name ${name} has been deleted!`, NotifyOptions);
  };

  const handleToggleFavorite = id => {
    setContacts(prevContacts => {
      return prevContacts.map(contact => {
        if (contact.id === id) {
          return {
            ...contact,
            isFavorite: contact.isFavorite ? false : true,
          };
        }
        return contact;
      });
    });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        <Filter title="Find contact by name" onChange={handleFilterChange} value={filter} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
          onToggleFavorite={handleToggleFavorite}
        />
      </Section>
      <ToastContainer />
    </Container>
  );
}
