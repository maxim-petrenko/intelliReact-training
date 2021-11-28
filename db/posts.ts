declare type Post = {
    author: string
    publishTime: string
    title: string
    subtitle? : string
    likes: number
    isLiked: boolean
    text: string
}

export const posts: Post[] = [
    {
        author: 'Jonh Dowson',
        publishTime: '1630000911031',
        title: 'They are here - React hooks 2',
        likes: 32,
        isLiked: true,
        text: 'Text of the first article',
    },
    {
        author: 'Don Jowson',
        publishTime: '163100090031',
        title: 'RTL or Enzyme - who is the king in 2022',
        subtitle: 'Testing the two most popular React testing options in prod',
        likes: 16,
        isLiked: false,
        text: 'Text of the second article',
    }
]
