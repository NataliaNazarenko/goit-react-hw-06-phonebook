import PropTypes from 'prop-types';
import { BsFillStarFill, BsFillPersonDashFill } from 'react-icons/bs';
import { ContactsList, ContactItem, Contact, DeleteButton, Icon } from './ContactList.styled.jsx';

export function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number, isFavorite }) => {
        return (
          <ContactItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <Icon isFavorite={isFavorite} onClick={() => onToggleFavorite(id)}>
              <BsFillStarFill />
            </Icon>
            <DeleteButton onClick={() => onDeleteContact(id, name)}>
              <BsFillPersonDashFill />
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
}

ContactList.propTypes = {
  onToggleFavorite: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool,
    })
  ).isRequired,
};
