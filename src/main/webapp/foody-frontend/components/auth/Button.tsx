import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    outline:
      "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
