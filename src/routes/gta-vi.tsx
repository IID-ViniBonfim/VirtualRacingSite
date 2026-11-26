import { createFileRoute } from "@tanstack/react-router";
import { GtaSection } from "@/components/store/GtaSection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gta-vi")({
  head: () => seo("GTA VI – A Próxima Grande Experiência", "Acompanhe as novidades de Grand Theft Auto VI e demonstre interesse pelo WhatsApp."),
  component: () => <div className="pt-0"><GtaSection full /></div>,
});
