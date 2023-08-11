import { FC, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";

export const Step1: FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const handlePhoneNumberChange = (event: any) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        console.log('sign in event')
        console.log(`setPhoneNumber and password = ${phoneNumber}  ${password}`)
    }

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">Welcom! Let's create your account</Text>
            <input type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={handlePhoneNumberChange}></input>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}></input>
            <Text type="param" textAlign="center" width="fit-content">We will send you a text with a verification code. Message and data rates may apply.</Text>
            <Text type="param" textAlign="center" width="fit-content">By signing up you accept the <a href="/terms">Terms of service</a> and <a href="/terms">Privacy Policy.</a></Text>
            <Button type="common" width="100%" onClick={handleSignIn}>Sign up</Button>
        </>
    )
}