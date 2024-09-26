import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

function ContactList() {
  const [contacts, setContacts] = useState(null);
  const API_URL_BASE = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/';
  const API_URL_RESOURCE = 'users';
  const API_URL = API_URL_BASE + API_URL_RESOURCE;

  async function getContacts() {
    try {
      const response = await fetch(API_URL);
      const responseJson = await response.json();
      setContacts(responseJson);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <>
      <table>
        <caption>Contact List</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts ? contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          )) : <tr>
            <td colSpan={3}>No contacts :(</td></tr>}
        </tbody>
      </table>
    </>
  )
}

export default ContactList
