import { FC, useState } from "react"
import 'react-phone-number-input/style.css'
import styled from "styled-components"
import PhoneInput from 'react-phone-number-input'

const Wrapper = styled.div`
    width: 300px;
    height: fit-content;
    padding: 30px;

    input{
        border: 0;
        padding-bottom: 5px;
        border-bottom: 2px solid #1c1d1f;
    }

    input:focus{
        outline: none;
        padding-bottom: 5px;
        border-bottom: 2px solid #1c1d1f;
    }
`


export const Test: FC = () => {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()

    const handler = (e: any) => {
        setValue(e);
    }
    
    return (
        <>
            <div>TEST PAGE</div>
            <Wrapper>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={handler}/>
            </Wrapper>
            {value}
        </>
    )
}