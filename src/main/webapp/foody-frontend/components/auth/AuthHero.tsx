import Image from "next/image";

export function AuthHero() {
  return (
    <div className="relative hidden min-h-[280px] overflow-hidden bg-zinc-900 md:block md:min-h-0 md:flex-1">
      <Image
        src="/auth-burger.jpg"
        alt="Delicious burger"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}
