import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";
import { useDispatch, useSelector } from "react-redux";
import { continueStep7Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step7Props {
    goAhead: () => void;
}

export const Step7: FC<Step7Props> = ({goAhead}) => {
    const SHOW_ME_CASES: string[] = ['Woman', 'Man', 'Everyone'];

    const dispatch = useDispatch();
    const { showUserTo } = useSelector(
        (state: RootState) => state.login
    );

    const [selectedCase, setSelectedCase] = useState(showUserTo);
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
        dispatch(continueStep7Clicked({showUserTo: selectedCase}))
        goAhead()
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