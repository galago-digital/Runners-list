import React from 'react';

import './form.css';
import '../input-name/input-name';
import InputName from '../input-name/input-name';
import InputDate from '../input-date/input-date';
import InputEmail from '../input-email/input-email';
import InputPhone from '../input-phone/input-phone';
import SelectDistance from '../select-distance/select-distance';
import InputAmount from '../input-amount/input-amount';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <InputName name = { this.props.forNewUser.name }></InputName>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputDate></InputDate>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <InputEmail></InputEmail>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputPhone></InputPhone>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <SelectDistance></SelectDistance>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputAmount payment = { this.props.forNewUser.payment }></InputAmount>
                    </div>
                </div>
                <button 
                    className="btn btn-primary form-submit" 
                    type="submit"
                    onClick={() => this.props.onAddUser()}>
                    Отправить заявку
                </button>
            </form>
        );
    };
};

export default Form;