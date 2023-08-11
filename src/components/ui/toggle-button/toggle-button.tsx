import { FC, PropsWithChildren, useState } from 'react';
import * as S from './toggle-button.styles';
import { ToggleButtonProps } from './toggle-button.types';

export const ToggleButton: FC<PropsWithChildren<ToggleButtonProps>> = ({type, size, disabled, padding, margin, width, color, outlined, children}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
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
        active={isActive}
        onClick={handleToggle}>
      {children}
    </S.Common>
  );
}

export default ToggleButton;