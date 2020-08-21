import React from 'react';

import './table-filter.css';

class TableFilter extends React.Component {

    buttons = [
        { name: 'id', label: 'Дата регистрации' },
        { name: 'distance', label: 'Дистанция' },
        { name: 'payment', label: 'Сумма взноса' },
    ];

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = this.props.filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={ name }
                        onClick={() => this.props.changeFilter(name)}>
                    { label }
                </button>
            );
        });

        return (
            <div className="table-filter">
                <span>Фильтровать по:</span>
                <div className="btn-group">
                    { buttons }
                </div>
            </div>
        );
    };
};

export default TableFilter;