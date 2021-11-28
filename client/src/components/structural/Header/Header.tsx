import { Typography } from 'antd';
import styles from './styles.module.scss'

export const Header = () =>  (
    <header className={styles.header}
    >
     <Typography.Title underline className={styles.text}>
         Welcome to my React Blog
     </Typography.Title>
    </header>
)
