import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { DateInput } from "../../../ui/dateInput";
import { useDispatch, useSelector } from "react-redux";
import { continueStep5Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step5Props {
    goAhead: () => void;
}

export const Step5: FC<Step5Props> = ({goAhead}) => {
    const dispatch = useDispatch();
    const { userBirthDate } = useSelector(
        (state: RootState) => state.login
    );
    const [birthDay, setBirthDay] = useState(userBirthDate)
    const [canContinue, setCanContinue] = useState(false);
    const [validateError, setValidateError] = useState(false)

    const handleBirthDayChange = (keysInputed: string[]) => {
        console.log('keysInputed', keysInputed);
        if (keysInputed.length === 8) {
            const validDate = `${keysInputed[0]}${keysInputed[1]}.${keysInputed[2]}${keysInputed[3]}.${keysInputed[4]}${keysInputed[5]}${keysInputed[6]}${keysInputed[7]}`
            setBirthDay(prev => prev = validDate)
        } else {
            setBirthDay(prev => prev = '')
        }
    }

    const handleContinue = () => {
        console.log('continue')
        dispatch(continueStep5Clicked({userBirthDate: birthDay}))
        goAhead()
    }

    useEffect(() => {
        console.log('birthDay', birthDay)
        birthDay.length === 10 ? setCanContinue(true) : setCanContinue(false);
    }, [birthDay])

    useEffect(() => {
        console.log('validateError', validateError)
        if (birthDay.length === 10) {
            setCanContinue(validateError ? false : true);
        } else {
            setCanContinue(false)
        }
    }, [validateError, birthDay])

    const onValidateError = (error: boolean) => {
        setValidateError(error)
    }

    return(
        <>
            <Text type="header" textAlign="center" width="fit-content">My birthday is...</Text>
            <Text
                type="info" 
                textAlign="center" 
                width="fit-content"
                >
                    Your age will be public.
            </Text>
            <DateInput value={birthDay ? birthDay.replace(/\./g, '') : birthDay} onValidateError={onValidateError} onChange={handleBirthDayChange}/>
            {/* <input type="date" placeholder="date" value={birthDay} onChange={handleBirthDayChange}></input> */}
            <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
        </>
    )
}