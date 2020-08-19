import React from 'react';

import './input-amount.css';

const InputAmount = () => {
    return (
        <div className="form-group">
            <label for="form-amount">Сумма взноса, руб.</label>
            <input type="number" className="form-control input-amount" id="form-amount" required/>
        </div>
    );
};

export default InputAmount;