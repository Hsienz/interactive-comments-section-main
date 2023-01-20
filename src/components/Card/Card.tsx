import Comment from "../Message/Comment";
import data from "../../data/data.json";
const Card = () => {
	return (
		<div className="font-Rubik">
			<div className="flex flex-col gap-y-4">
				{data.comments.map((x, i) => (
					<Comment key={i} comment={x} user={data.currentUser} />
				))}
			</div>
		</div>
	);
};

export default Card;
