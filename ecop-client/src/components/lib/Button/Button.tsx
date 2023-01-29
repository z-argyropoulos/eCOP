import React from 'react';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...buttonProps }: IButton) => {
  return (
    <button data-testid='test-1' {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
