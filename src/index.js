import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Form from './components/form/form';
import Headline from './components/headline/headline';
import Table from './components/table/table';

class App extends React.Component {

	maxId = 4;
	forNewUser = {
		date: "",
		name: "",
		email: "",
		phone: "",
		distance: 0,
		payment: 0
	};

	constructor() {
		super();

		this.state = {
			users: [
				{
					id: 1,
					date: "11.03.1987",
					name: "Куклина Мария Ивановна",
					email: "kyklina@mail.ru",
					phone: "+79223625999",
					distance: 5,
					payment: 500
				},
				{
					id: 2,
					date: "8.05.1997",
					name: "Мокрушина Галина Юрьевна",
					email: "mokrushina@mail.ru",
					phone: "+79881125999",
					distance: 10,
					payment: 300
				},
				{
					id: 3,
					date: "24.01.1886",
					name: "Ольга Сергеевна Заводская",
					email: "olga.zavodckaia@mail.ru",
					phone: "+79008011000",
					distance: 3,
					payment: 1500
				}
			]
		};
	}

	addUser = () => {
		const newUser = {
			id: this.maxId++,
			date: 123,
			name: 123,
			email: 232,
			phone: 1,
			distance: 1,
			payment: 1
		}

		this.setState(({ users }) => {
			
			const newArray = [
				...users,
				newUser
			];

			return {
				users: newArray
			};
		});
	};

    render() {
		return (
			<div className="container">
				<Headline />
				<Form onAddUser={ this.addUser } forNewUser={ this.forNewUser }/>
				<Table users={ this.state.users } />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));