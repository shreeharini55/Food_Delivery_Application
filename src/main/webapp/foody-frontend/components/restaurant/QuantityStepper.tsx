"use client";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  size?: "sm" | "md";
};

export function QuantityStepper({
  value,
  onChange,
  size = "md",
}: QuantityStepperProps) {
  const buttonClass =
    size === "sm"
      ? "flex h-8 w-8 items-center justify-center text-zinc-500"
      : "flex h-10 w-10 items-center justify-center text-zinc-500";

  const containerClass =
    size === "sm"
      ? "flex items-center rounded-full bg-zinc-100"
      : "flex items-center rounded-full bg-zinc-100";

  const valueClass =
    size === "sm"
      ? "min-w-[20px] text-center text-sm font-medium text-zinc-800"
      : "min-w-[24px] text-center text-base font-medium text-zinc-800";

  return (
    <div className={containerClass}>
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className={buttonClass}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className={valueClass}>{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className={buttonClass}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
