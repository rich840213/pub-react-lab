import React from 'react'
import './css/InformationTable.css'

const InformationTable = ({ forms }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {forms.map(({ id, firstName, lastName, phone }) => (
                    <tr key={id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default InformationTable