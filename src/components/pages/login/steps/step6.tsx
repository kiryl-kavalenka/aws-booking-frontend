import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";

export const Step6: FC = () => {
    const genderCases = ['Woman', 'Man', 'More']
    const [gender, setGender] = useState('')
    const [canContinue, setCanContinue] = useState(false);

    const handleGender = (event: any) => {
        console.log(event.target.innerHTML)
        setGender(event.target.innerHTML);
    }

    const handleContinue = () => {
        console.log('continue')
    }

    useEffect(() => {
        console.log('use effect gender', gender)
        if (gender && gender === 'More') {
            setCanContinue(false)
        } else {
            setCanContinue(true)
        }
    }, [gender])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">I'm a...</Text>
            {gender !== 'More' ? genderCases.map((item) => (
                <Button type="common" width="100%" onClick={handleGender} outlined>{item}</Button>
            )) : <Button type="common" width="100%" onClick={handleGender} outlined>TEST</Button>}
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
            <ToggleButton type="danger" width="100%" outlined>Toggle</ToggleButton>
        </>
    )
}