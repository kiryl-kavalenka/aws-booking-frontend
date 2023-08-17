import { FC, useEffect, useState } from "react";
import * as S from './dateInput.styles'
import { DateInputProps } from "./dateInput.types";

export const DateInput: FC<DateInputProps> = ({validateError , onChange}) => {
    const AMOUNT_OF_DIGITS = 8;
    const BACKGROUND_LETTERS = ['M', 'M', '/', 'D', 'D', '/', 'Y', 'Y', 'Y', 'Y']
    const [keysPressed, setKeysPressed] = useState<string[]>([])
    const [validError, setValidError] = useState('');

    const handleKeyPres = (event: any) => {
        if (keysPressed.length < AMOUNT_OF_DIGITS) {
            setKeysPressed(prev => prev = [...prev, event.key])
        }
    }

    const validMM = (month: number) => {
        return month > 0 && month <= 12 ? true : false;
    }

    const validDD = (day: number, month: number) => {
        const isDayValid = day > 0 && day <= 31 ? true : false;
        if (isDayValid) {
            switch(month) {
                case 1:
                    return day > 0 && day <= 31 ? true : false;
                case 2:
                    return day > 0 && day <= 29 ? true : false;
                case 3:
                    return day > 0 && day <= 31 ? true : false;
                case 4:
                    return day > 0 && day <= 30 ? true : false;
                case 5:
                    return day > 0 && day <= 31 ? true : false;
                case 6:
                    return day > 0 && day <= 30 ? true : false;
                case 7:
                    return day > 0 && day <= 31 ? true : false;
                case 8:
                    return day > 0 && day <= 31 ? true : false;
                case 9:
                    return day > 0 && day <= 30 ? true : false;
                case 10:
                    return day > 0 && day <= 31 ? true : false;
                case 11:
                    return day > 0 && day <= 30 ? true : false;
                case 12:
                    return day > 0 && day <= 31 ? true : false;
            }
        } else {
            return false;
        }
    }

    const validYYYY = (year: number) => {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 120;
        const maxYear = currentYear - 1;

        if (year < minYear || year > maxYear) {
            return false;
        }

        return true;
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Backspace') {
            setKeysPressed(prev => prev = prev.slice(0, -1))
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPres)
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keypress', handleKeyPres)
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    useEffect(() => {
        if (keysPressed.length === 2) {
            if (!validMM(Number(keysPressed.join('')))) {
                setValidError(prev => prev = 'month is not valid')
            }
        }

        if (keysPressed.length === 4) {
            if (!validDD(Number([keysPressed[2], keysPressed[3]].join('')), Number([keysPressed[0], keysPressed[1]].join('')))) {
                setValidError(prev => prev = 'day is not valid')
            }
        }
        
        if (keysPressed.length === 8) {
            if (!validYYYY(Number([keysPressed[4], keysPressed[5], keysPressed[6], keysPressed[7]].join('')))) {
                setValidError(prev => prev = 'year is not valid')
            }
        }

        onChange(keysPressed);

    }, [keysPressed, onChange])

    useEffect(() => {
        if(validError.length !== 0) {
            console.log('We have a problem: ', validError)
            validateError = validError;
        }
    }, [validError])

    const MM = Array.from({ length: 2 }, (_, index) => (
        <S.ItemWrapper key={index} filled={!!keysPressed[index]}>
            {
                keysPressed[index] ? keysPressed[index] : <S.LetterWrapper>{BACKGROUND_LETTERS[index]}</S.LetterWrapper>
            }
        </S.ItemWrapper>
    ));

    const DD = Array.from({ length: 2 }, (_, index) => (
        <S.ItemWrapper key={index} filled={!!keysPressed[index + 2]}>
            {
                keysPressed[index + 2] ? keysPressed[index + 2] : <S.LetterWrapper>{BACKGROUND_LETTERS[index + 3]}</S.LetterWrapper>
            }
        </S.ItemWrapper>
    ));

    const YYYY = Array.from({ length: 4 }, (_, index) => (
        <S.ItemWrapper key={index} filled={!!keysPressed[index + 4]}>
            {
                keysPressed[index + 4] ? keysPressed[index + 4] : <S.LetterWrapper>{BACKGROUND_LETTERS[index + 6]}</S.LetterWrapper>
            }
        </S.ItemWrapper>
    ));
    
    
    return (
        <>
            <S.InputContainer>
                {
                  MM  
                }
                <S.ItemWrapper noBorderBottom={true}>
                    <S.LetterWrapper>{BACKGROUND_LETTERS[2]}</S.LetterWrapper>
                </S.ItemWrapper>
                {
                  DD  
                }
                <S.ItemWrapper noBorderBottom={true}>
                    <S.LetterWrapper>{BACKGROUND_LETTERS[2]}</S.LetterWrapper>
                </S.ItemWrapper>
                {
                  YYYY  
                }
            </S.InputContainer>
        </>
    )
}