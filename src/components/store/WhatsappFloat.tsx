import { whatsappLink } from "@/config/site";
import { WhatsappIcon } from "./icons";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground glow-strong transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" aria-hidden="true" />
      <WhatsappIcon className="relative h-7 w-7" />
    </a>
  );
}
