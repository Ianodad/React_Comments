import React from 'react';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
			<div className="extra content">
				<div class="actions">
					<div class="ui mini label labeled button" tabindex="0">
						<div class="ui button">
							<i class="heart icon" /> Like
						</div>
						<a class="ui basic label">0</a>
					</div>
					<div class="ui mini label labeled button " tabindex="0">
						<div class="ui button">
							<i class="frown icon" /> Dislike
						</div>
						<a class="ui basic label">0</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
