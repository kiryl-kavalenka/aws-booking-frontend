import React, { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import PhoneInput from 'react-phone-number-input';
import {isValidPhoneNumber} from 'react-phone-number-input';
import styled from "styled-components";

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const PhoneInputWrapper = styled.div<{error: boolean}>`
    &:focus {
        outline: none;
        border-bottom: ${({error}) => error ? '2px solid #e13131' : '2px solid #1c1d1f'};
    }
    input {
        border: 0;
        padding-bottom: 5px;
        border-bottom: ${({error}) => error ? '2px solid #e13131' : '2px solid #d8d8da'};
        transition: border-bottom 0.3s linear;
    }

    input:focus {
        outline: none;
        padding-bottom: 5px;
        border-bottom: ${({error}) => error ? '2px solid #e13131' : '2px solid #1c1d1f'};
    }
`

interface Step1Props {
    goAhead: () => void;
}

export const Step1: FC<Step1Props> = ({goAhead}) => {
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
    const [canSignIn, setCanSignIn] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);

    const handlePhoneNumberChange = (value: string | undefined) => {
        setPhoneNumber(value);

        try {
            const isValidPhoneNumberRes = isValidPhoneNumber(String(value));

            setPhoneNumberError(isValidPhoneNumberRes ? false : true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (phoneNumberError || password.length < 8) {
            setCanSignIn(false);
        } else {
            setCanSignIn(true);
        }
    }, [password, phoneNumberError])

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        console.log('sign in event');
        console.log(`phoneNumber and password = ${phoneNumber}  ${password}`);
        goAhead();
    }

    return (
        <>
            <Text type="header" textAlign="center" width="fit-content">Welcome! Let's create your account</Text>
            <FormWrapper>
                <PhoneInputWrapper error={phoneNumberError}>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange} />
                </PhoneInputWrapper>
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    width="fit-content"
                    onChange={handlePasswordChange} />
            </FormWrapper>
            <Text type="param" textAlign="center" width="fit-content">We will send you a text with a verification code. Message and data rates may apply.</Text>
            <Text type="param" textAlign="center" width="fit-content">By signing up you accept the <a href="/terms">Terms of service</a> and <a href="/terms">Privacy Policy.</a></Text>
            <Button type="common" width="100%" onClick={handleSignIn} disabled={!canSignIn}>Sign up</Button>
        </>
    )
}
