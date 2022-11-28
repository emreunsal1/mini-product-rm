import React from 'react';

type CheckBoxProps = {
  children: JSX.Element | string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
};

export default function CheckBox({ children, onChange }:CheckBoxProps) {
  return (
    <div className="flex items-center">
      <input onChange={onChange} id="checkbox" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 cursor-pointer focus:ring-indigo-500" />
      <label htmlFor="checkbox" className="ml-2 block cursor-pointer select-none text-sm text-gray-900">{children}</label>
    </div>
  );
}
