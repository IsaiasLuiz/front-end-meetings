import React, { Component } from 'react';
import './meetingCard.css';

export default class MeetingCard extends Component {
	render() {
		return (
			<div className="meeting-card">
				<p>Titulo: {this.props.data.meetingTitle}</p>
				<p>Data: {this.props.data.meetingDate}</p>
				<p>Descrição: {this.props.data.meetingDescription}</p>
				<p>Autor: {this.props.data.meetingAuthor}</p>
			</div>
		);
	}
}
