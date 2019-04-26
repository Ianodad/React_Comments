import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import CommentForm from './CommentForm';

const Comments = [
	{
		id: 0,
		name: 'Sam',
		comment: 'All is great!',
		time: '4:25pm',
		like: 0,
		dislike: 0
	},
	{
		id: 1,
		name: 'Jack',
		comment: 'We will do it',
		time: '5:45pm',
		like: 0,
		dislike: 0
	},
	{
		id: 2,
		name: 'Dwayne',
		comment: 'We are the chaps',
		time: '6:40pm',
		like: 0,
		dislike: 0
	}
];

class App extends Component {
	state = {
		comments: Comments
	};

	// this function get the new comment from the child the added it to the new state//
	commentSubmit = (commented) => {
		let comments = this.state.comments;

		const id = Comments.length + 1;
		const time = new Date().toLocaleTimeString();
		const name = 'Anonymous';
		const comment = commented;

		comments.push({
			id: id,
			time: time,
			name: name,
			comment: comment,
			like: 0,
			dislike: 0
		});

		this.setState({
			comments
		});
		console.log('finished');
	};
	onDelete = (id) => {
		const comments = this.state.comments.filter((comment) => comment.id !== id);
		this.setState({
			comments
		});
	};

	handleLike = (liked) => {
		const comments = [ ...this.state.comments ];
		const index = comments.indexOf(liked);
		comments[index] = { ...liked };
		comments[index].like++;
		this.setState({ comments });
		// console.log(liked);
	};
	handleDislike = (disliked) => {
		const comments = [ ...this.state.comments ];
		const index = comments.indexOf(disliked);
		comments[index] = { ...disliked };
		comments[index].dislike++;
		this.setState({ comments });
	};
	render() {
		return (
			<div className="ui container comments">
				{this.state.comments.map((comment) => (
					<ApprovalCard
						comment={comment}
						like={comment.like}
						dislike={comment.dislike}
						onLike={this.handleLike}
						onDislike={this.handleDislike}
					>
						<CommentDetail
							key={comment.id}
							id={comment.id}
							author={comment.name}
							comment={comment.comment}
							time={comment.time}
							onClick={this.onDelete}
						/>
					</ApprovalCard>
				))}
				<CommentForm onSubmit={this.commentSubmit} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
