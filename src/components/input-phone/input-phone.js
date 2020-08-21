import React from 'react';

import './input-phone.css';


class InputPhone extends React.Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         inputValue: "+7"
    //     };

    //     // this.onInputFocus = () => {
    //     //     if(!/^\+\d*$/.test(this.state)) {
    //     //         this.setState({
    //     //             inputValue: "+7"
    //     //         });
    //     //     };
    //     // };

    //     this.onInputKeyPress = (e) => {
    //         if(/\d/.test(e.key) && this.state.inputValue.length < 12) {
    //             this.setState({
    //                 inputValue: this.state.inputValue + e.key
    //             });
    //         };
    //     };

    //     this.onInputKeyDown = (e) => {
    //         if(e.key === 'Backspace') {
    //             console.log(e.key);
    //         }
    //     }
    // }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="form-phone">Телефон</label>
                <input type="tel" 
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