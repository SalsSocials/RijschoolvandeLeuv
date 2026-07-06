import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Proefles aanvragen | Rijschool Van De Leuv" },
      { name: "description", content: "Plan eenvoudig je proefles in Hoorn, Enkhuizen of West-Friesland. Stuur Joey direct een WhatsApp bericht of vul het contactformulier in." },
      { property: "og:title", content: "Contact & Proefles aanvragen | Rijschool Van De Leuv" },
      { property: "og:description", content: "Plan je proefles via WhatsApp of het contactformulier. Snel persoonlijk contact met Joey." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "Vanaf welke leeftijd mag ik beginnen met rijlessen?", a: "Je mag starten vanaf 16,5 jaar via 2toDrive. Vanaf je 17e mag je praktijkexamen doen bij het CBR." },
  { q: "In welke plaatsen geeft Rijschool Van De Leuv rijles?", a: "Joey geeft rijles in Hoorn, Enkhuizen, Bovenkarspel, Grootebroek, Hoogkarspel, Venhuizen, Andijk, Wervershoof en omliggende plaatsen in West-Friesland." },
  { q: "Waarom eerst een proefles?", a: "Tijdens de proefles kijkt Joey naar je huidige niveau en krijg je een eerlijk advies over het aantal lessen dat je waarschijnlijk nodig hebt." },
  { q: "Hoe lang duurt een rijles?", a: "De duur wordt afgestemd op jouw lespakket en leerdoelen. Vaak werken we met lessen van 90 of 120 minuten voor een beter leerresultaat." },
  { q: "Kan ik in termijnen betalen?", a: "Ja, in overleg zijn verschillende betaalmogelijkheden bespreekbaar." },
  { q: "In wat voor auto rij ik?", a: "Je rijdt in een moderne, comfortabele lesauto die volledig is uitgerust voor veilige rijlessen." },
  { q: "Wat als ik meer lessen nodig heb dan mijn pakket?", a: "Extra lessen kunnen altijd worden bijgeboekt. Joey houdt je voortgang nauwlettend in de gaten." },
  { q: "Hoe snel kan ik mijn rijbewijs halen?", a: "Dit hangt af van je leertempo, beschikbaarheid en examenplanning bij het CBR. Joey adviseert je realistisch." },
  { q: "Heeft Joey ervaring met angstige of onzekere leerlingen?", a: "Ja. Door zijn zeven jaar ervaring heeft hij veel verschillende leerlingen succesvol begeleid." },
  { q: "Wat maakt Rijschool Van De Leuv anders?", a: "Persoonlijke aandacht, jarenlange ervaring en een ontspannen sfeer staan centraal." },
  { q: "Hoe vraag ik een proefles aan?", a: "Via WhatsApp of het contactformulier. Joey reageert meestal binnen een paar uur." },
  { q: "Geeft Rijschool Van De Leuv ook les in Hoorn en Enkhuizen?", a: "Ja. De rijschool is actief in de gehele regio West-Friesland, waaronder Hoorn en Enkhuizen." },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="relative px-5 pt-36 pb-12 sm:px-8 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Neem <span className="text-gradient">contact</span> op
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Plan eenvoudig jouw proefles via WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0F2A1E] p-8 shadow-[0_30px_80px_-30px_rgba(37,211,102,0.5)] sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#25D366]/30 blur-3xl" />
              <div className="relative flex items-center gap-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.8)]">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60">Snelste manier</div>
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    Stuur Joey direct een WhatsApp
                  </div>
                </div>
              </div>
              <div className="relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F2A1E] transition-transform group-hover:translate-x-1">
                Open WhatsApp <Send className="h-4 w-4" />
              </div>
            </motion.a>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <ContactCard icon={Phone} title="Bel direct" value={`+${SITE.phone}`} href={`tel:+${SITE.phone}`} />
              <ContactCard icon={Mail} title="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactCard icon={MapPin} title="Regio" value={SITE.region} />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card-premium">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Beloofd
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We nemen binnen 24 uur contact met je op. Geen pushy verkoop, alleen eerlijk advies over de beste vervolgstap.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Veelgestelde vragen"
          title="Antwoord op alles wat je wilt weten"
          description="Staat jouw vraag er niet bij? Stuur Joey gerust een WhatsApp."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card-premium transition-colors hover:border-primary/40">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Proefles aanvraag: ${form.name || "nieuw bericht"}`;
    const body = `Naam: ${form.name}\nTelefoon: ${form.phone}\nE-mail: ${form.email}\n\nBericht:\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-card-premium sm:p-8"
    >
      <h2 className="font-display text-xl font-semibold text-foreground">Stuur een bericht</h2>
      <p className="mt-1 text-sm text-muted-foreground">We reageren meestal binnen een paar uur.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          required
          maxLength={80}
          aria-label="Naam"
          placeholder="Naam"
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          maxLength={20}
          aria-label="Telefoonnummer"
          placeholder="Telefoonnummer"
          className={field}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          required
          type="email"
          maxLength={120}
          aria-label="E-mail"
          placeholder="E-mail"
          className={`${field} sm:col-span-2`}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          maxLength={1000}
          rows={5}
          aria-label="Bericht"
          placeholder="Bericht"
          className={`${field} sm:col-span-2`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
      >
        Verstuur <Send className="h-4 w-4" />
      </button>
      {sent && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Bedankt! Je e-mailprogramma is geopend om het bericht te versturen.
        </p>
      )}
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        open ? "border-primary/40 bg-card" : "border-border bg-card/60"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground sm:text-base">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}
