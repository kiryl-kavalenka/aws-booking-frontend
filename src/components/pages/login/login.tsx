import { FC, useEffect, useState } from "react"
import { Text } from '../../ui/text';
import { Button } from "../../ui/button";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9 } from "./steps";
import styled from "styled-components";
import { ToggleButton } from "../../ui/toggle-button";

const LoginPageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0 10%;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const LoginPageTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const LoginPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [goAhead, setGoAhead] = useState(true);
    const [goBack, setGoBack] = useState(false);

    useEffect(() => {
        // console.log('currentStep after update(useEffect)', currentStep);

        if (currentStep === 9) {
            setGoAhead(false)
        } else if (currentStep === 1) {
            setGoBack(false)
        } else if (currentStep >= 2 && currentStep <= 8) {
            setGoBack(true)
            setGoAhead(true)
        }
    }, [currentStep]);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1)
    };
  
    const handlePrev = () => {
        setCurrentStep(prevStep => prevStep - 1)
    };

    const handleSignIn = () => {
        console.log('sign in')
    }

    const handleClose = () => {
        console.log('close event')
    }

    return(
        <>
            <LoginPageWrapper>
                <LoginPageTop>
                    {currentStep === 1 ? <Button type="common" onClick={handleSignIn}>Sign In</Button> : <Button type="danger" onClick={handlePrev} disabled={!goBack}>Go Back</Button>}
                    <Text type="title" textAlign="center" width="fit-content">Vamost</Text>
                    <Button type="common" onClick={handleClose}>Close</Button>
                </LoginPageTop>
                {currentStep === 1 && <Step1 /> }
                {currentStep === 2 && <Step2 /> }
                {currentStep === 3 && <Step3 /> }
                {currentStep === 4 && <Step4 /> }
                {currentStep === 5 && <Step5 /> }
                {currentStep === 6 && <Step6 /> }
                {currentStep === 7 && <Step7 /> }
                {currentStep === 8 && <Step8 /> }
                {/* {currentStep === 9 && <Step9 /> } */}
                {/**buttons only for test */}
                <div style={{display: 'flex', gap: '20px', marginTop: '100px'}}>
                    <Button type="danger" onClick={handlePrev} disabled={!goBack}>Prev</Button>
                    <Button type="common" onClick={handleNext} disabled={!goAhead}>Next</Button>
                </div>
            </LoginPageWrapper>
        </>
    )
}