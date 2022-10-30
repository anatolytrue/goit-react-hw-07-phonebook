import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';
import {getFilter, getContacts} from 'redux/selectors'

function ContactList() {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase().trim();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
    }
    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId))
    }

    const contactsList = getVisibleContacts();

    return (
        <ul className={css.phonebookContactList}>
        {contactsList.map(({ id, name, number }) => (
            <li key={id} className={css.phonebookContactListItem}>
                <p>{name} : {number}</p>
                <button type="button"
                    onClick={() => handleDeleteContact(id)}
                    className={css.phonebookContactListBtn}>
                    Delete
                </button>
            </li>
            
        ))}
    </ul>
    )
}

export default ContactList;