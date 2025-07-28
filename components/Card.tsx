import React from 'react';
import classNames from 'classnames';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div
    className={classNames(
      'rounded-2xl bg-white/80 shadow-lg p-6 backdrop-blur-md',
      className
    )}
    {...props}
  >
    {children}
  </div>
); 