import styled from 'styled-components';

export interface TextProps {
  textAlign?: 'center' | 'left' | 'right';
  padding?: string;
  margin?: string;
  width?: string;
}

export const Title = styled.div<TextProps>`
  font-size: 48px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1400px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Subtitle = styled.div<TextProps>`
  font-size: 40px;
  font-weight: 600;
  color: #1d1d1f;
  max-width: 400px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Header = styled.div<TextProps>`
  font-size: 24px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1040px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Param = styled.div<TextProps>`
  font-size: 17px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1040px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Info = styled.div<TextProps>`
  font-size: 14px;
  color: #868686;
  max-width: 1040px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Text = styled.div<TextProps>`
  font-size: 12px;
  color: #1d1d1f;
  max-width: 1040px;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;