import React, { Component } from 'react';
import API from '../../services/API';
import moment from 'moment';
import Loanding from '../../components/loanding';
import Notification from '../../components/notification';
import './registerMeeting.css';

const MEETING_REGISTERED = 'Meeting Registrada!!';

const MEETING_NOT_REGISTERED =
	'Ocorreu um Erro Durante o Registro!! Tente Novamente!';

const DATE_INVALID = 'Data não pode ser inferior a hoje!';

export default class RegisterMeeting extends Component {
	state = {
		meetingTitle: '',
		meetingDate: '',
		meetingDescription: '',
		meetingAuthor: '',
		loanding: false,
		registrationAttempt: '',
		notification: false,
		savedMeeting: false
	};

	insertTitle = () => {
		this.setState({ meetingTitle: event.target.value });
	};

	insertDate = value => {
		const now = moment(Date.now()).format('YYYY/MM/DD');
		const date = value || event.target.value;

		if (moment(date, 'YYYY-MM-DD').isBefore(now)) {
			this.setState({
				registrationAttempt: DATE_INVALID,
				notification: true,
				savedMeeting: false
			});
		} else {
			this.setState({ registrationAttempt: '', notification: false });
			this.setState({ meetingDate: event.target.value });
		}
	};

	insertDescription = () => {
		this.setState({ meetingDescription: event.target.value });
	};

	insertAuthor = () => {
		this.setState({ meetingAuthor: event.target.value });
	};

	registrerMeeting = () => {
		this.setState({ loanding: true });
		let meeting = {
			title: this.state.meetingTitle,
			date: this.state.meetingDate,
			description: this.state.meetingDescription,
			author: this.state.meetingAuthor
		};
		API.post('meetings', meeting)
			.then(() => {
				this.setState({ registrationAttempt: MEETING_REGISTERED });
				this.setState({ savedMeeting: true });
				this.clearFields();
			})
			.catch(() => {
				this.setState({ registrationAttempt: MEETING_NOT_REGISTERED });
			})
			.finally(() => {
				this.setState({ loanding: false });
				this.setState({ notification: true });
			});
	};

	clearFields = () => {
		this.setState({
			meetingTitle: '',
			meetingDate: '',
			meetingDescription: '',
			meetingAuthor: ''
		});
	};

	render() {
		return (
			<div>
				<div className="register-meeting">
					<Loanding active={this.state.loanding} />
					{this.state.notification && (
						<Notification
							text={this.state.registrationAttempt}
							hit={this.state.savedMeeting}
						/>
					)}
					<p>Registre Aqui a sua Meentig:</p>
					<input
						type="text"
						placeholder="Titulo"
						onChange={this.insertTitle}
						value={this.state.meetingTitle}
					/>
					<input
						type="date"
						onChange={this.insertDate}
						value={this.state.meetingDate}
					/>
					<textarea
						rows="10"
						placeholder="Informe sobre o que se trata o meeting."
						onChange={this.insertDescription}
						value={this.state.meetingDescription}
					/>
					<input
						type="text"
						placeholder="Autor"
						onChange={this.insertAuthor}
						value={this.state.meetingAuthor}
					/>
					<button onClick={this.registrerMeeting}>Cadastrar</button>
				</div>
			</div>
		);
	}
}
