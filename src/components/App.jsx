import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export default function App() {

  return (
      <div className={css.phonebook}>
        <h1 className="counter__title">Phonebook</h1>
        <ContactForm />
        
        <h2 className="counter__title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
}