import styled from "styled-components";

export interface ButtonProps {
    type?: 'common' | 'primary' | 'success' | 'warning' | 'danger';
    size?: 'large' | 'medium' | 'small';
    disabled?: boolean;
    color?: string;
    padding?: string;
    margin?: string;
    width?: string;
    outlined?: boolean;
    active: boolean;
    onClick?: (event?: any) => void;
}

export const Common = styled.button<ButtonProps>`
    background: ${({type, outlined}) => {
        if (outlined) {
            return "white";
        } else {
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
        }
    }};
    border: ${({outlined, type, active}) => {
        // #c2d4d8
        if (outlined) {
            switch (type) {
                case 'common' : 
                    return `2px solid ${active ? '#c2d4d8' : '#545454' }`;
                case 'primary' :
                    return `2px solid ${active ? '#c2d4d8' : '#1795f8' }`
                case 'success' :
                    return `2px solid ${active ? '#c2d4d8' : '#52d064' }`
                case 'warning' :
                    return `2px solid ${active ? '#c2d4d8' : '#ffd965' }`
                case 'danger' :
                    return `2px solid ${active ? '#c2d4d8' : '#ff3e59' }`
                default:
                    return `2px solid ${active ? '#c2d4d8' : '#545454' }`
            }
        } else {
            return '0px'
        }
    }};
    border-radius: 3px;
    box-sizing: border-box;
    color: ${({color, outlined, type, active}) => {
        if (color && !outlined) {
            return color;
        } else if (!color && outlined) {
            switch (type) {
                case 'common' : 
                    return `${active ? '#c2d4d8' : '#545454' }`;
                case 'primary' :
                    return `${active ? '#c2d4d8' : '#1795f8' }`
                case 'success' :
                    return `${active ? '#c2d4d8' : '#52d064' }`
                case 'warning' :
                    return `${active ? '#c2d4d8' : '#ffd965' }`
                case 'danger' :
                    return `${active ? '#c2d4d8' : '#ff3e59' }`
                default:
                    return `${active ? '#c2d4d8' : '#545454' }`
            }
        } else {
            return `${active ? '#c2d4d8' : '#fff' }`;
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