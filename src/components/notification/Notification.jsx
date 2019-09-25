import React from 'react';
import { Component } from 'react';
import './notification.css';

export default class Notification extends Component {
	render() {
		let className = this.props.hit ? 'hit-notification' : 'error-notification';
		className += ' , notification';
		return <div className={className}>{this.props.text}</div>;
	}
}
