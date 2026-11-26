import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, whatsappLink } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsappIcon } from "./icons";
import { btnClass } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20">
        <Logo className="h-8 md:h-10" />
        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: true }}
                  className="rounded px-2.5 py-2 font-display text-[13px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "sm", className: "hidden sm:inline-flex" })}>
            <WhatsappIcon className="h-4 w-4" /> WhatsApp
          </a>
          <button onClick={() => setOpen(true)} className="rounded-md p-2 text-foreground hover:bg-muted xl:hidden" aria-label="Abrir menu" aria-expanded={open}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-label="Fechar menu" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-primary/30 bg-card p-6 animate-in slide-in-from-right">
            <div className="mb-8 flex items-center justify-between">
              <Logo className="h-8" />
              <button onClick={() => setOpen(false)} className="rounded-md p-2 hover:bg-muted" aria-label="Fechar menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 overflow-y-auto">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    className="block rounded-md border-l-2 border-transparent px-4 py-3 font-display uppercase tracking-wide text-foreground hover:border-primary hover:bg-muted data-[status=active]:border-primary data-[status=active]:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnClass({ className: "mt-auto w-full" })}>
              <WhatsappIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
