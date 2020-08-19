import React from 'react';

import './table.css';

const Table = ({ users }) => {

    const rows = users.map((user) => {
        return (
            <tr>
                <td>{ user.name }</td>
                <td>{ user.date }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
                <td>{ user.distance }</td>
                <td>{ user.payment }</td>
            </tr>
        );
    });

    return (
        <table className="table">
            <tr>
                <th>ФИО</th>
                <th>Дата рождения</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Дистанция</th>
                <th>Сумма взноса, руб</th>
            </tr>

            { rows }
        </table>
    );
};

export default Table;