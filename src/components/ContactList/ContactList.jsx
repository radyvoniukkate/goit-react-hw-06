import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "/src/redux/contactsSlice.js";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
