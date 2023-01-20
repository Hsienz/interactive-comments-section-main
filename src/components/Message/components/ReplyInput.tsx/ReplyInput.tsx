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
    const [text,setText] = useState(`@${props.comment.user.username} `)
    const handleOnClick = () => {
        let reply: CommentType = {
            id: -1,
            content: text,
            createdAt: 'now',
            score: 0,
            user: props.user,
        }
        props.setReplies( [...props.replies, reply ] )
        props.setToggleReply( false )
    }
    return (
        <div className="flex justify-between bg-White p-4">
            <img className="h-10" src={`/src/assets/${props.user.image.png}`} alt="" />
            <textarea className="w-full mx-2 min-h-[96px] rounded-lg outline-Moderate_blue outline-[0.01rem]" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={handleOnClick} className="uppercase bg-Moderate_blue text-White px-7 py-3 rounded-lg h-12">
                Reply
            </button>
        </div>
    )
}

export default ReplyInput