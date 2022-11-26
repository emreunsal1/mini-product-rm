import React from 'react';

type CheckBoxProps = {
  children: JSX.Element | string,
  onChange?: () => any
  value:boolean
};

export default function CheckBox({ children, onChange, value }:CheckBoxProps) {
  return (
    <div className="flex items-center">
      <input checked={value} onChange={onChange} id="checkbox" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
      <label htmlFor="checkbox" className="ml-2 block text-sm text-gray-900">{children}</label>
    </div>
  );
}
