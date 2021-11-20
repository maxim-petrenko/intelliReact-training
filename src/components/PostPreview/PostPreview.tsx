import { Avatar, Button, Divider, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PostPreviewProps } from './types';
import { format } from 'date-fns';
import { LikeButton } from '../LikeButton';
import './styles.css'

const { Title, Text } = Typography;


export const PostPreview = ({
    author,
    title,
    subtitle,
    publishDate,
    likes,
    isLiked,
}: PostPreviewProps) => {
    return (
        <article className='root'>
            <Divider />
            <div className='meta'>
                <div className='origin'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <Title level={4}>{author}</Title>
                    <Title level={4}>{format(publishDate, 'MMMM d, yyyy')}</Title>
                </div>
                <LikeButton likes={likes} wasPressed={isLiked} />
            </div>
            <Title level={2}>{title}</Title>
            {subtitle && <Text>{subtitle}</Text>}
            <Button type="link">Read more ...</Button>
        </article>
    );
};

