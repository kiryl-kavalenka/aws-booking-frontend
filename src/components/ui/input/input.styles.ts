import styled from 'styled-components';

// export const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 300px;
//   min-width: 50px;
//   position: relative;
// `;

export const Label = styled.label<{ isError: boolean; isEmpty: boolean }>`
  color: ${({ isError }) => (isError ? 'darkred' : '#434344')};
  border-radius: 5px;
  position: absolute;
  background-color: #fff;
  padding: 0 5px;
  transition: 0.2s ease-in-out all;

  font-size: ${({ isEmpty }) => isEmpty && '12px'};
  top: ${({ isEmpty }) => (isEmpty ? '-10px' : '10px')};
  left: ${({ isEmpty }) => (isEmpty ? '10px' : '12px')};
`;

// export const Input = styled.input<{ isError: boolean }>`
//   padding: 10px;
//   border-radius: 5px;
//   outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#dadada'}`};
//   height: 39.2px;
//   cursor: ${({ readOnly }) => readOnly && 'default'};

//   :hover,
//   :focus {
//     outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#434344'}`};
//   }

//   &:focus ~ ${Label} {
//     top: -10px;
//     font-size: 12px;
//     padding: 0 5px;
//     left: 10px;
//   }
// `;

export const Input = styled.input`
    border: none;
    outline: none;
    padding: 7px 0;
    box-sizing: border-box; 
    border-bottom: 1px solid #ccc;  
`;

export const FocusBorder = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3399FF;
    transition: 0.4s;
`;