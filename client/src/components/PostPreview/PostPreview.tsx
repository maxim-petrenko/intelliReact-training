import cx from 'classnames';
import { format } from 'date-fns';

import { Avatar, Button, Divider, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { PostPreviewProps } from './types';
import { LikeButton } from '../LikeButton';
import styles from './styles.module.scss'

const { Title, Text } = Typography;


export const PostPreview = ({
    author,
    title,
    subtitle,
    publishDate,
    likes,
    isLiked,
    className
}: PostPreviewProps) => {
    return (
        <article className={cx(styles.root, className)}>
            <div className={styles.meta}>
                <div className={styles.origin}>
                    <Avatar size='large' icon={<UserOutlined />} className={styles.avatar}/>
                    <Title level={4} className={styles.person}>{author}</Title>
                    <Title level={4} className={styles.date}>{format(publishDate, 'MMMM d, yyyy')}</Title>
                </div>
                <LikeButton likes={likes} wasPressed={isLiked} />
            </div>
            <Divider className={styles.divider} />
            <div className={styles.content}>
                <Title level={2}>{title}</Title>
                {subtitle && <Text>{subtitle}</Text>}
                <Button type="link" className={styles.moreBtn} >Read more ...</Button>
            </div>

        </article>
    );
};

