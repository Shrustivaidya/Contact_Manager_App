import './App.css';
import React from "react";
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
 const[contacts,setcontacts]={useState}
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>

    </div>
  );
}

export default App;
