import React from 'react';

import './input-date.css';

const InputDate = () => {
    return (
        <div className="form-group">
            <label for="form-date">Дата рождения</label>
            <input type="date" className="form-control" id="form-date" required/>
        </div>
    );
};

export default InputDate;