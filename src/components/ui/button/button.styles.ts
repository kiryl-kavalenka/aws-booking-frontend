import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const Common = styled.button<ButtonProps>`
    background: ${({type, outlined}) => {
        if (outlined) {
            return "white";
        } else {
            switch (type) {
                case 'common' : 
                    return '#1c1d1f';
                case 'primary' :
                    return '#1795f8'
                case 'success' :
                    return '#52d064'
                case 'warning' :
                    return '#ffd965'
                case 'danger' :
                    return '#ff3e59'
                default:
                    return '#1c1d1f'
            }
        }
    }};
    border: ${({outlined, type}) => {
        if (outlined) {
            switch (type) {
                case 'common' : 
                    return '2px solid #1c1d1f';
                case 'primary' :
                    return '2px solid #1795f8'
                case 'success' :
                    return '2px solid #52d064'
                case 'warning' :
                    return '2px solid #ffd965'
                case 'danger' :
                    return '2px solid #ff3e59'
                default:
                    return '2px solid #1c1d1f'
            }
        } else {
            return '0px'
        }
    }};
    border-radius: 3px;
    box-sizing: border-box;
    color: ${({color, outlined, type}) => {
        if (color && !outlined) {
            return color;
        } else if (!color && outlined) {
            switch (type) {
                case 'common' : 
                    return '#1c1d1f';
                case 'primary' :
                    return '#1795f8'
                case 'success' :
                    return '#52d064'
                case 'warning' :
                    return '#ffd965'
                case 'danger' :
                    return '#ff3e59'
                default:
                    return '#1c1d1f'
            }
        } else {
            return '#fff';
        }
    }};
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