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

    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            email: '',
            phone: '',
            distance: 3,
            payment: 0,
            disabled: true,
        };
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // даже если оставить такую длинную проверку можно упросить код
        // ведь тут задача по состоянию полей определить состояние кнопки - disabled: true || false
        // const isDisabled = this.state.name.length > 0 && this.state.date.length > 0 ....
        // this.setState({
        //     disabled: isDisabled
        //});
        // убираем if/else, код короче, при этом остается понятным и читабельным
        if (this.state.name.length > 0 
            && this.state.date.length > 0 
            && this.state.email.length > 0 
            && !this.state.phone.includes('_')
            && this.state.phone.length > 11) 
            {
                this.setState({
                    disabled: false
                });
            } else {
                this.setState({
                    disabled: true
                });
            }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.name, this.state.date, this.state.email, this.state.phone, this.state.distance, this.state.payment)
        // состояние полей сбрасывается
        // забыта дистанция - сохраяет предыдущий выбор
        // забыта кнопка отправить - она остается разблокированной
        // при этом т.к. у всех полей атрибут required - они тут же отмечаются как не правильно заполененные
        // выглядит странно для ползователя которы только что отправил форму
        this.setState({
            name: '',
            date: '',
            email: '',
            phone: '',
            payment: 0,
        });
    };

    render() {
        return (
            <form className="form" onSubmit={ this.onSubmit }>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <InputName onInputChange = { this.onInputChange } value = { this.state.name }></InputName>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputDate onInputChange = { this.onInputChange } value = { this.state.date }></InputDate>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <InputEmail onInputChange = { this.onInputChange } value = { this.state.email }></InputEmail>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputPhone onInputChange = { this.onInputChange } value = { this.state.phone }></InputPhone>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <SelectDistance onInputChange = { this.onInputChange }></SelectDistance>
                    </div>
                    <div className="col-12 col-md-6">
                        <InputAmount onInputChange = { this.onInputChange } value = { this.state.payment }></InputAmount>
                    </div>
                </div>
                <button 
                    className="btn btn-primary form-submit" 
                    type="submit"
                    disabled = { this.state.disabled }>
                    Отправить заявку
                </button>
            </form>
        );
    };
};

export default Form;