export interface CodeInputProps {
    width?: string;
    gap?: string;
    elementWidth?: string;
    elementHeight?: string;
    codeNumber: number;
    onChange: (keysInputed: string[]) => void;
}