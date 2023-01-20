import { useState } from "react";
import { CommentType, UserType } from "../../type/type";
import ScoreBar from "./components/ScoreBar/ScoreBar";
import iconReply from "../../assets/images/icon-reply.svg";
import ReplyInput from "./components/ReplyInput.tsx/ReplyInput";
export type CommentPropType = {
	comment: CommentType;
	user: UserType;
};

const Comment = (props: CommentPropType) => {
	const [replies, setReplies] = useState(
		props.comment.replies ? props.comment.replies : []
	);
	const [toggleReply, setToggleReply] = useState(false);
	return (
		<div className="">
			<div className="flex flex-col gap-y-4">
				<div className="bg-White p-4 rounded-lg">
					<div className="flex items-center gap-x-4">
						<img
							className="h-10"
							src={"/src/assets/" + props.comment.user.image.png}
							alt=""
						/>
						<p className="text-Dark_blue font-bold">
							{props.user.username}
						</p>
						<p className="text-Grayish_Blue">
							{props.comment.createdAt}
						</p>
					</div>
					<p className="text-Grayish_Blue my-4">
						{props.comment.content}
					</p>
					<div className="flex justify-between">
						<ScoreBar score={props.comment.score} />
						<button
							className="flex items-center text-Moderate_blue gap-x-2"
							onClick={() => setToggleReply(!toggleReply)}
						>
							<img src={iconReply} alt="" />
							Reply
						</button>
					</div>
				</div>
				{(replies || toggleReply) && (
					<div className="flex justify-between">
						<div className="bg-Light_gray w-1 mx-5"></div>
						<div className="flex flex-col basis-full">
							{replies && (
								<div className="flex flex-col gap-y-4">
									{replies.map((x, i) => (
										<Comment
											key={i}
											comment={x}
											user={props.user}
										/>
									))}
								</div>
							)}
							{toggleReply && (
								<ReplyInput
									{...props}
									replies={replies}
									setReplies={setReplies}
									setToggleReply={setToggleReply}
								/>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
