import React from 'react';

// зачем имортировать пустой файл? и создавать пустые файлы
// лишний код
import './select-distance.css';

class SelectDistance extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-distance">Дистанция</label>
                <select className="form-control" 
                    id="form-distance"
                    required
                    name="distance"
                    onChange={ this.props.onInputChange }>
                    <option value="3">3 км</option>
                    <option value="5">5 км</option>
                    <option value="10">10 км</option>
                </select>
            </div>
        );
    }
};

export default SelectDistance;