import React from 'react';

interface Option {
  id: string;
  label: string;
}

interface OptionGroupProps {
  title: string;
  options: Option[];
  values: Record<string, any>;
  onChange: (id: string) => void;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({
  title,
  options,
  values,
  onChange
}) => {
  return (
    <div className="space-y-3 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="space-y-3">
        {options.map(({ id, label }) => (
          <label key={id} className="flex items-center gap-3 group cursor-pointer">
            <input
              type="checkbox"
              checked={values[id]}
              onChange={() => onChange(id)}
              className="w-5 h-5 text-indigo-600 rounded border-gray-300 
                       focus:ring-indigo-500 focus:ring-2 
                       transition-colors cursor-pointer"
            />
            <span className="text-lg text-gray-700
                           group-hover:text-indigo-600
                           transition-colors font-medium">
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};