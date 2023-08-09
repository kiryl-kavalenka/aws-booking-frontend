import { FC, PropsWithChildren } from 'react';
import * as S from './text.styles';
import { TextProps } from './text.types';

export const Text: FC<PropsWithChildren<TextProps>> = ({
  type,
  margin,
  padding,
  textAlign,
  width,
  children
}) => {
  const renderText = () => {
    switch (type) {
      case 'title':
        return (
          <S.Title margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Title>
        );
      case 'subtitle':
        return (
          <S.Subtitle margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Subtitle>
        );
      case 'header':
        return (
          <S.Header margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Header>
        );
      case 'param':
        return (
          <S.Param margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Param>
        );
      case 'info':
        return (
          <S.Info margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Info>
        );
      default:
        return (
          <S.Text margin={margin} padding={padding} textAlign={textAlign} width={width}>
            {children}
          </S.Text>
        );
    }
  };
  return renderText();
};