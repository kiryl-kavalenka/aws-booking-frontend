export interface DateInputProps {
    value: string;
    onValidateError: (error: boolean) => void;
    onChange: (keysInputed: string[]) => void;
}