import React from 'react';

import './select-distance.css';

const SelectDistance = () => {
    return (
        <div className="form-group">
            <label htmlFor="form-distance">Дистанция</label>
            <select className="form-control" id="form-distance">
                <option>3 км</option>
                <option>5 км</option>
                <option>10 км</option>
            </select>
        </div>
    );
};

export default SelectDistance;