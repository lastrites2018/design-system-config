import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button2 = ({ children, ...props }: Props) => {
  return <button className='p-4' {...props}>2 {children}</button>;
};
