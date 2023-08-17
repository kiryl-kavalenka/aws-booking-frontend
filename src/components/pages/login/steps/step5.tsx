import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { DateInput } from "../../../ui/dateInput";

export const Step5: FC = () => {
    const [birthDay, setBirthDay] = useState('')
    const [canContinue, setCanContinue] = useState(false);
    const [validateError] = useState('')

    const handleBirthDayChange = (keysInputed: string[]) => {
        console.log('keysInputed', keysInputed);
        if (keysInputed.length === 8) {
            const validDate = `${keysInputed[0]}${keysInputed[1]}.${keysInputed[2]}${keysInputed[3]}.${keysInputed[4]}${keysInputed[5]}${keysInputed[6]}${keysInputed[7]}`
            setBirthDay(prev => prev = validDate)
        }
    }

    const handleContinue = () => {
        console.log('continue')
    }

    useEffect(() => {
        birthDay.length === 10 ? setCanContinue(true) : setCanContinue(false);
        console.log('birthDay', birthDay)
    }, [birthDay])

    useEffect(() => {
        console.log('validateError', validateError)
    }, [validateError])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">My birthday is...</Text>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    Your age will be public.
            </Text>
            <DateInput validateError={validateError} onChange={handleBirthDayChange}/>
            {/* <input type="date" placeholder="date" value={birthDay} onChange={handleBirthDayChange}></input> */}
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}