import { FC, useEffect, useState } from "react"
import { Text } from '../../ui/text';
import { Button } from "../../ui/button";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9 } from "./steps";

export const LoginPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [goAhead, setGoAhead] = useState(true);
    const [goBack, setGoBack] = useState(false);

    useEffect(() => {
        console.log('currentStep after update(useEffect)', currentStep);

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
    return(
        <>
        {console.log('currentStep in render', currentStep)}
            <Text type="header">Login Page</Text>
            {currentStep === 1 && <Step1 /> }
            {currentStep === 2 && <Step2 /> }
            {currentStep === 3 && <Step3 /> }
            {currentStep === 4 && <Step4 /> }
            {currentStep === 5 && <Step5 /> }
            {currentStep === 6 && <Step6 /> }
            {currentStep === 7 && <Step7 /> }
            {currentStep === 8 && <Step8 /> }
            {currentStep === 9 && <Step9 /> }
            <br/>
            <div style={{display: 'flex', gap: '20px'}}>
                <Button type="danger" onClick={handlePrev} disabled={!goBack}>Prev</Button>
                <Button type="common" onClick={handleNext} disabled={!goAhead}>Next</Button>
            </div>
        </>
    )
}