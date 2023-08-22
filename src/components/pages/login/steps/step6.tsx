import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { ToggleButton } from "../../../ui/toggle-button";
import { CheckBox } from "../../../ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { continueStep6Clicked } from "../../../../core/redux/actions/loginActions";
import { RootState } from "../../../../core/redux/reducers/rootReducer";

interface Step6Props {
    goAhead: () => void;
}

export const Step6: FC<Step6Props> = ({goAhead}) => {
    const MAX_SELECTED_GENDERS = 3;
    const ORIENTATIONS = ['Straight', 'Gay', 'Lesbian', 'Bisexual', 'Asexual', 'Demisexual', 'Pansexual', 'Queer']
    const GENDERS = ['Woman', 'Man', 'More']

    const dispatch = useDispatch();
    const { userSelectedGender, showUsersGender } = useSelector(
        (state: RootState) => state.login
    );

    const [canContinue, setCanContinue] = useState(false);

    const [selectedOrientation, setSelectedOrientation] = useState<string[]>([]);
    const [selectedGender, setSelectedGender] = useState<string>(userSelectedGender);
    const [showGenderOnProfile, setShowGenderOnProfile] = useState<boolean>(showUsersGender);
    const [showOrientationOnProfile, setShowOrientationOnProfile] = useState(false);

    const handleContinue = () => {
        console.log('continue')
        console.log('selectedOrientation', selectedOrientation)
        console.log('selectedGender', selectedGender)
        console.log('showGenderOnProfile', showGenderOnProfile)
        console.log('showOrientationOnProfile', showOrientationOnProfile)
        dispatch(continueStep6Clicked({userSelectedGender: selectedGender, showUsersGender: showGenderOnProfile}))
        goAhead()
    }


    useEffect(() => {
        if (selectedOrientation.length <= MAX_SELECTED_GENDERS && selectedOrientation.length >= 1) {
            setCanContinue((prev) => prev = true)
        } else {
            setCanContinue((prev) => prev = false)
        }
    }, [selectedOrientation])

    useEffect(() => {
        if (selectedOrientation.length !== 0 && selectedGender !== 'More') {
            // for choose gender case
            setSelectedOrientation((prev) => prev = [])
        } else if (selectedGender === 'More') {
            // for choose orientation case
            handleGenderCheckboxClick(false)
            setCanContinue((prev) => prev = false)
        } else if (selectedGender !== 'More') {
            setCanContinue((prev) => prev = true)
        }
    }, [selectedGender, selectedOrientation])

    const handleClickItem = (param: string) => {
        if (!selectedOrientation.includes(param)) {
            const newArr = [...selectedOrientation, param]
            setSelectedOrientation((prev) => prev = newArr)
        } else if (selectedOrientation.includes(param)) {
            const newArr = selectedOrientation.filter((orientation) => orientation !== param)
            setSelectedOrientation((prev) => prev = newArr)
        }
    }

    const handleToggleButtonClick = (gender: string) => {
        setSelectedGender((prev) => prev = gender)
    }

    const handleGenderCheckboxClick = (checked: boolean) => {
        setShowGenderOnProfile(prev => prev = checked)
    }

    const handleOrientationCheckboxClick = (checked: boolean) => {
        setShowOrientationOnProfile(prev => prev = checked)
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
                <CheckBox labelText="Show my gender on my profile" id="test" checked={showGenderOnProfile} setChecked={handleGenderCheckboxClick} width='100%' marginLeft="100%"/>
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
                    <CheckBox labelText="Show my orientation on my profile" id="1" checked={showOrientationOnProfile} setChecked={handleOrientationCheckboxClick} width='100%' marginLeft="100%"/>
                    <Button type="common" width="100%" onClick={handleContinue} disabled={!canContinue}>Contitnue</Button>
                </>
            )}
        </>
    )
}