export interface CheckBoxProps {
    checked: boolean;
    setChecked: (event?: any) => void;
    labelText: string;
    id: string;
    width?: string;
    marginLeft?: string;
}