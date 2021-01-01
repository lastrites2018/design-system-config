import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button2 = ({ children, ...props }: Props) => {
  return <button {...props}>2 {children}</button>;
};
