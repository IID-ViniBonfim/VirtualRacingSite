import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:glow-strong hover:-translate-y-0.5",
        outline: "border border-primary/60 text-primary hover:bg-primary/10 hover:glow",
        ghost: "text-foreground hover:bg-muted",
        dark: "bg-secondary text-secondary-foreground hover:bg-graphite/80 border border-border",
      },
      size: { sm: "h-9 px-3 text-xs", md: "h-11 px-5 text-sm", lg: "h-13 px-7 py-4 text-sm md:text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;
export const btnClass = (p: BtnProps & { className?: string } = {}) => cn(btn(p), p.className);
