import { FC, InputHTMLAttributes } from "react";
import * as S from './input.styles';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <S.InputComponent {...props}></S.InputComponent>
    )
}