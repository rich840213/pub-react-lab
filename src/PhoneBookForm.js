import React, { useState } from 'react'
import style from './css/PhoneBookForm.module.css'

const PhoneBookForm = ({ addUser }) => {
    const [firstName, setFirstName] = useState('Coder')
    const [lastName, setLastName] = useState('Byte')
    const [phone, setPhone] = useState(8885559999)

    const onChangeFirstName = (e) => setFirstName(e.target.value)
    const onChangeLastName = (e) => setLastName(e.target.value)
    const onChangePhone = (e) => setPhone(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault()
        addUser(firstName, lastName, phone)
    }

    return (
        <form className={style.container} onSubmit={onSubmit}>
            <label>First name:</label>
            <br />
            <input
                className={style.inputs}
                type="text"
                value={firstName}
                onChange={onChangeFirstName} />
            <br />
            <label>Last name:</label>
            <br />
            <input
                className={style.inputs}
                type="text"
                value={lastName}
                onChange={onChangeLastName} />
            <br />
            <label>Phone:</label>
            <br />
            <input
                className={style.inputs}
                type="text"
                value={phone}
                onChange={onChangePhone} />
            <br />
            <input
                className={style.submitBtn}
                type="submit"
                value="Add User" />
        </form>
    )
}

export default PhoneBookForm