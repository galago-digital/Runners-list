import React from 'react';

import './input-phone.css';


class InputPhone extends React.Component {

    onInputClick() {
        alert('hello')
    }

    // const phone = document.querySelector('#form-phone');



    render() {
        return (
            <div className="form-group">
                <label for="form-phone">Телефон</label>
                <input type="tel" 
                    className="form-control" 
                    id="form-phone" 
                    required
                    onClick={ this.onInputClick }/>
            </div>
        );
    };

};


// const InputPhone = () => {
//     return (
//         <div className="form-group">
//             <label for="form-phone">Телефон</label>
//             <input type="tel" className="form-control" id="form-phone" required onClick={ ()=> alert('hello') }/>
//         </div>
//     );
// };

// const phone = document.querySelector('#form-phone');

// phone.addEventListener('click', () => {
//     alert('hello');
// });

export default InputPhone;