import React, { Component } from 'react';

class CommentForm extends Component {
	state = {
		comment: ''
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.comment);
	};
	render() {
		return (
			<div>
				<form className="ui reply form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<textarea
							text="text"
							value={this.state.comment}
							onChange={(e) =>
								this.setState({
									comment: e.target.value
								})}
						/>{' '}
					</div>{' '}
					<button className="ui blue labeled submit icon button" type="submit">
						<i className="icon edit" /> Add Comment{' '}
					</button>{' '}
				</form>{' '}
			</div>
		);
	}
}

export default CommentForm;
