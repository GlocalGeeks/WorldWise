import React from 'react'
import styles from './Button.module.css'

const Button = ({
  children,
  onClick,
  variant = "primary",   // for styling
  type = "button"        // for HTML button type
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};


export default Button