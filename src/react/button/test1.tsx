import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button1 = ({ children, ...props }: Props) => {
  return <button {...props}>1 {children}</button>;
};
