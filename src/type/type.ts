export type UserType = {
    image : {
        png: string,
        webp: string,
    }
    username: string,
}

export type CommentType = {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: UserType,
    replies?: CommentType[]
}