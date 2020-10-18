import React, { useState } from 'react'
import PhoneBookForm from './PhoneBookForm'
import InformationTable from './InformationTable'

const Application = () => {
    const [forms, setForms] = useState([])
    const addUser = (firstName, lastName, phone) => setForms([...forms, { id: Date.now(), firstName, lastName, phone }])

    return (
        <div>
            <PhoneBookForm addUser={addUser} />
            <InformationTable forms={forms} />
        </div>
    )
}

export default Application