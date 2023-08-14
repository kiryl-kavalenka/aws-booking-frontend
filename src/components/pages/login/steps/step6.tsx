import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";

export const Step6: FC = () => {
    const MAX_SELECTED_GENDERS = 3;
    const ORIENTATIONS = ['Straight', 'Gay', 'Lesbian', 'Bisexual', 'Asexual', 'Demisexual', 'Pansexual', 'Queer']

    const [canContinue, setCanContinue] = useState(false);

    const [woman, setWoman] = useState(false);
    const [man, setMan] = useState(false);
    const [more, setMore] = useState(false);


    const [selectedOrientation, setSelectedOrientation] = useState<string[]>([]);

    const handleContinue = () => {
        console.log('continue')
        console.log('selectedOrientation', selectedOrientation)
    }

    useEffect(() => {
        if (more) {
            setWoman(false)
            setMan(false)
        }
    }, [more])

    useEffect(() => {

        if (man) {
            setWoman(false)
            setMore(false)
        }
    }, [man])

    useEffect(() => {
        if (woman) {
            setMan(false);
            setMore(false)
        }
    }, [woman])


    useEffect(() => {
        if (woman || man) {
            setCanContinue(true)
        } else {
            setCanContinue(false)
        }
    }, [woman, man, more])

    useEffect(() => {
        console.log('selectedOrientation', selectedOrientation)
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

    return(
        <>
            {!more ? 
            (<>
                <Text type="header" textAlign="center" width="fit-content">I'm a...</Text>
                <ToggleButton type="common" width="100%" active={woman} setActive={setWoman} outlined>Woman</ToggleButton>
                <ToggleButton type="common" width="100%" active={man} setActive={setMan} outlined>Man</ToggleButton>
                <ToggleButton type="common" width="100%" active={more} setActive={setMore} outlined>More</ToggleButton>
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