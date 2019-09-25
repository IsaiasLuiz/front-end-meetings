import React, { Component } from 'react';
import './meetingCard.css';

export default class MeetingCard extends Component {
	render() {
		return (
			<div className="meeting-card">
				<p>Titulo: {this.props.data.title}</p>
				<p>Data: {this.props.data.date}</p>
				<p>Descrição: {this.props.data.description}</p>
				<p>Autor: {this.props.data.author}</p>
			</div>
		);
	}
}
