import React, { ReactNode } from 'react';
import InputMask from 'react-input-mask';

type InputProps = {

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
  value?: any,
  placeholder: string,
  type?: 'text' | 'email' | 'password' | 'number',
  errorMessage: string | false,
  mask?: false | string;
};

export default function Input({
  onChange, value, placeholder,
  type = 'text',
  errorMessage,
  mask = false,
}: InputProps) {
  let inputClass = 'relative block w-full appearance-none rounded border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mt-2 sm:text-sm';
  if (errorMessage) {
    inputClass += ' border-rose-600';
  } else {
    inputClass += ' border-gray-300';
  }

  const renderInput = (props?:any) => (
    <input
      className={inputClass}
      placeholder={placeholder}
      autoComplete="chrome-off"
      type={type}
      onChange={onChange}
      value={value}
      {...props}
    />
  );

  const wrapWithMask = () => (
    <InputMask
      mask={mask as string}
      alwaysShowMask
      onChange={onChange}
      value={value}
    >
      {renderInput as unknown as ReactNode}
    </InputMask>
  );

  return (
    <>
      {
        mask ? wrapWithMask() : renderInput()
      }
      {errorMessage && <span className="text-rose-600 text-sm">{errorMessage}</span>}
    </>
  );
}
