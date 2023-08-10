export interface ButtonProps {
    type?: 'common' | 'primary' | 'success' | 'warning' | 'danger';
    size?: 'large' | 'medium' | 'small';
    disabled?: boolean;
    color?: string;
    padding?: string;
    margin?: string;
    width?: string;
    onClick?: () => void;
}