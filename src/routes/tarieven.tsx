import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Gauge,
  Rocket,
  ArrowRight,
  Eye,
  Wrench,
  Brain,
  Timer,
  ShieldCheck,
  CalendarDays,
  Info,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/tarieven")({
  head: () => ({
    meta: [
      { title: "Tarieven & Pakketten | Rijschool Van De Leuv" },
      { name: "description", content: "Eerlijke pakketten op maat. Tijdens de proefles bepaalt Joey welk pakket het beste bij jou past." },
      { property: "og:title", content: "Tarieven | Rijschool Van De Leuv" },
      { property: "og:description", content: "Eerlijk advies op basis van een proefles, zodat je nooit te weinig of te veel lessen koopt." },
    ],
    links: [{ rel: "canonical", href: "/tarieven" }],
  }),
  component: Tarieven,
});

const packages = [
  {
    name: "Startpakket",
    icon: Sparkles,
    hours: 30,
    price: "€2.399",
    oldPrice: "€2.519",
    badge: null,
    items: ["30 uur rijles", "Praktijkexamen", "Theorie-examen", "Theorie E-learning"],
  },
  {
    name: "Zeker Onderweg",
    icon: ShieldCheck,
    hours: 35,
    price: "€2.699",
    oldPrice: "€2.839",
    badge: null,
    items: ["35 uur rijles", "Praktijkexamen", "Theorie-examen", "Theorie E-learning"],
  },
  {
    name: "Meest Gekozen",
    icon: Gauge,
    hours: 40,
    price: "€2.999",
    oldPrice: "€3.159",
    badge: "Meest gekozen",
    items: ["40 uur rijles", "Praktijkexamen", "Theorie-examen", "Theorie E-learning"],
  },
  {
    name: "Compleet Klaar",
    icon: Rocket,
    hours: 45,
    price: "€3.299",
    oldPrice: "€3.479",
    badge: null,
    items: ["45 uur rijles", "Praktijkexamen", "Theorie-examen", "Theorie E-learning"],
  },
];

const losseTarieven = [
  { label: "Proefles (1,5 uur)", price: "€65" },
  { label: "Rijles per uur", price: "€68" },
  { label: "Praktijkexamen", price: "€295" },
  { label: "Theorie-examen", price: "€65" },
  { label: "Theorie E-learning", price: "€65" },
];

function Tarieven() {
  return (
    <SiteLayout>
      <section className="relative px-5 pt-36 pb-12 sm:px-8 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Pakketten
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Eerlijke pakketten, <span className="text-gradient">op maat voor jou</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tijdens de proefles kijkt Joey welk pakket het beste bij jou past. Zo voorkomen we dat je te weinig lessen inkoopt en uiteindelijk duurder uit bent.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <CalendarDays className="h-3.5 w-3.5" /> Officieel van start op 14 september, reserveer alvast je plek
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <SectionHeader
          eyebrow="Pakketten"
          title="Kies het pakket dat bij jou past"
          description="Alle pakketten zijn inclusief praktijkexamen, theorie-examen en theorie E-learning."
        />
        <div className="mx-auto mt-14 grid max-w-7xl items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => {
            const featured = p.badge === "Meest gekozen";
            return (
              <Reveal key={p.name} delay={i * 0.06} className={featured ? "lg:-my-4" : ""}>
                <motion.div
                  whileHover={{ y: -10, scale: featured ? 1.02 : 1.01 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className={`relative h-full overflow-hidden rounded-3xl border p-7 transition-colors ${
                    featured
                      ? "border-primary/40 bg-gradient-to-b from-[#EAF3FF] via-white to-white shadow-glow ring-1 ring-primary/20"
                      : "border-border bg-card shadow-card-premium"
                  }`}
                >
                  {featured && (
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                  )}
                  {p.badge && (
                    <div className="absolute right-5 top-5 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-glow">
                      {p.badge}
                    </div>
                  )}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                    <span className="text-base font-medium text-muted-foreground line-through">{p.oldPrice}</span>
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {p.hours} uur · inclusief examen
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      featured
                        ? "bg-gradient-brand text-white shadow-glow"
                        : "border border-border bg-secondary text-foreground hover:border-primary/40"
                    }`}
                  >
                    Plan proefles <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Niet zeker welk pakket bij jou past? Tijdens de proefles geeft Joey een eerlijk advies op basis van jouw niveau, aanleg en leertempo. Gemiddeld hebben leerlingen 40 tot 45 lesuren nodig.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Waarom eerst een proefles?"
          title="Geen pakket kopen zonder advies"
          description="Iedere leerling leert anders. Een proefles geeft een eerlijk beeld van wat je nodig hebt."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Brain, t: "Ervaring", d: "Eerdere rijervaring of helemaal nieuw achter het stuur." },
            { icon: Wrench, t: "Voertuigbeheersing", d: "Hoe ga je om met koppeling, sturen en schakelen." },
            { icon: Eye, t: "Verkeersinzicht", d: "Hoe lees je het verkeer en anticipeer je op situaties." },
            { icon: Timer, t: "Leertempo", d: "Sommige dingen pak je snel op, andere kosten meer tijd." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card-premium">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <x.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-premium sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Losse tarieven</div>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-3xl">Transparant, zonder verrassingen</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800">
                  <Info className="h-3.5 w-3.5" /> Tarieven zullen in de toekomst stijgen (verwacht ±€72 per uur)
                </div>
              </div>
              <ul className="mt-6 divide-y divide-border">
                {losseTarieven.map((t) => (
                  <li key={t.label} className="flex items-center justify-between py-3.5 text-sm sm:text-base">
                    <span className="text-foreground">{t.label}</span>
                    <span className="font-display text-lg font-semibold text-foreground">{t.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
