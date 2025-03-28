import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`
        w-full px-4 py-2 rounded-lg font-medium
        bg-[#2B3A67] text-white
        hover:bg-[#1F2A4D]
        focus:outline-none focus:ring-2 focus:ring-[#2B3A67] focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};