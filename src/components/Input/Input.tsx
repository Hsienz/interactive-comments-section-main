import { useState } from "react";
import { CommentType, UserType } from "../../type/type";
import { getSrc } from "../../data/avatarImages";

const Input = (props: { user: UserType, comments:CommentType[], setComments:([]:CommentType[])=>void }) => {
    const [value, setValue] = useState("")
    const handleOnClick = () => {
        let comment: CommentType = {
            id: -1,
            content: value,
            createdAt: 'now',
            score: 0,
            user: props.user,
        }
        props.setComments( [...props.comments,comment])
        setValue("")
    }
	return (
		<div className="flex whiteBg">
			<img className="avatarIcon" src={getSrc(props.user.image.png)} alt="" />
			<textarea className="" placeholder="Add a comment..." value={value} onChange={(e)=>setValue(e.target.value)}/>
			<button onClick={handleOnClick} className="solid bg-Moderate_blue">Send</button>
		</div>
	);
};

export default Input;
