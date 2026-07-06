import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import joeyAsset from "@/assets/joey-van-de-leuv.jpg.asset.json";

export const Route = createFileRoute("/over-joey")({
  head: () => ({
    meta: [
      { title: "Over Joey | Rijinstructeur in Hoorn & West-Friesland" },
      { name: "description", content: "Maak kennis met Joey van de Leuv (25), rijinstructeur in West-Friesland met ruim drie jaar ervaring. Zijn eigen rijschool start op 14 september." },
      { property: "og:title", content: "Over Joey | Rijinstructeur in Hoorn & West-Friesland" },
      { property: "og:description", content: "100+ leerlingen succesvol begeleid. Persoonlijke rijlessen in Hoorn, Enkhuizen en heel West-Friesland." },
    ],
    links: [{ rel: "canonical", href: "/over-joey" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joey van de Leuv",
          jobTitle: "Rijinstructeur",
          worksFor: { "@type": "DrivingSchool", name: "Rijschool Van De Leuv" },
          areaServed: "West-Friesland",
          knowsAbout: [
            "Rijles","Schakelrijles","Examenroutes Hoorn","Examenroutes Enkhuizen",
            "Verkeersinzicht","Voertuigbeheersing",
          ],
          description:
            "Rijinstructeur (25) met ruim drie jaar ervaring bij Verkeersschool Van Vugt, Rijschool West-Friesland en Verkeersschool Istha. 100+ leerlingen succesvol begeleid.",
        }),
      },
    ],
  }),
  component: OverJoey,
});

const values = [
  { icon: ShieldCheck, title: "Veiligheid", text: "Je leert niet alleen slagen, maar vooral veilig deelnemen aan het verkeer." },
  { icon: HeartHandshake, title: "Persoonlijke aandacht", text: "Geen standaard programma. Elke les bouwt door op jouw ontwikkeling." },
  { icon: Trophy, title: "Zelfvertrouwen", text: "We bouwen stap voor stap aan de zekerheid die je nodig hebt achter het stuur." },
  { icon: Sparkles, title: "Plezier", text: "Een ontspannen sfeer maakt leren rijden gewoon leuker en effectiever." },
];

function OverJoey() {
  return (
    <SiteLayout>
      <section className="relative px-5 pt-36 pb-16 sm:px-8 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Over Joey
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Maak kennis met <span className="text-gradient">Joey</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              25 jaar oud, ruim drie jaar ervaring en meer dan 100 geslaagde leerlingen. Officieel van start op 14 september.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card-premium">
                <img
                  src={joeyAsset.url}
                  alt="Joey van de Leuv"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-[560px] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Van planning en verkoop tot eigen rijschool.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <Reveal delay={0.05}>
                <p>
                  Mijn naam is <span className="font-medium text-foreground">Joey van de Leuv</span>, ik ben 25 jaar oud en heb inmiddels ruim drie jaar ervaring binnen de rijschoolbranche. In die tijd heb ik gewerkt bij <span className="font-medium text-foreground">Verkeersschool Van Vugt</span>, <span className="font-medium text-foreground">Rijschool West-Friesland</span> en <span className="font-medium text-foreground">Verkeersschool Istha</span>.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Daar heb ik uiteenlopende werkzaamheden verricht: planning, verkoop, theorie- en praktijklessen en diverse managementtaken. Door die brede ervaring weet ik niet alleen hoe je goed lesgeeft, maar ook wat er komt kijken bij een professionele rijopleiding van A tot Z.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Mijn kracht ligt in geduld, duidelijke communicatie, aanpassingsvermogen en besluitvaardigheid. Iedere leerling leert op zijn of haar eigen manier, dus ik stem mijn lessen volledig af op de persoon die naast mij zit. Naast veiligheid en leerzaamheid staat plezier centraal. Doordat ik zelf nog jong ben, ontstaat er vaak een ontspannen sfeer in de auto.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Inmiddels heb ik meer dan <span className="font-medium text-foreground">100 leerlingen</span> succesvol mogen begeleiden naar hun rijbewijs. Het mooiste aan mijn werk blijft om leerlingen met een glimlach de auto te zien verlaten en uiteindelijk hun rijbewijs te zien behalen. Op <span className="font-medium text-foreground">14 september</span> start mijn eigen rijschool officieel.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {[
                  "3+ jaar ervaring",
                  "Gecertificeerd rijinstructeur",
                  "Persoonlijk lesplan",
                  "100+ geslaagde leerlingen",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Kernwaarden"
          title="Waar Rijschool Van De Leuv voor staat"
          description="Vier principes die elke rijles vormgeven."
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-premium"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto flex max-w-4xl justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            Plan jouw proefles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
