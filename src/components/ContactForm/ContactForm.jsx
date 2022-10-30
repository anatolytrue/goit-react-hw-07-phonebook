import { useState } from "react";
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { addContact } from "redux/contactsSlice";
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';


export default function ContactForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleAddContact = ({ name, number }) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
            };
        contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
            ? alert(`${newContact.name} is already in contacts`)
            : dispatch(addContact(newContact)) && reset();
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddContact({name, number});
        // reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
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
                        name='number'
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                    />
                    
                    <button
                            type='submit'
                            className={css.phonebookBtnAdd}>
                        Add contact
                    </button>
                </label>
            </form>
        )

}

