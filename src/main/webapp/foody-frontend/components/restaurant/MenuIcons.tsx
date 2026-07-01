function ShoppingCartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h15l-1.5 9H7.5L6 6z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 5 3H2" />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuDots() {
  return (
    <div className="flex gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
    </div>
  );
}

export { ShoppingCartIcon };
