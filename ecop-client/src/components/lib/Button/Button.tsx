import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

const Button = ({ children, variant = 'primary', ...buttonProps }: IButton) => {
  const buttonClassNames = classNames(styles.button, styles.button__text, {
    [styles[`button--${variant}`]]: true,
    [styles['button--disabled']]: buttonProps?.disabled,
  });

  return (
    <button className={buttonClassNames} data-testid='test-1' {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
