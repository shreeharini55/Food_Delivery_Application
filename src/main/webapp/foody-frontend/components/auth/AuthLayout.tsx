import { ReactNode } from "react";
import { AuthHero } from "./AuthHero";

type AuthLayoutProps = {
  children: ReactNode;
  imagePosition?: "left" | "right";
};

export function AuthLayout({ children, imagePosition = "right" }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-full flex-1 items-center justify-center bg-auth-bg px-4 py-8 sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
        style={{ backgroundImage: "url(/auth-burger.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-auth-bg/80" aria-hidden />

      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex min-h-[560px] flex-col md:flex-row">
          {imagePosition === "left" && <AuthHero />}
          <div className="flex flex-1 flex-col justify-center px-8 py-10 sm:px-12 sm:py-12">
            {children}
          </div>
          {imagePosition === "right" && <AuthHero />}
        </div>
      </div>
    </div>
  );
}
