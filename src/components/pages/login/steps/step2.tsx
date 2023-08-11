import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";


export const Step2: FC = () => {
    const [digitCode, setDigitCode] = useState('')
    const [canConfirm, setCanConfirm] = useState(false);

    const handleDigitCodeChange = (event: any) => {
        setDigitCode(event.target.value)
    }

    const handleConfirm = () => {
        console.log('confirm event')
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
            <input type="text" placeholder="Enter your phone number" value={digitCode} onChange={handleDigitCodeChange}></input>
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