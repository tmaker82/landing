'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import {Demo} from "@/types";

interface DropdownItem {
    name: string;
    code: string;
}

const UserInfo = () => {
    const [dropdownItem, setDropdownItem] = useState<DropdownItem | null>(null);
    const [users, setUsers] = useState<Demo.Product[]>([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const dropdownItems: DropdownItem[] = useMemo(
        () => [
            { name: 'Option 1', code: 'Option 1' },
            { name: 'Option 2', code: 'Option 2' },
            { name: 'Option 3', code: 'Option 3' }
        ],
        []
    );

    useEffect(() => {
        setDropdownItem(dropdownItems[0]);
    }, [dropdownItems]);


    useEffect(() => {
        const userData =  fetch('http://localhost:4000/api/users/tmaker')
            .then((res) => res.json())
            .then((result) => {
                setFirstName(result.firstname)
                setLastName(result.lastname)
                setEmail(result.email)
            });

    }, []);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname">firstName</label>
                            <InputText id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows={4} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">email</label>
                            <InputText id="city" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
