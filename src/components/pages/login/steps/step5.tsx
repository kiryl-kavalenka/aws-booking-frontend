import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";

export const Step5: FC = () => {
    const [birthDay, setBirthDay] = useState('')
    const [canContinue, setCanContinue] = useState(false);

    const handleBirthDayChange = (event: any) => {
        setBirthDay(event.target.value);
    }

    const handleContinue = () => {
        console.log('continue')
    }

    useEffect(() => {
        birthDay.length >= 5 ? setCanContinue(true) : setCanContinue(false);
    }, [birthDay])

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
            <input type="date" placeholder="date" value={birthDay} onChange={handleBirthDayChange}></input>
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}