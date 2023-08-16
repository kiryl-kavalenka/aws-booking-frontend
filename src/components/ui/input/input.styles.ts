import styled from "styled-components"

export const InputComponent = styled.input`
    border: none;
    border-bottom: 2px solid #d8d8da;
    box-sizing: border-box;
    padding-bottom: 10px;

    transition: border-bottom 0.3s linear;

    &:focus {
        outline: none;
        border-bottom: 2px solid #1c1d1f;
    }
`