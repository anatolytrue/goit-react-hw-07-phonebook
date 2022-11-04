import { useState } from "react";
import { nanoid } from 'nanoid';
// import { getContacts } from 'redux/selectors';
// import { addContact } from "redux/contactsSlice";
import { useAddContactMutation, useFetchContactsQuery } from "redux/contactsAPI";
// import { useDispatch} from 'react-redux';
import css from './ContactForm.module.css';
import Loader from "components/Loader/Loader";


export default function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const {data: contacts} = useFetchContactsQuery();
    const [addContact, {isLoading}] = useAddContactMutation();
    // console.log(useAddContactMutation());
    // const dispatch = useDispatch();

    const handleAddContact = ({ name, phone }) => {
        const newContact = {
            id: nanoid(),
            name,
            phone,
            };
        contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
            ? alert(`${newContact.name} is already in contacts`)
            : addContact(newContact) && reset();
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddContact({name, phone});
        // reset();
    }

    const reset = () => {
        setName('');
        setPhone('');
    }

    return (
            <form className={css.phonebookForm} onSubmit={handleSubmit}>
                <label className={css.phonebookLabel} >
                Name
                    <input
                        className={css.phonebookInput}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name='phone'
                        value={phone}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                    />
                    
                    <button
                            type='submit'
                            className={css.phonebookBtnAdd}>
                        {isLoading ? <Loader/> : 'Add contact'}
                    </button>
                </label>
            </form>
        )

}

