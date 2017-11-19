import React from 'react';
import ReactDOM from 'react-dom';
import { ContactList } from './components/contactList.jsx';
import { ContactDetails } from './components/contactDetails.jsx';
import { contacts } from './data/contacts';

let state = {};

window.addEventListener('hashchange', ()=>setState({location: location.hash}));

function setState(changes){

    state = Object.assign({}, state, changes);
    
    let item;
    let location = state.location.replace(/^#\/?|\/$/g, '').split('/');

    if (location[0] === 'contact' ){
        item = state.items.find(item => item.id == location[1] ? true : false);
    }
    
    const MainView = (
        <div className='wrap'>
            <ContactList items = {state.items} />
            <ContactDetails item = {item}/>
        </div>
    );
    
    ReactDOM.render(MainView, document.getElementById('react-app'));
}
setState({
    items: contacts,
    location: location.hash
});
