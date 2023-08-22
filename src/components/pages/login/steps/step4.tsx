import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { continueStep4Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step4Props {
    goAhead: () => void;
}

export const Step4: FC<Step4Props> = ({goAhead}) => {
    const dispatch = useDispatch();
    const { userNickName } = useSelector(
        (state: RootState) => state.login
    );
    const [nickName, setNickName] = useState(userNickName)
    const [canContinue, setCanContinue] = useState(false);

    const handleNickNameChange = (event: any) => {
        setNickName(event.target.value);
    }

    const handleContinue = () => {
        console.log('continue')
        dispatch(continueStep4Clicked({userNickName: nickName}))
        goAhead()
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
            <Input 
                type="text" 
                name="text" 
                placeholder="Nickname" 
                width="fit-content"
                value={nickName}
                onChange={handleNickNameChange}
            />
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}