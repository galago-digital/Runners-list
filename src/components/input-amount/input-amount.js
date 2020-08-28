import React from 'react';

import './input-amount.css';

// input-amount, name, email - так и напрашиваются сделать их одним комопнентом
// компонент на каждый инпут как сейчас создает не мало повторяющегося кода
class InputAmount extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {value: ''};
    // }

    // onChange(e) {
    //     let val = e.target.value;
    //     this.setState({name: val});
    // }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-amount">Сумма взноса, руб.</label>
                <input type="number" 
                    className="form-control input-amount" 
                    id="form-amount" 
                    required
                    name="payment"
                    onChange={ this.props.onInputChange }
                    value={ this.props.value }/>
            </div>
        );
    };
};

export default InputAmount;