import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

const baseStyles = 'rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400';
const variants = {
  primary: 'bg-blue-600 text-white shadow hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  glass: 'bg-white/30 backdrop-blur-md text-blue-700 shadow-lg border border-white/40',
};
const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={classNames(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = 'Button'; 