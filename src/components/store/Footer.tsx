import { Link } from "@tanstack/react-router";
import { SITE, instagramUrl, whatsappLink } from "@/config/site";
import { CATEGORIES } from "@/data/products";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsappIcon } from "./icons";

export function Footer() {
  const ig = instagramUrl();
  return (
    <footer className="mt-24 border-t border-primary/20 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo className="h-10" />
          <p className="text-sm text-muted-foreground">{SITE.description}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">O que jogar</h3>
          <ul className="space-y-2 text-sm">
            {Object.values(CATEGORIES).map((c) => (
              <li key={c.path}><Link to={c.path} className="text-muted-foreground hover:text-primary">{c.label}</Link></li>
            ))}
            <li><Link to="/gta-vi" className="text-muted-foreground hover:text-primary">GTA VI</Link></li>
            <li><Link to="/precos" className="text-muted-foreground hover:text-primary">Preços</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Contato</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><WhatsappIcon className="h-4 w-4" /> {SITE.whatsappDisplay}</a></li>
            {ig && <li><a href={ig} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><InstagramIcon className="h-4 w-4" /> @{SITE.instagramHandle}</a></li>}
            <li>{SITE.city}</li>
            <li><Link to="/contato" className="hover:text-primary">Página de contato</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Institucional</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacidade" className="text-muted-foreground hover:text-primary">Política de privacidade</Link></li>
            <li><Link to="/termos" className="text-muted-foreground hover:text-primary">Termos de uso</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
