import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { addContact, selectContacts } from "/src/redux/contactsSlice.js";
import { selectNameFilter, changeFilter } from "/src/redux/filtersSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchTerm={filter} onSearchChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} />
    </div>
  );
};

export default App;