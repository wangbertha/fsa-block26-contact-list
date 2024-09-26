const ContactRow = ({ contact, setSelectedContactId }) => {
  return (
    <tr key={contact.id} onClick={() => setSelectedContactId(contact.id)}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactRow