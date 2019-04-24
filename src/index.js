import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

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

const App = () => {
	const comments = Comments.map((comment) => {
		return (
			<ApprovalCard>
				<CommentDetail author={comment.name} comment={comment.comment} time={comment.time} />
			</ApprovalCard>
		);
	});

	return <div className="ui container comments">{comments}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
