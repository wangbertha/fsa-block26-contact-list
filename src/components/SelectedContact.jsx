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
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <div className="address">Location:
                <p>{contact.address.street}</p>
                <p>{contact.address.suite}</p>
                <p>{contact.address.city}</p>
                <p>{contact.address.zipcode}</p>
                <p>Coordinates: {contact.address.geo.lat}, {contact.address.geo.lng}</p>
            </div>
            <p>Phone Number: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <div className="company">Company:
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