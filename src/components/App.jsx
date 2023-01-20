import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './app.module.css';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { number, name, id: nanoid() }],
    }));
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  doubleContact = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name.toLowerCase() === name);
  };

  deleteContact = e => {
    const { id } = e.currentTarget.parentNode;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    // const filteredContacts = contacts.filter(contact => {
    //   return contact.id !== id;
    // });
    // return this.setState({ contacts: [...filteredContacts] });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          doubleContact={this.doubleContact}
        ></Form>
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter}></Filter>
        <ContactList
          contacts={contacts}
          filterContacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
