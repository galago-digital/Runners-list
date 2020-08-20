import React from 'react';

import './input-email.css';

const InputEmail = () => {
    return (
        <div className="form-group">
            <label htmlFor="form-email">Email</label>
            <input type="email" className="form-control" id="form-email" required/>
        </div>
    );
};

export default InputEmail;