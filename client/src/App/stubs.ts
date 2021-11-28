import { Post } from '../types/Post';
import { addYears } from 'date-fns';


export const postsStub: Post[] = [
    {
        author: 'Jonh Dowson',
        publishDate: new Date(),
        title: 'They are here - React hooks 2',
        likes: 32,
        isLiked: true,
        text: 'Text of the first article',
    },
    {
        author: 'Don Jowson',
        publishDate: addYears(new Date(),-1),
        title: 'RTL or Enzyme - who is the king in 2022',
        subtitle: 'Testing the two most popular React testing options in prod',
        likes: 16,
        isLiked: false,
        text: 'Text of the second article',
    }
]
