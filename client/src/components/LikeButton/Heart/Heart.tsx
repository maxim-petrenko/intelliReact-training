import React from 'react';
import { HeartProps } from './types';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import styles from './styles.module.scss'


export const Heart = ({ isActive }: HeartProps) => (
    isActive
        ? <HeartFilled color='#fff' className={styles.filled} />
        : <HeartOutlined color='#fff' className={styles.outlined} />
)
