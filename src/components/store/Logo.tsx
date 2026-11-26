import { Link } from "@tanstack/react-router";
import { SITE } from "@/config/site";

/** Logo oficial — arquivo original, sem alterações. */
export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${SITE.name} – página inicial`} className="inline-flex shrink-0">
      <img src={SITE.logoUrl} alt={SITE.name} className={`${className} w-auto`} width={2147} height={536} />
    </Link>
  );
}
