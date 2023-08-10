import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string | number;
  error?: string;
  type?: 'price' | 'integer' | 'password' | 'letters' | 'english';
  preventPaste?: boolean;
}