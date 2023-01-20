import Comment from "../Message/Comment";
import data from "../../data/data.json";
import { useState } from "react";
import { CommentType } from "../../type/type";
import DeleteWarning from "../Message/components/DeleteWarning/DeleteWarning";
import Input from "../Input/Input";
const Card = () => {
	const [comments, setComments] = useState<CommentType[]>(data.comments);
	return (
		<div className="font-Rubik">
			<div className="flex flex-col gap-y-4">
				{comments.map((x, i) => (
					<Comment
						key={i}
						comment={x}
						user={data.currentUser}
						atWhereCommentArray={i}
						inWhichCommentArray={comments}
						setInWhichCommentArray={setComments}
					/>
				))}
				<Input user={data.currentUser} comments={comments} setComments={setComments}/>
			</div>
		</div>
	);
};

export default Card;
