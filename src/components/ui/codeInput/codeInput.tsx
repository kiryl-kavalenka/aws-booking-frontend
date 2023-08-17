import { FC, useEffect, useState } from "react";
import * as S from './codeInput.styles';
import { CodeInputProps } from "./codeInput.types";

export const CodeInput: FC<CodeInputProps> = ({codeNumber, onChange, width, gap, elementWidth, elementHeight}) => {
    let [keysPressed, setKeysPressed] = useState<string[]>([])

    const handleKeyPres = (event: any) => {
        if (keysPressed.length < codeNumber) {
            setKeysPressed(prev => prev = [...prev, event.key])
        }
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
        // console.log('keysPressed', keysPressed)
        onChange(keysPressed)
    }, [keysPressed, onChange])

    const dots = Array.from({ length: codeNumber }, (_, index) => (
        <S.ItemWrapper key={index} filled={!!keysPressed[index]} elementWidth={elementWidth} elementHeight={elementHeight}>
            {
                keysPressed[index] ? keysPressed[index] : <S.Dot/>
            }
        </S.ItemWrapper>
    ));
    
    
    return (
        <>
            <S.InputContainer width={width} gap={gap}>
                {
                  dots  
                }
            </S.InputContainer>
        </>
    )
}