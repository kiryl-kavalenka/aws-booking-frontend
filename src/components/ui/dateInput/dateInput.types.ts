export interface DateInputProps {
    onValidateError: (error: boolean) => void;
    onChange: (keysInputed: string[]) => void;
}