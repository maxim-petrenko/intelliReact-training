import React, { useState } from 'react';
import { ButtonState, LikeButtonProps } from './types';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons'


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
        <Button icon={buttonState.isPressed ? <HeartOutlined /> : <HeartFilled />} value={buttonState.likes} onClick={switchLike}/>
    )

}
