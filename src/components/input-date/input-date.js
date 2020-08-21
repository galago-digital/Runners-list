import React from 'react';

import './input-date.css';

class InputDate extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-date">Дата рождения</label>
                <input type="date" 
                    className="form-control" 
                    id="form-date" 
                    required
                    name="date"
                    onChange={ this.props.onInputChange }
                    value={ this.props.value }/>
            </div>
        );
    };
};

export default InputDate;