import React, { Component } from 'react';

class CommentForm extends Component {
	state = { comment: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.comment);
	};
	render() {
		return (
			<div>
				<form class="ui reply form" onSubmit={this.onFormSubmit}>
					<div class="field">
						<textarea
							text="text"
							value={this.state.comment}
							onChange={(e) => this.setState({ comment: e.target.value })}
						/>
					</div>
					<button class="ui blue labeled submit icon button" type="submit">
						<i class="icon edit" /> Add Comment
					</button>
				</form>
			</div>
		);
	}
}

export default CommentForm;
