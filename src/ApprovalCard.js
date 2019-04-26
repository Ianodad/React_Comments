import React from 'react';

const ApprovalCard = (props) => {
	// const handleLike = () => {
	// 	console.log(props.comment);
	// 	props.onLike(props.comment)
	// };
	// const handleDisLike = () => {
	// 	console.log(props.comment);
	// 	// props.onDislike(props.comment);
	// };

	return (
		<div className="ui card">
			<div className="content"> {props.children} </div>
			<div className="extra content">
				<div className="actions">
					<div className="ui mini label labeled button">
						<div className="ui button" onClick={() => props.onLike(props.comment)}>
							<i className="heart icon" /> Like
						</div>
						<a className="ui basic label"> {props.like} </a>
					</div>
					<div className="ui mini label labeled button">
						<div className="ui button" onClick={() => props.onDislike(props.comment)}>
							<i className="frown icon" /> Dislike
						</div>
						<a className="ui basic label"> {props.dislike} </a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
