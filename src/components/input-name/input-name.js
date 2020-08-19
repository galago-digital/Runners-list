import React from 'react';

import './input-name.css';

const InputName = () => {
    return (
        <div className="form-group">
            <label for="form-name">ФИО участника забега</label>
            <input type="text" className="form-control" id="form-name" required/>
        </div>
    );
};

export default InputName;