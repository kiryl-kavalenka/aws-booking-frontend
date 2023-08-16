import { FC } from "react";
import { CheckboxContainer } from "./checkbox.styles";
import { CheckBoxProps } from "./checkbox.types";

export const CheckBox: FC<CheckBoxProps> = ({checked, setChecked, labelText, id, width}) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <CheckboxContainer width={width}>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} id={id}></input>
            <label htmlFor={id}>{labelText}</label>
        </CheckboxContainer>
    );
}