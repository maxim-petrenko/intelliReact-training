import cx from 'classnames'
import React, { useState } from 'react';
import { ButtonState, LikeButtonProps } from './types';
import { Button } from 'antd';
import { Heart } from './Heart';
import styles from './styles.module.scss'


export const LikeButton = ({ likes, wasPressed, changeLikesFN }: LikeButtonProps) => {
    const [buttonState, setButtonState] = useState<ButtonState>({
        likes,
        isPressed: wasPressed
    })

    const switchLike = () => {
        buttonState.isPressed
            ? setButtonState({
                likes: buttonState.likes - 1,
                isPressed: false,
            })
            : setButtonState({
                likes: buttonState.likes + 1,
                isPressed: true,
            })

        changeLikesFN && changeLikesFN()
    }

    return (
        <Button
            icon={<Heart isActive={buttonState.isPressed} />}
            onClick={switchLike}
            className={cx(styles.btn, buttonState.isPressed && styles.btnPressed)}
        >
            {buttonState.likes}
        </Button>
    )

}
