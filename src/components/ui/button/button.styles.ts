import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const Common = styled.button<ButtonProps>`
    background: ${({type}) => {
        switch (type) {
            case 'common' : 
                return '#545454';
            case 'primary' :
                return '#1795f8'
            case 'success' :
                return '#52d064'
            case 'warning' :
                return '#ffd965'
            case 'danger' :
                return '#ff3e59'
            default:
                return '#545454'
        }
    }};
    border: 0px;
    border-radius: 3px;
    box-sizing: border-box;
    color: ${({color}) => color ? color : '#fff'};
    width: ${({width}) => width};
    cursor: pointer;
    display: inline-block;
    height: ${({size}) => {
        switch (size) {
            case 'large': 
                return '48px';
            case 'medium':
                return '32px';
            case 'small':
                return '24px';
            default:
                return '32px';
        }
    }};
    letter-spacing: .1rem;
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding ? padding : ' 0 12px'};
    text-align: center;
    text-decoration: none;
    user-select: none;

    &:disabled {
        pointer-events: none; /* Отключаем события указателя */
        opacity: 0.6; /* Понижаем прозрачность */
    }

    &:hover {
        opacity: 0.9;
    }
`;