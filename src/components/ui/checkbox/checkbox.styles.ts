import styled from "styled-components"

interface CheckboxStyleProps {
    width?: string;
    marginLeft?: string;
}

export const CheckboxContainer = styled.div<CheckboxStyleProps>`
    display: flex;
    align-items: center;
    width: ${({width}) => width ? width : '100%'};


    label {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: ${({width}) => width ? width : '100%'};

        &:hover {
            &::after {
                background-color: #86868a;
            }
        }
    }

    input {
        cursor: pointer;
        position: absolute;
        opacity: 0;
    }

    input:checked {
        &+label::after {
            content: '\\002714';
            color: white;
            background-color: #1e1e20;
            display: flex;
            justify-content: center;
            align-items: center;
            /* margin-left: 0.5em; */
            margin-left: auto;
        }
    }

    label::after {
        content: '';
        border: 0.05em solid black;
        height: 1em;
        width: 1em;
        border-radius: 0.15em;
        margin-left: auto;
    }
`;

