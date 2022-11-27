import React from 'react';

type InputProps = {

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
  value?: any,
  placeholder: string,
  type?: 'text' | 'email' | 'password' | 'number',
};

export default function Input({
  onChange, value, placeholder,
  type = 'text',
}:InputProps) {
  return (
    <input
      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}
