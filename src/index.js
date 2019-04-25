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
		time: '4:25pm'
	},
	{
		id: 1,
		name: 'Jack',
		comment: 'We will do it',
		time: '5:45pm'
	},
	{
		id: 2,
		name: 'Dwayne',
		comment: 'We are the chaps',
		time: '6:40pm'
	}
];



class App extends Component {
	state = {
		comments: Comments
	};


// this function get the new comment from the child the added it to the new state//
	commentSubmit = (commented) => {

		let comments = this.state.comments



		const id = Comments.length + 1;
		const time = new Date().toLocaleTimeString();
		const name = 'Anonymous';
		const comment = commented;

		comments.push({
			id: id,
			time: time,
			name: name,
			comment: comment
		});

		this.setState({
			comments
		})
		console.log('finished');
	};
	render() {
		return (
			<div className="ui container comments">
				{this.state.comments.map((comment) => (
					<ApprovalCard>
						<CommentDetail
							key={comment.id}
							author={comment.name}
							comment={comment.comment}
							time={comment.time}
						/>
					</ApprovalCard>
				))}

				<CommentForm onSubmit={this.commentSubmit} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
