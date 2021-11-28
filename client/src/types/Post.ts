export type Post = {
    author: string
    publishDate: Date
    title: string
    subtitle? : string
    likes: number
    isLiked: boolean
    text: string
}

export type PostPreview = Omit<Post,'text'>
