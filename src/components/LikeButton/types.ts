export type LikeButtonProps = {
    likes: number,
    wasPressed: boolean,
    changeLikesFN?: Function,
}

export type ButtonState = {
    likes: number,
    isPressed: boolean,
}
