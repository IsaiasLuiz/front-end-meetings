import React, { Component } from 'react';
import './loanding.css';

export default class Loading extends Component {
	render() {
		return (
			<div
				className={this.props.active ? 'loading-active' : 'loading-disabled'}
			>
				Carregando...
			</div>
		);
	}
}
