import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

export const Step3: FC = () => {
    const [email, setEmail] = useState('')
    const [canContinue, setCanContinue] = useState(false);

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    const handleContinue = () => {
        console.log('continue')
    }

    useEffect(() => {
        email.length >= 5 ? setCanContinue(true) : setCanContinue(false);
    }, [email])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">What's your email</Text>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    Don't lose access to your  account, verify your email. 
            </Text>
            <Input 
                type="email" 
                name="email" 
                placeholder="Enter your emial address" 
                width="fit-content"
                onChange={handleEmailChange}
            />
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}