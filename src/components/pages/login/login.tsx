import { FC, useState } from "react"
import { Text } from '../../ui/text';
import { Button } from "../../ui/button";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";

export const LoginPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
    return(
        <>
            <Text type="header">Login Page</Text>
            {currentStep === 1 && <Step1 /> }
            {currentStep === 2 && <Step2 /> }
            {currentStep === 3 && <Step3 /> }
            {currentStep === 4 && <Step4 /> }
            {currentStep === 5 && <Step5 /> }
            <br/>
            <div style={{display: 'flex', gap: '20px'}}>
                <Button type="danger" onClick={handlePrev}>Prev</Button>
                <Button type="common" onClick={handleNext}>Next</Button>
            </div>
        </>
    )
}