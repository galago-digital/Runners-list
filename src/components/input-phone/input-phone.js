import React from 'react';
import InputElement from 'react-input-mask';

import './input-phone.css';


class InputPhone extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-phone">Телефон</label>
                <InputElement mask="+99999999999" 
                    type="tel" 
                    className="form-control" 
                    id="form-phone" 
                    required
                    name="phone"
                    onChange={ this.props.onInputChange }
                    value={ this.props.value }/>
            </div>
        );
    };

};

export default InputPhone;