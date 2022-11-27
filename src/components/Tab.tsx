import React from 'react';

type TabProps = {
  tabs: string[],
  onChange: (index: number) => void,
  selectedIndex: number
};
export default function Tab({ tabs, onChange, selectedIndex }: TabProps) {
  const changeHandler = (index:number) => {
    onChange(index);
  };
  return (
    <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      {
        tabs.map((tab, index) => {
          let className = 'px-4 py-2 cursor-pointer select-none hover:bg-slate-100 border-b border-b-transparent ';
          if (index === selectedIndex) {
            className += '!border-b-lime-900';
          }
          return (
            <div
              className={className}
              onClick={() => changeHandler(index)}
              key={index}
            >
              {tab}
            </div>
          );
        })
      }

    </div>

  );
}
