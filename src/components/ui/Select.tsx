import { SelectHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Option[];
  error?: string;
  registration: UseFormRegisterReturn;
}

export default function Select({
  name,
  label,
  options,
  error,
  registration,
  ...props
}: SelectProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        {...registration}
        {...props}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      >
        <option value="">Seleccione una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
