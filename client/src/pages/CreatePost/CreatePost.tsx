import React, { useCallback, useContext } from 'react';
import { PostsContext } from '../../App/App';
import { CreatePostForm } from './CreatePostForm';
import { Tile } from '../../components/Tile';


export const CreatePost = () => {
    const { posts, setPosts } = useContext(PostsContext)

    const onFinish = useCallback((values: any) => {
        setPosts([...posts, {
            ...values,
            likes: Math.round(Math.random() * 50),
            publishDate: new Date(),
            isLikes: false
        }])
        console.log(posts)
    }, [posts, setPosts])

    console.log('Create post rendered')

    return (
        <section >
            <Tile>
                <CreatePostForm onFinishFN={onFinish} />
            </Tile>
        </section>
    )
};
