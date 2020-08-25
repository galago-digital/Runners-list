import React from 'react';

import './table.css';

const Table = ({ users }) => {

    const rows = users.map((user) => {
        return (
            <tr key={user.id}>
                <td data-label="ФИО">{ user.name }</td>
                <td data-label="Дата рождения">{ user.date }</td>
                <td data-label="Email">{ user.email }</td>
                <td data-label="Телефон">{ user.phone }</td>
                <td data-label="Дистанция">{ user.distance }</td>
                <td data-label="Сумма взноса, руб">{ user.payment }</td>
            </tr>
        );
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Дистанция</th>
                    <th>Сумма взноса, руб</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
            <tfoot></tfoot>
        </table>
    );
};

export default Table;