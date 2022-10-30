import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from 'redux/contactsSlice';
import {getFilter} from 'redux/selectors'



function Filter() {

const filter = useSelector(getFilter);
const dispatch = useDispatch();

const handleChangeFilter  = e => {
    dispatch(changeFilter(e.currentTarget.value));
}

    return (
        <label className={css.phonebookFilterLabel}>
        Filter by name
        <input
            className={css.filterInput}
            name="filter"
            type="text"
            value={filter}
            onChange={handleChangeFilter}
            placeholder="name surname"
        />
    </label>
    )
}

export default Filter;