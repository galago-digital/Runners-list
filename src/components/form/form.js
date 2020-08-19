import React from 'react';

import './form.css';
import '../input-name/input-name';
import InputName from '../input-name/input-name';
import InputDate from '../input-date/input-date';
import InputEmail from '../input-email/input-email';
import InputPhone from '../input-phone/input-phone';
import SelectDistance from '../select-distance/select-distance';
import InputAmount from '../input-amount/input-amount';

const Form = () => {
    return (
        <form className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <InputName></InputName>
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
                    <InputAmount></InputAmount>
                </div>
            </div>
            <button className="btn btn-primary form-submit" type="submit">Отправить заявку</button>
        </form>
    );
};

export default Form;