import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { CodeInput } from "../../../ui/codeInput";

interface Step2Props {
    goAhead: () => void;
}

export const Step2: FC<Step2Props> = ({goAhead}) => {
    const [digitCode, setDigitCode] = useState('')
    const [canConfirm, setCanConfirm] = useState(false);

    const handleDigitCodeChange = (keysInputed: string[]) => {
        setDigitCode(prev => prev = keysInputed.join(''))
    }

    const handleConfirm = () => {
        console.log('confirm event')
        goAhead()
    }

    const handleSendOver = () => {
        console.log('Send Over Event')
    }

    useEffect(() => {
        digitCode.length === 6 ? setCanConfirm(true) : setCanConfirm(false);
    }, [digitCode])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">Enter the 6-digit code sent to you at "phoneNumber"</Text>
            <CodeInput codeNumber={6} onChange={handleDigitCodeChange}></CodeInput>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    Didn't get a code? 
                    <span 
                        style={{textDecoration: 'underline', color: '#5a5a5c'}} 
                        onClick={handleSendOver}>
                            Send over.
                    </span>
            </Text>
            <Button type="common" width="100%" onClick={handleConfirm} disabled={!canConfirm}>Confirm</Button>
        </>
    )
}