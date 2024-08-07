import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "/src/redux/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
