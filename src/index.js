import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Form from './components/form/form';
import Headline from './components/headline/headline';
import Table from './components/table/table';
import TableFilter from './components/table-filter/table-filter';

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
			],
			filter: 'id'
		};
	}

	addUser = (name, date, email, phone, distance, payment) => {
		const newDate = date.slice(8) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);

		const newUser = {
			id: this.maxId++,
			date: newDate,
			name,
			email,
			phone,
			distance: +distance,
			payment: +payment,
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

	filter(users, filter) {

		const newUsers = [...users];

		if (filter === 'id') {
			return users;
		} else {
			return newUsers.sort((a, b) => a[filter] > b[filter] ? 1 : -1);
		}
	};

	changeFilter = (val) => {
		this.setState({ filter: val })
	};

    render() {
		const filteredUsers = this.filter(this.state.users, this.state.filter);

		return (
			<div className="container">
				<Headline />
				<Form addUser={ this.addUser } forNewUser={ this.forNewUser }/>
				<TableFilter filter={ this.state.filter } changeFilter={ this.changeFilter }/>
				<Table users={ filteredUsers } />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));