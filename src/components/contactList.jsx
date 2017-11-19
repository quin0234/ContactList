import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Profile from 'react-icons/lib/md/perm-identity';
import DOB from 'react-icons/lib/md/event';
import {name, dateOfBir} from '../lib';

export class ContactList extends Component{
        render() {
            return (
                <div className='contactList'>
                    <ul>
                        {this.props.items.map( item => (
                            <li key={item.key} >
                                <a href={'#contact/' + item.id}> 
                                    <figure>
                                        <img src={item.picture.thumbnail} alt={name(item.name)} />
                                        <figcaption>
                                            <p>
                                            <Profile/>
                                            {name(item.name)}</p>
                                            <span>
                                            <DOB/>
                                            {dateOfBir(item.dob)}</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
}

ContactList.propTypes = {
    items: PropTypes.array
};