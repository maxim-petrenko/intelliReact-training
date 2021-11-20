import React from 'react';
import { PostPreviewProps } from '../../components/PostPreview/types';
import { PostPreview } from '../../components/PostPreview';


const posts: PostPreviewProps[] = [
    {
        author: 'Jonh Dowson',
        publishDate: new Date(),
        title: 'They are here - React hooks 2',
        likes: 32,
        isLiked: true,
    },
    {
        author: 'Don Jowson',
        publishDate: new Date(),
        title: 'RTL or Enzyme - who is the king in 2022',
        subtitle: 'Testing the two most popular React testing options in prod',
        likes: 16,
        isLiked: false,
    }
]

export const Posts = () => (
        <main>
            {posts.map(post => <PostPreview {...post} />)}
        </main>
)
