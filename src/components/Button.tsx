import React from 'react';

type ButtonProps = {
  children: JSX.Element | string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
};

function Button({ children, onClick }:ButtonProps) {
  return (
    <button onClick={onClick} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      {children}
    </button>
  );
}

export default Button;
