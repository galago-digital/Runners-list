import React from 'react';

import './input-email.css';

class InputEmail extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-email">Email</label>
                <input type="email" 
                    className="form-control" 
                    id="form-email" 
                    required
                    name="email"
                    onChange={ this.props.onInputChange }
                    value={ this.props.value }/>
            </div>
        );
    };
};

export default InputEmail;