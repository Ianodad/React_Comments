import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author={'sam'} comment="all is great" date="Today at 4:45pm" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Jack" comment="we will do it" date="Today at 5:45pm" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Dwayne" comment="we are the chaps" date="Today at 6:40pm" />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
