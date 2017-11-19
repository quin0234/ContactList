import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Email from 'react-icons/lib/md/email';
import DOB from 'react-icons/lib/md/event';
import Address from 'react-icons/lib/md/markunread-mailbox';
import Cell from 'react-icons/lib/md/phone-android';
import Landline from 'react-icons/lib/md/phone';
import Profile from 'react-icons/lib/md/perm-identity';

import {name, dateOfBir, age, address} from '../lib';

export class ContactDetails extends Component {
    render() {
        if (!this.props.item){
            return (
                <div className='contactDetails'>
                    <p>Please select a contact</p>
                </div>
            );
        } else {
            return (
                <div className='contactDetails'>
                    <div>
                            <img src={this.props.item.picture.large} alt={name(this.props.item.name)} />
                                
                                <h2>
                                    <Profile />
                                {name(this.props.item.name, true)}, Aged: {age(this.props.item.dob)}</h2>
                    </div>
                    <div className='contactInfo'>
                    <p>
                                    <DOB />
                                {dateOfBir(this.props.item.dob)} 
                                </p>
                        <p>
                            <Email />
                        {this.props.item.email}</p>
                        <p>
                            <Landline />
                             {this.props.item.phone}</p>
                        <p>
                            <Cell />
                        {this.props.item.cell}</p>
                    </div>
                    <div className='contactAddress'>
                        <Address />
                        <p>{address(this.props.item.location, 1)}, {address(this.props.item.location, 2)}, {address(this.props.item.location, 3)}</p>
                        </div>
                    </div>
            );
        }
    }
}

ContactDetails.propTypes = {
    item: PropTypes.object
};