import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ContactStore {
  contacts = [];

  createContact = async (newContact) => {
    try {
      const res = await axios.post("http://localhost:8000/Contact", newContact);
      this.contacts.push(res.data);
    } catch (error) {
      console.log("log1 -> CreateContact -> error", error);
    }
  };

  fetchContact = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Contact");
      this.contacts = response.data;
      console.log(this.contacts);
    } catch (error) {
      console.error("Contact -> fetchContacs -> error", error);
    }
  };

  updateContact = async (updatedContact) => {
    try {
      await axios.put(
        `http://localhost:8000/Contact/${updatedContact.id}`,
        updatedContact
      );
      const contact = this.contacts.find(
        (contact) => contact.id === updatedContact.id
      );
      for (const key in contact) contact[key] = updatedContact[key];
    } catch (error) {
      console.log("Hotels -> updateContact -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      contacts: observable,
      createContact: action,
      updateContact: action,
      fetchContact: action,
    });
  }
}

const contactStore = new ContactStore();
contactStore.fetchContact();

export default contactStore;
