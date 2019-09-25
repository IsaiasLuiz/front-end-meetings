import React, { Component } from 'react';
import MeetingCard from '../../components/meetingCard';
import Loanding from '../../components/loanding';
import Notification from '../../components/notification';
import API from '../../services/API';
import './seeMeetings.css';

const NO_MEETINGS = 'Sem Meetings Salvas';
const ERROR = 'Oorreu um erro ao buscar';
let KEY = 0;
export default class SeeMeeting extends Component {
	state = {
		loanding: false,
		meetingData: [],
		haveMeetings: true,
		noContent: '',
		hitNotification: true
	};

	componentDidMount() {
		this.setState({ loanding: true });
		API.get('meetings')
			.then(response => {
				const meetingData = response.data;
				this.setState({ meetingData: meetingData });
				if (meetingData.length === 0) {
					this.setState({ haveMeetings: false });
					this.setState({ noContent: NO_MEETINGS });
				}
			})
			.catch(() => {
				this.setState({ haveMeetings: false });
				this.setState({ noContent: ERROR });
				this.setState({ hitNotification: false });
			})
			.finally(() => {
				this.setState({ loanding: false });
			});
	}

	render() {
		return (
			<div>
				<div className="see-meeting">
					<Loanding active={this.state.loanding} />
					{this.state.haveMeetings ? null : (
						<Notification
							text={this.state.noContent}
							hit={this.state.hitNotification}
						/>
					)}
				</div>
				<div>
					{this.state.meetingData.map(value => (
						<MeetingCard data={value} key={KEY++} />
					))}
				</div>
			</div>
		);
	}
}
