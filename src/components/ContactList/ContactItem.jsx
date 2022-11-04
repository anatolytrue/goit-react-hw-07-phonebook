import Loader from 'components/Loader/Loader';
import React from 'react'
import { useDeleteContactMutation } from 'redux/contactsAPI';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactItem({ contactId, name, number }) {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    
    const handleDeleteContact = contactId =>
        deleteContact(contactId);
    return (
        <li className={css.phonebookContactListItem}>
                <p>{name} : {number}</p>
                <button type="button"
                    onClick={() => handleDeleteContact(contactId)}
                    className={css.phonebookContactListBtn}
                    disabled={isLoading}>
                    {isLoading ? <Loader/> : "Delete"}
                </button>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    contactId: PropTypes.string.isRequired,
};