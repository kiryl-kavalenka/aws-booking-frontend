import styled from "styled-components"

export const LetterWrapper = styled.div`
    color: #a1a1a1;
    font-size: 1em;
`

export const ItemWrapper = styled.div<{filled?: boolean, noBorderBottom?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    ${({noBorderBottom, filled}) => !noBorderBottom ? `border-bottom: ${filled ? '2px solid #3c3737' : '2px solid #a1a1a1' };` : ''}
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`