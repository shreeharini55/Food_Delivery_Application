"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { id: "in", code: "+91", flag: "🇮🇳", label: "India" },
  { id: "us", code: "+1", flag: "🇺🇸", label: "United States" },
  { id: "gb", code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { id: "ae", code: "+971", flag: "🇦🇪", label: "United Arab Emirates" },
  { id: "au", code: "+61", flag: "🇦🇺", label: "Australia" },
  { id: "ca", code: "+1", flag: "🇨🇦", label: "Canada" },
  { id: "sa", code: "+966", flag: "🇸🇦", label: "Saudi Arabia" },
  { id: "pk", code: "+92", flag: "🇵🇰", label: "Pakistan" },
  { id: "sg", code: "+65", flag: "🇸🇬", label: "Singapore" },
  { id: "bd", code: "+880", flag: "🇧🇩", label: "Bangladesh" },
] as const;

type Country = (typeof COUNTRY_CODES)[number];
const DEFAULT_COUNTRY = COUNTRY_CODES[0];

type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export function PhoneInput({
  value = "",
  onChange,
  placeholder = "9876543210",
}: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState<Country>(DEFAULT_COUNTRY);
  const [phone, setPhone] = useState(value);
  const [open, setOpen] = useState(false);

  function handlePhoneChange(next: string) {
    const digits = next.replace(/\D/g, "");
    setPhone(digits);
    onChange?.(`${countryCode.code}${digits}`);
  }

  function handleCountrySelect(country: Country) {
    setCountryCode(country);
    setOpen(false);
    onChange?.(`${country.code}${phone}`);
  }

  return (
    <div className="relative flex h-12 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex shrink-0 items-center gap-1.5 border-r border-zinc-200 px-3 text-sm text-zinc-700 hover:bg-zinc-50"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base">{countryCode.flag}</span>
        <span className="font-medium">{countryCode.code}</span>
        <svg
          className="h-4 w-4 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <input
        type="tel"
        inputMode="numeric"
        value={phone}
        onChange={(e) => handlePhoneChange(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none"
      />

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            role="listbox"
            className="absolute left-0 top-full z-20 mt-1 max-h-60 w-56 overflow-y-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-lg"
          >
            {COUNTRY_CODES.map((country) => (
              <li key={country.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={country.id === countryCode.id}
                  onClick={() => handleCountrySelect(country)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  <span>{country.flag}</span>
                  <span className="truncate">{country.label}</span>
                  <span className="ml-auto shrink-0 text-zinc-400">
                    {country.code}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
