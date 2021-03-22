import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ContactStore {
  contacts = [];

  createContact = async (newContact) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/Contacts",
        newContact
      );
      this.contacts.push(res.data);
    } catch (error) {
      console.log("log1 -> createCookie -> error", error);
    }
  };
  deletContact = async (contactId) => {
    try {
      await axios.delete(`http://localhost:8000/Contact/${contactId}`);
      this.contacts = this.contacts.filter((contact) => contact.id !== +contactId);
    } catch (error) {
      console.log("Contacts -> deleteCookie -> error", error);
    }
  };
  fetchContact = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Contacts");
      this.Contacts = response.data;
      console.log(this.contacts);
    } catch (error) {
      console.error("Contacts -> fetchProducts -> error", error);
    }
  };

  updateContact = async (updatedContact) => {
    try {
      await axios.put(
        `http://localhost:8000/Contacts/${updatedContact.id}`,
        updatedContact
      );
      const contact = this.contacts.find((contact) => contact.id === updatedContact.id);
      for (const key in contact) contact[key] = updatedContact[key];
    } catch (error) {
      console.log("Contacts -> updateCookie -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
    contacts: observable,
      deleteContact: action,
      createContact: action,
      updateContact: action,
      fetchContact: action,
    });
  }
}

const ContactsStore = new ContactStore();
ContactsStore.fetchContact();

export default ContactsStore;
