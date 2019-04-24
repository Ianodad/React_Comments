import React from 'react';
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

const CommentSubmit = (commented) => {
	const id = Comments.length + 1;
	const time = new Date().toLocaleTimeString();
	const name = 'Anonymous';
	const comment = commented;


	Comments.push({ id: id, time: time, name: name, comment: comment });
	console.log('finished')
};

const App = () => {

	componentDidMount() {
		const comments = Comments.map((comment) => {
			return (
				<ApprovalCard>
					<CommentDetail key={comment.id} author={comment.name} comment={comment.comment} time={comment.time} />
				</ApprovalCard>
			);
		});
	}
	

	return (
		<div className="ui container comments">
			{comments} <CommentForm onSubmit={CommentSubmit} />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
