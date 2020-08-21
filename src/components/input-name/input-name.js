import React from 'react';

import './input-name.css';

class InputName extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-name">ФИО участника забега</label>
                <input type="text" 
                    className="form-control" 
                    id="form-name" 
                    required
                    name="name"
                    onChange={ this.props.onInputChange }
                    value={ this.props.value }/>
            </div>
        );
    };
};

export default InputName;