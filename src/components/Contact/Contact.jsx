import PropTypes from "prop-types";
import {  useDispatch } from "react-redux";
import { deleteContact } from "/src/redux/contactsSlice.js";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteContact(contact.id));
    };
  return (
    <li className="contact-item">
      <div className="contact-info">
        <div className="item">
          <span role="img" aria-label="user">
            👤
          </span>
          <p>{contact.name}</p>
        </div>
        <div className="item">
          <span role="img" aria-label="phone">
            📞
          </span>
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
