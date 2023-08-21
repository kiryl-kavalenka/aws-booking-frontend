import { FC, PropsWithChildren } from 'react';
import * as S from './toggle-button.styles';
import { ToggleButtonProps } from './toggle-button.types';

export const ToggleButton: FC<PropsWithChildren<ToggleButtonProps>> = ({type, size, disabled, padding, margin, width, color, outlined, active, onClick, children}) => {

  const handleToggle = () => {
    if (onClick) {
      onClick()
    }
  };

  return (
    <S.Common
        type={type} 
        size={size} 
        disabled={disabled} 
        padding={padding} 
        margin={margin} 
        width={width} 
        color={color}
        outlined={outlined}
        active={active}
        onClick={handleToggle}>
      {children}
    </S.Common>
  );
}

export default ToggleButton;