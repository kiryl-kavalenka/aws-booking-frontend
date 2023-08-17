import styled from "styled-components";

interface InputContainerProps {
    width?: string;
    gap?: string;
    elementWidth?: string;
    elementHeight?: string;
}

export const Dot = styled.div`
    width: 30%;
    height: 30%;
    background-color: #a1a1a1;
    border-radius: 50%;
`

export const ItemWrapper = styled.div<Pick<InputContainerProps, 'elementWidth' | 'elementHeight' > & {filled: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({elementWidth}) => elementWidth ? elementWidth : '50px'};
    height: ${({elementHeight}) => elementHeight ? elementHeight : '50px'};
    border-bottom: ${({filled}) => filled ? '2px solid #3c3737' : '2px solid #a1a1a1' };
`

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({gap}) => gap ? gap : '15px'};
    width: ${({width}) => width ? width : '100%'};
`