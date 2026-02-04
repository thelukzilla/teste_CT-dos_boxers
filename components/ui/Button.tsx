import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "border-transparent text-white bg-boxer-red hover:bg-red-700 shadow-lg shadow-red-900/50",
    outline: "border-boxer-red text-boxer-red hover:bg-boxer-red hover:text-white",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/50"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};