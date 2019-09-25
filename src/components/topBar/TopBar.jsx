import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './topBar.css';

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<div className="title">Meetings</div>
				<div className="options-menu">
					<ul>
						<Link to="/" className="item-menu">
							<li>Cadastrar Meeting</li>
						</Link>
						<Link to="see-meetings" className="item-menu">
							<li>Ver Meetings</li>
						</Link>
						{/* <Link to="registered-meetings" className="item-menu">
							<li>Meetings Cadastradas</li>
						</Link> */}
					</ul>
				</div>
			</div>
		);
	}
}
