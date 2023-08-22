import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { continueStep3Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step3Props {
    goAhead: () => void;
}

export const Step3: FC<Step3Props> = ({goAhead}) => {
    const dispatch = useDispatch();
    const { userEmail } = useSelector(
        (state: RootState) => state.login
    );
    const [email, setEmail] = useState(userEmail)
    const [canContinue, setCanContinue] = useState(false);

    const handleEmailChange = (event: any) => {
        console.log('email event', event)
        setEmail(event.target.value);
    }

    const handleContinue = () => {
        console.log('continue')
        dispatch(continueStep3Clicked({userEmail: email}))
        goAhead()
    }

    useEffect(() => {
        email.length >= 5 ? setCanContinue(true) : setCanContinue(false);
    }, [email])

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">What's your email</Text>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    Don't lose access to your  account, verify your email. 
            </Text>
            <Input 
                type="email" 
                name="email" 
                placeholder="Enter your emial address" 
                width="fit-content"
                value={email}
                onChange={handleEmailChange}
            />
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}