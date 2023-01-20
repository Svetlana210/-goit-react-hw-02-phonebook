import styles from './contact-list.module.css';

const ContactList = ({ contacts, filterContacts, deleteContact }) => {
  const elements = filterContacts.map(contact => (
    <li key={contact.id} id={contact.id} className={styles.item}>
      <span className={styles.span}>{contact.name}:</span>
      <span>{contact.number}</span>
      <button className={styles.btn} onClick={deleteContact}>
        Delete
      </button>
    </li>
  ));
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.list}>{elements} </ul>
      ) : (
        <h2>
          {' '}
          Add some contacts <br /> Your phonebook is empty
        </h2>
      )}
    </>
  );
};

export default ContactList;
