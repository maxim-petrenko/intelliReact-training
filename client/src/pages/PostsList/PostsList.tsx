import React, { useContext } from 'react';
import { PostPreview } from '../../components/PostPreview';
import { PostsContext } from '../../App/App';
import { Post } from '../../types/Post';
import { Tile } from '../../components/Tile';
import styles from './styles.module.scss'


export const PostsList = () => {
        const { posts } = useContext(PostsContext)
        return (
            <section className={styles.wrapper}>
                {posts.map((post: Post) => (
                    <Tile key={post.author + post.text.slice(0,6)} className={styles.tile}>
                        <PostPreview {...post} />
                    </Tile>))}
            </section>
        );
}
