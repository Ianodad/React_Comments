import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
	const deleteComment = () => {
		console.log(props.id);
		props.onClick(props.id);
	};
	return (
		<div>
			<div className="comment">
				<a href="/" className="avatar">
					<img src={faker.image.avatar()} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.author}
					</a>
					<div className="metadata">
						<span className="date"> {props.time} </span>
						<button className="ui button mini" onClick={deleteComment}>
							Delete
						</button>
					</div>
					<div className="text"> {props.comment} </div>
				</div>
			</div>
		</div>
	);
};

export default CommentDetail;
