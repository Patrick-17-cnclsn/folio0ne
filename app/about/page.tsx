import ContactSection from "@/components/content/sections/contact-section";
import ToolsSection from "@/components/content/sections/tools-section";
import { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `À propos - ${CONFIG.name}`,
  description: CONFIG.bioShort,
  openGraph: {
    images: ["/seo.jpg"]
  }
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#043c85]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#043c85] uppercase dark:bg-[#043c85]/20 dark:text-blue-300">
      {children}
    </span>
  );
}

function TimelineItem({
  year,
  title,
  description
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-[#043c85] mt-1.5 shrink-0" />
        <div className="w-px flex-1 bg-border mt-1" />
      </div>
      <div className="pb-6">
        <span className="text-xs font-semibold text-muted-foreground">{year}</span>
        <p className="font-semibold mt-0.5">{title}</p>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* Introduction */}
      <section className="space-y-4">
        <SectionLabel>À propos</SectionLabel>
        <h1 className="text-3xl font-bold lg:text-4xl">
          Bonjour, je suis {CONFIG.name}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Développeur fullstack en BTS SIO SLAM, passionné par la création d'applications web,
          mobile et les systèmes embarqués connectés.
        </p>
      </section>

      {/* Parcours */}
      <section className="space-y-6">
        <div>
          <SectionLabel>Parcours</SectionLabel>
          <h2 className="text-2xl font-bold mt-3">Mon chemin</h2>
        </div>
        <div>
          <TimelineItem
            year="Côte d'Ivoire"
            title="Baccalauréat Scientifique"
            description="Formation scientifique qui m'a donné le goût de la logique, de la résolution de problèmes et du raisonnement structuré."
          />
          <TimelineItem
            year="1ère année BTS"
            title="BTS SIO SLAM — Fondamentaux"
            description="Algorithmique, bases de données relationnelles, programmation orientée objet. Projet FixInfo : application desktop C# / SQL Server pour la gestion d'interventions de maintenance informatique."
          />
          <TimelineItem
            year="2ème année BTS"
            title="BTS SIO SLAM — Montée en compétence"
            description="Développement mobile cross-platform avec React Native et Firebase. Projets personnels en desktop et intelligence artificielle pour explorer des technologies hors programme."
          />
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-[#043c85] mt-1.5 shrink-0" />
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground">Stage</span>
              <p className="font-semibold mt-0.5">Anumerique — EduConnect France</p>
              <p className="text-muted-foreground text-sm mt-1">
                Développement back-end et front-end sur une plateforme d'agrégation de stages et événements pour étudiants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets BTS */}
      <section className="space-y-6">
        <div>
          <SectionLabel>Projets BTS</SectionLabel>
          <h2 className="text-2xl font-bold mt-3">Réalisations académiques</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-5 space-y-2">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">1ère année</p>
            <h3 className="font-bold text-lg">FixInfo</h3>
            <p className="text-muted-foreground text-sm">
              Application desktop Windows Forms permettant à un technicien d'enregistrer des équipements
              informatiques et de saisir des interventions de maintenance.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["C#", ".NET", "SQL Server"].map((t) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border p-5 space-y-2">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">2ème année</p>
            <h3 className="font-bold text-lg">Application de prise de notes</h3>
            <p className="text-muted-foreground text-sm">
              Application mobile cross-platform avec authentification sécurisée et synchronisation
              des notes en temps réel via Firebase.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React Native", "Expo", "Firebase"].map((t) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Veille technologique */}
      <section className="space-y-6">
        <div>
          <SectionLabel>Veille technologique</SectionLabel>
          <h2 className="text-2xl font-bold mt-3">IoT & Protocole MQTT</h2>
        </div>
        <div className="rounded-xl border p-6 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Dans le cadre du BTS SIO, j'effectue une veille technologique régulière sur les
            <strong className="text-foreground"> systèmes embarqués connectés et l'IoT</strong>,
            et plus précisément sur le protocole <strong className="text-foreground">MQTT</strong>.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold text-sm">MQTT</p>
              <p className="text-muted-foreground text-xs mt-1">
                Protocole léger publish/subscribe, standard de l'IoT pour les réseaux à faible bande passante.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold text-sm">Mosquitto</p>
              <p className="text-muted-foreground text-xs mt-1">
                Broker open source de référence — reçoit et redistribue les messages entre appareils et applications.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold text-sm">TLS / Port 8883</p>
              <p className="text-muted-foreground text-xs mt-1">
                Sécurisation des échanges MQTT par chiffrement et authentification par certificats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage */}
      <section className="space-y-6">
        <div>
          <SectionLabel>Stage 2025 – 2026</SectionLabel>
          <h2 className="text-2xl font-bold mt-3">Anumerique — EduConnect France</h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Plateforme web qui centralise automatiquement les stages et événements disponibles
          en France pour les étudiants, en scrapant plusieurs sites sources (HelloWork, Eventbrite…).
        </p>
        <div className="space-y-3">
          <div className="rounded-xl border-l-4 border-[#043c85] bg-[#043c85]/5 px-5 py-4 dark:bg-[#043c85]/10">
            <p className="font-semibold text-sm mb-2">Back-end — Pipeline de scraping</p>
            <ul className="space-y-1.5">
              {[
                "Stabilisation de l'orchestrateur coordonnant les scrapers en séquence",
                "Logique upsert : mise à jour si l'offre existe, création sinon — zéro doublon",
                "CleanupService : fusion des doublons, suppression des offres expirées",
                "Refactoring : 7 fonctions utilitaires partagées, suppression du code dupliqué"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#043c85]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-l-4 border-[#043c85] bg-[#043c85]/5 px-5 py-4 dark:bg-[#043c85]/10">
            <p className="font-semibold text-sm mb-2">Front-end — Page stages</p>
            <ul className="space-y-1.5">
              {[
                "Refonte de la page d'affichage des stages scrapés depuis HelloWork",
                "Interface de consultation des offres pour les étudiants"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#043c85]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Playwright", "Docker", "GitHub Actions"].map((t) => (
            <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
      </section>

      <ToolsSection />
      <ContactSection />
    </>
  );
}
