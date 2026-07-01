import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className = "", id, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 ${className}`}
        {...props}
      />
    </div>
  );
}
