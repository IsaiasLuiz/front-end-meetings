import React, { Component } from 'react';
import moment from 'moment';
import './meetingCard.css';

export default class MeetingCard extends Component {
	render() {
		return (
			<div className="meeting-card">
				<h2>
					{this.props.data.title}
					<p>
						{moment(this.props.data.date, 'YYYY/MM/DD').format('DD/MM/YYYY')}
					</p>
				</h2>
				<p>{this.props.data.description}</p>
				<p>Autor: {this.props.data.author}</p>
			</div>
		);
	}
}
