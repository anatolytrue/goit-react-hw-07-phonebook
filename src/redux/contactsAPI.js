import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reduserPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://635ee97fed25a0b5fe4f33c6.mockapi.io/',
    }),
    tagTypes: ['contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['contacts']
        }),
        addContact: builder.mutation({
            query: body => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['contacts'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;