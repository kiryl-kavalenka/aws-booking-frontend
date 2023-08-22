import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { CodeInput } from "../../../ui/codeInput";
import { useDispatch, useSelector } from "react-redux";
import { continueStep2Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step2Props {
    goAhead: () => void;
}

export const Step2: FC<Step2Props> = ({goAhead}) => {
    const dispatch = useDispatch();
    const { sixDigitCode } = useSelector(
        (state: RootState) => state.login
    );

    const [digitCode, setDigitCode] = useState('')
    const [canConfirm, setCanConfirm] = useState(false);

    const handleDigitCodeChange = (keysInputed: string[]) => {
        setDigitCode(prev => prev = keysInputed.join(''))
    }

    const handleConfirm = () => {
        console.log('confirm event')
        dispatch(continueStep2Clicked({sixDigitCode: digitCode}))
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
            <CodeInput codeNumber={6} value={sixDigitCode ? sixDigitCode : ''} onChange={handleDigitCodeChange}></CodeInput>
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