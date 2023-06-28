import PropTypes from 'prop-types';
import { Wrapper, Input, Title } from './Filter.styled.jsx';

export function Filter({ value, onChange, title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value.name}
        onChange={onChange}
      />
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
