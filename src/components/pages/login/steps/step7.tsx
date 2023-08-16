import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";

export const Step7: FC = () => {
    const SHOW_ME_CASES: string[] = ['Woman', 'Man', 'Everyone'];

    const [selectedCase, setSelectedCase] = useState('');
    const [canContinue, setCanContinue] = useState(false);

    useEffect(() => {
        if (selectedCase) {
            setCanContinue(prev => prev = true)
        }
    }, [selectedCase])

    const handleToggleButtonClick = (choosenCase: string) => {
        setSelectedCase((prev) => prev = choosenCase)
    }

    const handleContinue = () => {
        console.log('selectedCase', selectedCase)
    }

    return(
        <>
            <Text type="header" textAlign="center">Show me</Text>
            {
                SHOW_ME_CASES.map((item) => {
                    const isActive: boolean = !!selectedCase?.includes(item)
                    return (
                    <ToggleButton type="common" width="100%" active={isActive} onClick={() => handleToggleButtonClick(item)} outlined>{item}</ToggleButton>   
                )})
            }
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}