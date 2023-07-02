import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled.jsx';
import { Section } from 'components/Section/index.js';
import { ContactForm } from 'components/ContactForm/index.js';
import { ContactList } from 'components/ContactList/index.js';
import { Filter } from 'components/Filter/index.js';

export function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        <Filter title="Find contact by name" />
        <ContactList />
      </Section>
      <ToastContainer />
    </Container>
  );
}
