import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";

export const Step6: FC = () => {
    const MAX_SELECTED_GENDERS = 3;
    const ORIENTATIONS = ['Straight', 'Gay', 'Lesbian', 'Bisexual', 'Asexual', 'Demisexual', 'Pansexual', 'Queer']
    const GENDERS = ['Woman', 'Man', 'More']

    const [canContinue, setCanContinue] = useState(false);

    const [selectedOrientation, setSelectedOrientation] = useState<string[]>([]);
    const [selectedGender, setSelectedGender] = useState<string>();

    const handleContinue = () => {
        console.log('continue')
        console.log('selectedOrientation', selectedOrientation)
        console.log('selectedGender', selectedGender)
    }


    useEffect(() => {
        if (selectedOrientation.length <= MAX_SELECTED_GENDERS && selectedOrientation.length >= 1) {
            setCanContinue(true)
        } else {
            setCanContinue(false)
        }
    }, [selectedOrientation])

    const handleClickItem = (param: string) => {
        if (!selectedOrientation.includes(param)) {
            const newArr = [...selectedOrientation, param]
            setSelectedOrientation(newArr)
        } else if (selectedOrientation.includes(param)) {
            const newArr = selectedOrientation.filter((orientation) => orientation !== param)
            setSelectedOrientation(newArr)
        }
    }

    const handleToggleButtonClick = (gender: string) => {
        setSelectedGender(gender)
        gender !== 'More' ? setCanContinue(true) : setCanContinue(false)
    }

    return(
        <>
            {selectedGender !== 'More' ? 
            (<>
                <Text type="header" textAlign="center" width="fit-content">I'm a...</Text>
                {
                    GENDERS.map((gender) => {
                        const isActive: boolean = !!selectedGender?.includes(gender)
                        return (
                        <ToggleButton type="common" width="100%" active={isActive} onClick={() => handleToggleButtonClick(gender)} outlined>{gender}</ToggleButton>   
                    )})
                }
                <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
            </>)
            : (
                <>
                    <Text type="header" textAlign="center" width="fit-content">My sexual orientation is</Text>
                    <Text type="header" textAlign="center" width="fit-content">Select up to 3</Text>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {ORIENTATIONS.map((orientation, index) => (
                            <li 
                                key={index}
                                onClick={() => handleClickItem(orientation)}
                                style={{
                                    color: selectedOrientation.includes(orientation) ? '#598498' : 'black',
                                    cursor: 'pointer',
                                }}
                            >
                                {orientation}
                            </li>
                        ))}
                    </ul>
                    <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
                </>
            )}
        </>
    )
}