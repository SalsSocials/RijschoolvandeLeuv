import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-brand p-10 text-center shadow-glow sm:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-black/30 blur-3xl" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Klaar om jouw rijbewijs te halen?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
              Rijschool Van De Leuv start officieel op 14 september. Reserveer nu alvast jouw plek en ontvang persoonlijk advies over het pakket dat het beste bij jou past.
            </p>
            <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <CalendarDays className="h-3.5 w-3.5" /> Officieel van start op 14 september
            </div>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0047B3] shadow-card-premium transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Joey
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Proefles aanvragen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
