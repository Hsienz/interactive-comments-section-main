import { useState } from "react";
import { CommentType, UserType } from "../../type/type";
import ScoreBar from "./components/ScoreBar/ScoreBar";
import iconReply from "../../assets/images/icon-reply.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconEdit from "../../assets/images/icon-edit.svg";
import ReplyInput from "./components/ReplyInput.tsx/ReplyInput";
import Button from "./components/Button/Button";
import DeleteWarning from "./components/DeleteWarning/DeleteWarning";
export type CommentPropType = {
	comment: CommentType;
	user: UserType;
	inWhichCommentArray: CommentType[];
	atWhereCommentArray: number;
	setInWhichCommentArray: ([]: CommentType[]) => void;
};

const deleteComments = (
	comments: CommentType[],
	setComments: ([]: CommentType[]) => void,
	idx: number
) => {
	setComments(comments.slice(0, idx).concat(comments.slice(idx + 1)));
};

const Comment = (props: CommentPropType) => {
	const [replies, setReplies] = useState(
		props.comment.replies ? props.comment.replies : []
	);
	const [toggleReply, setToggleReply] = useState(false);
	const [toggleDeleteWarning, setToggleDeleteWarning] = useState(false);
	const isSelfComment = () => {
		return props.user.username == props.comment.user.username;
	};
	const deleteSelf = () => {
		deleteComments(
			props.inWhichCommentArray,
			props.setInWhichCommentArray,
			props.atWhereCommentArray
		);
	};
	return (
		<div className="">
			<div className={`${toggleDeleteWarning ? "" : "hidden"}`}>
				<DeleteWarning
					cancel={() => setToggleDeleteWarning(false)}
					accept={() => deleteSelf()}
				/>
			</div>
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
						{isSelfComment() && (
							<div className="px-2 rounded-sm bg-Moderate_blue">
								<p className="text-White font-medium">you</p>
							</div>
						)}
						<p className="text-Grayish_Blue">
							{props.comment.createdAt}
						</p>
					</div>
					<p className="text-Grayish_Blue my-4">
						{props.comment.content}
					</p>
					<div className="flex justify-between">
						<ScoreBar score={props.comment.score} />
						{isSelfComment() ? (
							<div className="flex gap-x-4">
								<Button
									value="Delete"
									onClick={() => setToggleDeleteWarning(true)}
									icon={iconDelete}
									textColor="text-Soft_Red"
								/>
								<Button
									value="Edit"
									onClick={() => {}}
									icon={iconEdit}
									textColor="text-Moderate_blue"
								/>
							</div>
						) : (
							<Button
								value="Reply"
								onClick={() => setToggleReply(!toggleReply)}
								icon={iconReply}
								textColor="text-Moderate_blue"
							/>
						)}
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
											inWhichCommentArray={replies}
											atWhereCommentArray={i}
											setInWhichCommentArray={setReplies}
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
