import { FC, PropsWithChildren } from "react";
import * as S from './button.styles';
import { ButtonProps } from "./button.types";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({type, size, disabled, padding, margin, width, color, outlined, onClick, children}) => {
    return (
        <S.Common
            type={type} 
            size={size} 
            disabled={disabled} 
            padding={padding} 
            margin={margin} 
            width={width} 
            color={color}
            outlined={outlined} 
            onClick={onClick}>{children}</S.Common>
    )
}