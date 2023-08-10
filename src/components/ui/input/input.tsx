import { FC, forwardRef, KeyboardEventHandler, useId } from 'react';
// import {
//   englishLetterValidator,
//   integerValidator,
//   letterValidator,
//   pasteValidator,
//   priceValidator
// } from './utils';
import * as S from './input.styles';
import { InputProps } from './input.types';

export const Input: FC = () => {
    const id = useId();

    // const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    //   switch (type) {
    //     case 'price':
    //       return priceValidator(event);
    //     case 'integer':
    //       return integerValidator(event);
    //     case 'letters':
    //       return letterValidator(event);
    //     case 'english':
    //       return englishLetterValidator(event);
    //     default:
    //       return undefined;
    //   }
    // };

    // return (
    //   <S.Wrap>
    //     <S.Input
    //       {...props}
    //       type={type}
    //       ref={ref}
    //       isError={!!error}
    //       id={id}
    //       onPaste={preventPaste ? pasteValidator : undefined}
    //       onKeyDown={onKeyDown}
    //     />
    //     <S.Label isError={!!error} isEmpty={!!value?.toString()} htmlFor={id}>
    //       {label}
    //     </S.Label>
    //     {!!error && <S.Error>{error}</S.Error>}
    //   </S.Wrap>
    // );
    return (
        <>
            <S.Input
                id={id}
                autoComplete="off"
                // onPaste={preventPaste ? pasteValidator : undefined}
                // onKeyDown={onKeyDown} 
            />
        </>
    );
  }

Input.displayName = 'Input';