import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";

export const Step6: FC = () => {
    const [canContinue, setCanContinue] = useState(false);
    const [woman, setWoman] = useState(false);
    const [man, setMan] = useState(false);
    const [more, setMore] = useState(false);

    const handleContinue = () => {
        console.log('continue')
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

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">I'm a...</Text>

            <ToggleButton type="common" width="100%" active={woman} setActive={setWoman} outlined>Woman</ToggleButton>
            <ToggleButton type="common" width="100%" active={man} setActive={setMan} outlined>Man</ToggleButton>
            <ToggleButton type="common" width="100%" active={more} setActive={setMore} outlined>More</ToggleButton>

            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}