"use client";

import { CONFIG } from "@/lib/config";

const STAGE_PROJECT = {
  title: "EduConnect France — Moteur de Collecte",
  client: "Anumerique",
  date: "2025 – 2026",
  type: "Projet de stage",
  services: ["TypeScript", "Playwright", "Node.js"],
  context:
    "Dans le cadre de mon stage de BTS SIO SLAM au sein d'Anumerique, j'ai développé un moteur de collecte de données automatisé permettant d'agréger des offres d'emploi, de formations et d'événements provenant de plusieurs sources publiques.",
  sections: [
    {
      title: "Contexte du stage",
      content:
        "Anumerique est une entreprise spécialisée dans le numérique. L'objectif du stage était de mettre en place un système de veille automatisée capable d'alimenter la base de données de la plateforme en temps quasi-réel, à partir de sources comme HelloWork, MaFormation, L'Étudiant et Eventbrite."
    },
    {
      title: "Missions réalisées",
      items: [
        "Conception et développement d'un worker de scraping multi-sources avec Playwright",
        "Implémentation d'un CleanupService pour la déduplication et la normalisation des données",
        "Normalisation des entités : Organisations, Jobs, Formations, Événements",
        "Gestion des erreurs, logs de performance et reprise sur incident",
        "Tests d'intégration sur les différents connecteurs de sources"
      ]
    },
    {
      title: "Technologies utilisées",
      content:
        "Le projet repose sur un stack Node.js avec TypeScript pour la robustesse du typage, et Playwright pour le scraping headless. L'architecture est modulaire : chaque source dispose de son propre connecteur, orchestré par un scheduler central."
    },
    {
      title: "Compétences développées",
      items: [
        "Automatisation de la collecte de données web (scraping asynchrone)",
        "Conception de pipelines de transformation de données",
        "Gestion des erreurs en environnement de production",
        "Versioning Git et intégration continue",
        "Collaboration en équipe agile"
      ]
    }
  ]
};

export default function StagePrintPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break { page-break-before: always; }
        }
        body { background: white; color: #111; }
      `}</style>

      <div className="mx-auto max-w-3xl bg-white px-10 py-8 text-sm text-gray-800">
        {/* Bouton impression */}
        <div className="no-print mb-6 flex justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="rounded-lg bg-[#043c85] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#032d66]">
            Imprimer / Télécharger PDF
          </button>
        </div>

        {/* En-tête document */}
        <header className="mb-8 overflow-hidden rounded-xl">
          <div className="bg-[#043c85] px-8 py-6 text-white">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-200">
              BTS SIO — Option SLAM
            </p>
            <h1 className="mt-2 text-2xl font-bold leading-tight">{STAGE_PROJECT.title}</h1>
            <p className="mt-1 text-sm text-blue-100">{STAGE_PROJECT.type}</p>
          </div>

          {/* Méta-infos */}
          <div className="grid grid-cols-3 divide-x border border-t-0 border-gray-200 bg-gray-50">
            <div className="px-5 py-3">
              <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Étudiant</p>
              <p className="mt-0.5 font-semibold text-gray-900">{CONFIG.name}</p>
            </div>
            <div className="px-5 py-3">
              <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Entreprise</p>
              <p className="mt-0.5 font-semibold text-gray-900">{STAGE_PROJECT.client}</p>
            </div>
            <div className="px-5 py-3">
              <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Période</p>
              <p className="mt-0.5 font-semibold text-gray-900">{STAGE_PROJECT.date}</p>
            </div>
          </div>
        </header>

        {/* Technologies */}
        <div className="mb-8 flex flex-wrap gap-2">
          {STAGE_PROJECT.services.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#043c85]/20 bg-[#043c85]/8 px-3 py-1 text-xs font-semibold text-[#043c85]">
              {tech}
            </span>
          ))}
        </div>

        {/* Résumé */}
        <div className="mb-8 rounded-lg border-l-4 border-[#043c85] bg-blue-50/50 px-5 py-4">
          <p className="text-sm leading-relaxed text-gray-700">{STAGE_PROJECT.context}</p>
        </div>

        {/* Sections */}
        <div className="space-y-7">
          {STAGE_PROJECT.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xs font-bold tracking-widest text-[#043c85] uppercase">
                {section.title}
              </h2>
              {section.content && (
                <p className="leading-relaxed text-gray-700">{section.content}</p>
              )}
              {section.items && (
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#043c85]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Pied de page */}
        <footer className="mt-12 border-t border-gray-200 pt-5 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>{CONFIG.name} — {CONFIG.email}</span>
            <span>BTS SIO SLAM — {STAGE_PROJECT.date}</span>
          </div>
        </footer>
      </div>
    </>
  );
}
