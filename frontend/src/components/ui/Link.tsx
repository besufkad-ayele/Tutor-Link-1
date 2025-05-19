import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '',
  ...props
}) => {
  const baseStyles = 'transition-colors duration-200';
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <a 
      href={href} 
      className={combinedClassName} 
      {...props}
    >
      {children}
    </a>
  );
};