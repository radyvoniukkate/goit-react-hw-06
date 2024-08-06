import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "/src/redux/contactsSlice.js";
import Contact from "../Contact/Contact";


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 

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

export default ContactList;