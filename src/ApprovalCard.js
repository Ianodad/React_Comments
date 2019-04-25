import React from 'react';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content"> {props.children} </div>
			<div className="extra content">
				<div className="actions">
					<div className="ui mini label labeled button">
						<div className="ui button">
							<i className="heart icon" /> Like
						</div>
						<a className="ui basic label"> 0 </a>
					</div>
					<div className="ui mini label labeled button">
						<div className="ui button">
							<i className="frown icon" /> Dislike
						</div>
						<a className="ui basic label"> 0 </a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
