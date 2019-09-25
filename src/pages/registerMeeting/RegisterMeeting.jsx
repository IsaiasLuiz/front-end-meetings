import React, { Component } from 'react';
import API from '../../services/API';
import Loanding from '../../components/loanding';
import Notification from '../../components/notification';
import './registerMeeting.css';

const MEETING_REGISTERED = 'Meeting Registrada!!';

const MEETING_NOT_REGISTERED =
	'Ocorreu um Erro Durante o Registro!! Tente Novamente!';

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

	insertDate = () => {
		this.setState({ meetingDate: event.target.value });
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
			meetingTitle: this.state.meetingTitle,
			meetingDate: this.state.meetingDate,
			meetingDescription: this.state.meetingDescription,
			meetingAuthor: this.state.meetingAuthor
		};
		API.post('meetings', meeting)
			.then(() => {
				this.setState({ registrationAttempt: MEETING_REGISTERED });
				this.setState({ savedMeeting: true });
			})
			.catch(() => {
				this.setState({ registrationAttempt: MEETING_NOT_REGISTERED });
			})
			.finally(() => {
				this.setState({ loanding: false });
				this.setState({ notification: true });
			});
	};

	render() {
		return (
			<div className="register-meeting">
				<Loanding active={this.state.loanding} />
				{this.state.notification && (
					<Notification
						text={this.state.registrationAttempt}
						hit={this.state.savedMeeting}
					/>
				)}
				<p>Registre Aqui a sua Meentig:</p>
				<input type="text" placeholder="Titulo" onChange={this.insertTitle} />
				<input type="date" onChange={this.insertDate} />
				<textarea
					rows="10"
					placeholder="Informe sobre o que se trata o meeting."
					onChange={this.insertDescription}
				/>
				<input type="text" placeholder="Autor" onChange={this.insertAuthor} />
				<button onClick={this.registrerMeeting}>Cadastrar</button>
			</div>
		);
	}
}
