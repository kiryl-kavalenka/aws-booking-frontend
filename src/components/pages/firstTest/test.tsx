import { FC, useEffect, useState } from "react"
import styled from "styled-components";

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #a1a1a1;
    border-radius: 50%;
`

const ItemWrapper = styled.div<{filled: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-bottom: ${({filled}) => filled ? '2px solid #3c3737' : '2px solid #a1a1a1' };
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const Test: FC = () => {
    const AMOUNT_OF_DIGITS = 6;
    let [keysPressed, setKeysPressed] = useState<string[]>([])

    const handleKeyPres = (event: any) => {
        if (keysPressed.length < AMOUNT_OF_DIGITS) {
            setKeysPressed(prev => prev = [...prev, event.key])
        }
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Backspace') {
            console.log('Нажата клавиша Backspace');
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
        console.log('keysPressed', keysPressed)
    }, [keysPressed])

    const dots = Array.from({ length: AMOUNT_OF_DIGITS }, (_, index) => (
        <ItemWrapper key={index} filled={!!keysPressed[index]}>
            {
                keysPressed[index] ? keysPressed[index] : <Dot/>
            }
        </ItemWrapper>
    ));
    
    
    return (
        <>
            <div>TEST PAGE</div>

            <InputContainer>
                {
                  dots  
                }
            </InputContainer>
        </>
    )
}