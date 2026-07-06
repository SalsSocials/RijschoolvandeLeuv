import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Star,
  MessageCircle,
  PlayCircle,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Brain,
  Target,
  Zap,
  Users,
  CalendarDays,
  Clock,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { Counter } from "@/components/site/Counter";
import { whatsappUrl } from "@/lib/site";
import heroBg from "@/assets/hero-bg.jpg";
import joeyAsset from "@/assets/joey-van-de-leuv.jpg.asset.json";

const faqs = [
  { q: "Vanaf welke leeftijd mag ik beginnen met rijlessen?", a: "Je mag starten vanaf 16,5 jaar via 2toDrive. Vanaf je 17e mag je praktijkexamen doen bij het CBR." },
  { q: "In welke plaatsen geeft Rijschool Van De Leuv rijles?", a: "Joey geeft rijles in Hoorn, Enkhuizen, Bovenkarspel, Grootebroek, Hoogkarspel, Venhuizen, Andijk, Wervershoof en omliggende plaatsen in West-Friesland." },
  { q: "Waarom eerst een proefles?", a: "Tijdens de proefles kijkt Joey naar je huidige niveau en krijg je een eerlijk advies over het aantal lessen dat je waarschijnlijk nodig hebt." },
  { q: "Hoe lang duurt een rijles?", a: "De duur van een rijles wordt afgestemd op jouw lespakket en leerdoelen. Vaak werken we met lessen van 90 of 120 minuten voor een beter leerresultaat." },
  { q: "Kan ik in termijnen betalen?", a: "Ja, in overleg zijn verschillende betaalmogelijkheden bespreekbaar. Dat regelen we tijdens je proefles." },
  { q: "In wat voor auto rij ik?", a: "Je rijdt in een moderne, comfortabele lesauto die volledig is uitgerust voor veilige rijlessen." },
  { q: "Wat als ik meer lessen nodig heb dan mijn pakket?", a: "Extra lessen kunnen altijd worden bijgeboekt. Joey houdt je voortgang nauwlettend in de gaten zodat je niet voor verrassingen komt te staan." },
  { q: "Hoe snel kan ik mijn rijbewijs halen?", a: "Dit hangt af van je leertempo, je beschikbaarheid en de examenplanning bij het CBR. Joey geeft hier een realistisch advies over." },
  { q: "Heeft Joey ervaring met angstige of onzekere leerlingen?", a: "Ja. Door zijn zeven jaar ervaring heeft hij veel verschillende leerlingen succesvol begeleid, ook leerlingen met examenstress of weinig zelfvertrouwen." },
  { q: "Wat maakt Rijschool Van De Leuv anders?", a: "Persoonlijke aandacht, jarenlange ervaring en een ontspannen sfeer staan centraal. Geen wisselende instructeurs, geen volle agenda, wel echt contact." },
  { q: "Hoe vraag ik een proefles aan?", a: "Via WhatsApp of het contactformulier. Joey reageert meestal binnen een paar uur." },
  { q: "Geeft Rijschool Van De Leuv ook les in Hoorn en Enkhuizen?", a: "Ja, de rijschool is actief in de gehele regio West-Friesland, waaronder Hoorn en Enkhuizen." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rijschool in Hoorn & West-Friesland | Rijschool Van De Leuv" },
      {
        name: "description",
        content:
          "Persoonlijke rijles in Hoorn, Enkhuizen en heel West-Friesland. Haal je rijbewijs veilig en met plezier bij Joey van de Leuv.",
      },
      { property: "og:title", content: "Rijschool in Hoorn & West-Friesland | Rijschool Van De Leuv" },
      { property: "og:description", content: "Rijles in Hoorn, Enkhuizen, Bovenkarspel en omstreken. Persoonlijke begeleiding van Joey van de Leuv." },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <StartDateBanner />
      <Stats />
      <USPs />
      <AboutTeaser />
      <TheoryFirst />
      <WhyProefles />
      <Trust />
      <HowItWorks />
      <Reviews />
      <Locations />
      <FAQ />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Fullscreen background image with parallax + subtle zoom */}
      <motion.div
        aria-hidden
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <img
          src={heroBg}
          alt="Moderne lesauto op een Nederlandse landweg bij gouden uur"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Soft light overlays for legibility, never dark */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/55 to-white/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.13_245/0.18),transparent_55%)]" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-2xl">
          <div className="rounded-3xl border border-white/60 bg-white/55 p-7 shadow-card-premium backdrop-blur-xl sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Officieel van start op 14 september, reserveer nu je plek
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Zelfverzekerd leren rijden{" "}
            <span className="text-gradient">begint hier</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg"
          >
            Persoonlijke rijlessen in Hoorn, Enkhuizen en heel West-Friesland. Meer dan 100 geslaagde leerlingen begeleid door Joey. Jong, ervaren en altijd met aandacht voor jou.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Vraag een proefles aan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/tarieven"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:bg-white"
            >
              <PlayCircle className="h-4 w-4 text-primary" />
              Bekijk pakketten
            </Link>
            <a
              href={whatsappUrl("Hoi Joey, ik wil graag een proefles inplannen voor jouw start op 14 september.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Joey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-medium text-foreground">4.9/5</span>
              <span>· tevreden leerlingen</span>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 100, s: "+", label: "Geslaagde leerlingen" },
    { v: 3, s: "+", label: "Jaar ervaring" },
    { v: 14, s: "/9", label: "Officiële startdatum" },
    { v: 4.9, s: "/5", label: "Gemiddelde review" },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
        {items.map((it) => (
          <Reveal key={it.label} className="bg-background">
            <div className="px-6 py-10 text-center">
              <div className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {it.v % 1 === 0 ? <Counter to={it.v} suffix={it.s} /> : <>{it.v}{it.s}</>}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {it.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const usps = [
  { icon: GraduationCap, title: "Ervaren instructeur", text: "3+ jaar ervaring bij Van Vugt, Rijschool West-Friesland en Istha in heel West-Friesland." },
  { icon: HeartHandshake, title: "Persoonlijke aanpak", text: "Iedere leerling leert anders. Daarom krijg je begeleiding die aansluit bij jouw tempo." },
  { icon: ShieldCheck, title: "Veilig & zelfverzekerd", text: "Niet alleen slagen voor je examen, maar ook met vertrouwen de weg op." },
  { icon: Sparkles, title: "Met plezier leren rijden", text: "Een ontspannen sfeer zorgt voor betere resultaten en meer rijplezier." },
];

function USPs() {
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Waarom Van De Leuv"
        title="Persoonlijk, professioneel & premium"
        description="Geen kant-en-klare lesprogramma's. Elke leerling krijgt een aanpak die past bij hun ritme en doelen."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-premium"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <u.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-primary/20" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card-premium">
              <img
                src={joeyAsset.url}
                alt="Joey van de Leuv, rijinstructeur"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-[520px] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">Eigenaar & instructeur</div>
                <div className="font-display text-2xl font-semibold text-white">Joey van de Leuv</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card-premium sm:block">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Start</div>
              <div className="font-display text-xl font-semibold text-foreground">14 sep</div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            align="left"
            eyebrow="Over Joey"
            title="Jong, ervaren en altijd met aandacht."
          />
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Joey is 25 jaar en heeft ruim drie jaar ervaring binnen de rijschoolbranche. Hij werkte eerder bij Verkeersschool Van Vugt, Rijschool West-Friesland en Verkeersschool Istha, van planning en verkoop tot theorie- en praktijklessen.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inmiddels begeleidde hij meer dan 100 leerlingen succesvol naar hun rijbewijs. Op 14 september start zijn eigen rijschool, met dezelfde persoonlijke, ontspannen aanpak waar leerlingen hem om waarderen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-6 space-y-2">
              {["Persoonlijk lesplan op maat", "Geduldig & duidelijke uitleg", "Plezier én resultaat in elke les"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/over-joey"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              Meer over Joey
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Proefles aanvragen", d: "Stuur een berichtje via WhatsApp of het contactformulier en we plannen een moment." },
  { n: "02", t: "Persoonlijk rijadvies", d: "Tijdens je proefles kijkt Joey naar je ervaring, voertuigbeheersing en leertempo." },
  { n: "03", t: "Passend pakket kiezen", d: "Je krijgt een eerlijk advies welk pakket bij jouw situatie past, zonder overkopen." },
  { n: "04", t: "Rijbewijs halen", d: "Met duidelijke uitleg, ontspannen sfeer en focus rij je richting je examen." },
];

function HowItWorks() {
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Hoe werkt het?"
        title="Van proefles tot rijbewijs"
        description="Een helder traject. Geen verrassingen. Wel veel rijplezier onderweg."
      />
      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:block" />
        <div className="space-y-10 md:space-y-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:px-10 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
                <div className="relative md:px-10">
                  <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:-z-0 md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="h-6 w-6 rounded-full bg-gradient-brand shadow-glow ring-4 ring-background" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card-premium">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-medium text-foreground">Stap {i + 1}</div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Lenthe Deen",
    text: "Ik heb met heel veel plezier rijles gehad van Joey! Hij is geduldig en legt alles duidelijk uit, zorgt voor een gezellig praatje in de auto waardoor er een relaxte sfeer was. Joey gaf eerlijke feedback en nam echt de tijd om aan mijn verbeterpunten te werken en de dingen die ik lastig vond. Dat zorgde ervoor dat ik met genoeg zelfvertrouwen achter het stuur zat. Joey heeft mij goed voorbereid op mijn examen en daardoor ben ik in één keer geslaagd!",
    rating: 5,
  },
  {
    name: "Amy Koster",
    text: "Joey is een duidelijke maar erg vriendelijke instructeur met veel geduld. Je kan altijd een leuk praatje met hem maken maar legt ondertussen ook alles goed uit. Voor mijn volgende rijbewijzen ga ik zeker weer naar Joey!",
    rating: 5,
  },
  {
    name: "Pepijn Meijntjes",
    text: "Joey is een enthousiaste rijleraar die je op een positieve manier helpt het beste uit jezelf te halen. Zijn rijlessen waren altijd leuk, leerzaam en goed te volgen.",
    rating: 5,
  },
  {
    name: "Thomas Smit",
    text: "Super fijne rijinstructeur! Erg gezellig tijdens de lessen, waardoor er altijd een fijne sfeer was in de auto. Hij legt alles duidelijk uit en geeft goede tips waar je echt iets aan hebt. Zeker een aanrader!",
    rating: 5,
  },
  { name: "Eva", text: "Persoonlijke aanpak en altijd ruimte voor je vragen.", rating: 5 },
  { name: "Daan", text: "Snel kunnen plannen, en altijd op tijd. Aanrader!", rating: 5 },
];

function Reviews() {
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Reviews"
        title="Wat leerlingen zeggen"
        description="Echte verhalen van leerlingen die met vertrouwen achter het stuur zitten."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-premium"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-white">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Geslaagde leerling</div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <MessageCircle className="h-4 w-4" /> Ook met vertrouwen achter het stuur? Stuur Joey een bericht.
        </a>
      </div>
    </section>
  );
}

function Locations() {
  const cities = [
    "Hoorn", "Enkhuizen", "Bovenkarspel", "Grootebroek", "Hoogkarspel",
    "Venhuizen", "Hem", "Andijk", "Wervershoof", "Blokker", "Zwaag",
    "Oosterblokker", "Westwoud", "Schellinkhout",
  ];
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="floating-blob -left-24 top-10 h-72 w-72 bg-primary/10" />
      <div className="floating-blob -right-20 bottom-0 h-80 w-80 bg-accent/10" />
      <SectionHeader
        eyebrow="Werkgebied"
        title="Rijles in heel West-Friesland"
        description="Joey komt naar je toe in de hele regio. Van Hoorn tot Enkhuizen, en alles ertussenin."
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {cities.map((c, i) => (
          <Reveal key={c} delay={i * 0.02}>
            <motion.div
              whileHover={{ y: -3 }}
              className="group flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-brand shadow-glow" />
              {c}
            </motion.div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Woon je net buiten de regio? Stuur Joey een berichtje, dan kijken we samen wat mogelijk is.
        </p>
      </Reveal>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-60" />
      <SectionHeader
        eyebrow="Veelgestelde vragen"
        title="Alles wat je wilt weten"
        description="Antwoord op de meest gestelde vragen over rijles bij Rijschool Van De Leuv."
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.02}>
            <FAQItem q={f.q} a={f.a} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-card-premium sm:p-10">
          <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Staat jouw vraag er niet tussen?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Neem direct contact op met Joey via WhatsApp. Je krijgt snel persoonlijk antwoord op al je vragen over rijlessen, lespakketten en het halen van je rijbewijs.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" /> Stuur een WhatsApp bericht
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all ${
        open
          ? "border-primary/40 bg-card shadow-card-premium"
          : "border-border bg-card/70 shadow-soft hover:border-primary/30"
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

function StartDateBanner() {
  return (
    <section className="relative px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-[#EAF3FF] via-white to-[#EAF3FF] p-6 shadow-card-premium sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Aankondiging</div>
                  <h2 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    Officieel van start op 14 september
                  </h2>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Rijschool Van De Leuv opent officieel op 14 september. Vraag vandaag nog een proefles aan en reserveer alvast jouw plek.
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl("Hoi Joey, ik wil graag een plek reserveren voor jouw start op 14 september.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_-12px_rgba(37,211,102,0.6)] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Reserveer via WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TheoryFirst() {
  const points = [
    { icon: Brain, t: "Theorie en praktijk versterken elkaar", d: "Wat je in de auto doet, snap je beter als de regels al duidelijk zijn." },
    { icon: Zap, t: "Voorkomt vertraging in je traject", d: "Zonder theorie-examen geen praktijkexamen, dus regel het op tijd." },
    { icon: Target, t: "Volle focus op het rijden", d: "Met theorie op zak hoef je tijdens je lessen alleen nog aan rijden te denken." },
    { icon: Clock, t: "Sneller examenklaar", d: "Een efficiënter leertraject, minder lessen en sneller je rijbewijs." },
  ];
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Advies van Joey"
        title="Begin met je theorie"
        description="Joey adviseert om eerst je theorie-examen te halen voordat je start met praktijklessen. Veel leerlingen onderschatten hoe pittig theorie kan zijn."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card-premium transition-transform hover:-translate-y-1">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Theorie-examen of Theorie E-learning regelen? Beide voor <span className="font-semibold text-foreground">€65</span>.
          </p>
          <Link
            to="/tarieven"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
          >
            Bekijk theorie-tarieven <ArrowRight className="h-4 w-4 text-primary" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function WhyProefles() {
  const checks = [
    "Huidig niveau achter het stuur",
    "Aanleg en voertuigbeheersing",
    "Jouw persoonlijke leerstijl",
    "Zelfvertrouwen in het verkeer",
  ];
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-60" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Eerst een proefles
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Waarom starten met een <span className="text-gradient">proefles?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Joey adviseert altijd om eerst een proefles van 1,5 uur te volgen. Op basis daarvan krijg je een eerlijk, persoonlijk lesadvies, zodat je nooit te weinig of te veel lessen koopt.
            </p>
            <ul className="mt-6 space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-foreground sm:text-base">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Iedere leerling leert in zijn eigen tempo. Gemiddeld hebben leerlingen tegenwoordig tussen de <span className="font-semibold text-foreground">40 en 45 lesuren</span> nodig om examenklaar te zijn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl("Hoi Joey, ik wil graag een proefles van 1,5 uur boeken.")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Boek proefles via WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                Contactformulier <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-white via-[#F4F8FF] to-white p-8 shadow-card-premium">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Proefles</div>
                  <div className="mt-1 font-display text-3xl font-bold text-foreground">€65</div>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">1,5 uur · eerlijke beoordeling · persoonlijk advies</div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Gem. lesuren</div>
                  <div className="mt-1 font-display text-2xl font-semibold text-foreground">40 tot 45</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Reactietijd</div>
                  <div className="mt-1 font-display text-2xl font-semibold text-foreground">&lt; 24u</div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Users, t: "100+ geslaagden", d: "Meer dan honderd leerlingen succesvol begeleid naar hun rijbewijs." },
    { icon: HeartHandshake, t: "Persoonlijke begeleiding", d: "Geen standaard programma. Elke les bouwt door op jouw ontwikkeling." },
    { icon: Sparkles, t: "Moderne lesmethode", d: "Actuele examenroutes, duidelijke uitleg en een leerzame, ontspannen sfeer." },
    { icon: ShieldCheck, t: "Veilige leeromgeving", d: "Veilig leren rijden staat altijd op één, voor jou én voor andere weggebruikers." },
  ];
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Vertrouwen & resultaten"
        title="Meer dan 100 geslaagde leerlingen"
        description="Een professionele aanpak, lessen afgestemd op jou en een instructeur die echt om je voortgang geeft."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <Reveal key={x.t} delay={i * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-premium transition-transform hover:-translate-y-1">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
