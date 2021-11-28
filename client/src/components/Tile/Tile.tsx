import cx from 'classnames';

import { TileProps } from './types';

import styles from './styles.module.scss'

export const Tile = ({children, className}: TileProps) => (
    <div className={cx(styles.tile, className)} >
        {children}
    </div>
)

