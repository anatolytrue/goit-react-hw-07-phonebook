import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
// import { deleteContact } from 'redux/contactsSlice';
import {getFilter} from 'redux/selectors'
import { useDeleteContactMutation, useFetchContactsQuery } from 'redux/contactsAPI';

function ContactList() {

    const {data =[]} = useFetchContactsQuery();
    const { filter } = useSelector(state => getFilter(state));
    const [deleteContact] = useDeleteContactMutation();
    // const dispatch = useDispatch();
    
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase().trim();
        return data.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
    }
    const handleDeleteContact = contactId =>
        deleteContact(contactId);

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