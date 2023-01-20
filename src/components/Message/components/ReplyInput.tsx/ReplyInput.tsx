import { SetStateAction, useState } from "react"
import { CommentType, UserType } from "../../../../type/type"

export type ReplyInputPropType = {
    user: UserType,
    comment: CommentType,
    replies: CommentType[],
    setReplies: ([]:CommentType[])=>void,
    setToggleReply: (x:boolean) => void,
}
const ReplyInput = ( props:ReplyInputPropType ) => {
    const [text,setText] = useState("")
    const handleOnClick = () => {
        let reply: CommentType = {
            id: -1,
            content: text,
            createdAt: 'now',
            score: 0,
            user: props.user,
            replyingTo: props.comment.user.username,
        }
        props.setReplies( [...props.replies, reply ] )
        props.setToggleReply( false )
    }
    return (
        <div className="flex whiteBg">
            <img className="h-10" src={`/src/assets/${props.user.image.png}`} alt="" />
            <textarea placeholder="Enter your reply here..." className="min-h-[96px]" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={handleOnClick} className="solid bg-Moderate_blue !h-12">
                Reply
            </button>
        </div>
    )
}

export default ReplyInput