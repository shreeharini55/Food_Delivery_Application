"use client";

import Image from "next/image";
import { useState } from "react";
import { Offer } from "@/lib/home-data";

type CouponCardProps = {
  offer: Offer;
};

export function CouponCard({ offer }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(offer.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="relative">
      <div className="absolute left-0 top-1/2 z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50" />
      <div className="absolute right-0 top-1/2 z-10 h-7 w-7 translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50" />

      <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="flex w-[120px] shrink-0 items-center justify-center px-4 py-6 sm:w-[140px]">
          <div className="relative h-14 w-14 overflow-hidden rounded-full sm:h-16 sm:w-16">
            <Image
              src={offer.logo}
              alt={offer.brand}
              fill
              className={
                offer.logo.endsWith(".svg")
                  ? "object-contain p-1"
                  : "object-cover"
              }
              sizes="64px"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center border-l border-dashed border-zinc-300 py-5 pl-5 sm:pl-6">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold tracking-wide text-zinc-800 sm:text-sm">
              {offer.brand}
            </p>

            <div className="mt-1 flex flex-wrap items-baseline gap-x-1.5 leading-none">
              {offer.offerPrefix && (
                <span className="text-sm font-medium text-zinc-500 sm:text-base">
                  {offer.offerPrefix}
                </span>
              )}
              <span className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                {offer.offerValue}
              </span>
              {offer.offerSuffix && (
                <span className="text-sm font-medium text-zinc-500 sm:text-base">
                  {offer.offerSuffix}
                </span>
              )}
            </div>

            <p className="mt-2 text-[11px] text-zinc-400 sm:text-xs">
              Valid until {offer.expires}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="mr-4 shrink-0 rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-hover sm:mr-5 sm:px-4 sm:text-sm"
          >
            {copied ? "Copied!" : "Copy Coupon"}
          </button>
        </div>
      </div>
    </article>
  );
}
