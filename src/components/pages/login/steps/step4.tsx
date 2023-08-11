import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";

export const Step4: FC = () => {
    const [nickName, setNickName] = useState('')
    const [canContinue, setCanContinue] = useState(false);

    const handleNickNameChange = (event: any) => {
        setNickName(event.target.value);
    }

    const handleContinue = () => {
        console.log('continue')
    }

    useEffect(() => {
        nickName.length >= 5 ? setCanContinue(true) : setCanContinue(false);
    }, [nickName])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">My nickname is...</Text>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    This is how you will appear in Vamost
            </Text>
            <input type="text" placeholder="Nickname" value={nickName} onChange={handleNickNameChange}></input>
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}