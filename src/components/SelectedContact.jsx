import { useEffect, useState } from "react"

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null);
    const API_URL_BASE = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/';
    const API_URL_RESOURCE = 'users/';
    const API_URL = API_URL_BASE + API_URL_RESOURCE;

    async function getContact() {
        try {
            const response = await fetch(API_URL + selectedContactId);
            const responseJson = await response.json();
            setContact(responseJson);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContact();
    }, [])

  return (
    <>
        {contact ? <article>
            <h1>{contact.name}</h1>
            <p>{contact.username}</p>
            <p>{contact.email}</p>
            <div>Address:
                <p>{contact.address.street}</p>
                <p>{contact.address.suite}</p>
                <p>{contact.address.city}</p>
                <p>{contact.address.zipcode}</p>
                <p>{contact.address.geo.lat}</p>
                <p>{contact.address.geo.lng}</p>
            </div>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
            <div>Company
                <p>{contact.company.name}</p>
                <p>{contact.company.catchPhrase}</p>
                <p>{contact.company.bs}</p>
            </div>
        </article> : 
        <p>Error loading contact.</p>}
        <button onClick={() => setSelectedContactId(null)}>Navigate back to contacts list</button>
    </>
  )
}

export default SelectedContact