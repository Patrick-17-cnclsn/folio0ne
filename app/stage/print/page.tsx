"use client";

import { CONFIG } from "@/lib/config";

const STAGE_PROJECT = {
  title: "EduConnect France — Plateforme d'agrégation pour étudiants",
  client: "Anumerique",
  date: "2025 – 2026",
  type: "Projet de stage",
  services: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Playwright", "Docker", "GitHub Actions", "TailwindCSS"],
  context:
    "Dans le cadre de mon stage de BTS SIO SLAM au sein d'Anumerique, j'ai contribué au développement d'EduConnect France — une plateforme web qui centralise automatiquement les formations, stages, salons d'emploi et événements disponibles en France, en scrapant plusieurs sites sources.",
  sections: [
    {
      title: "Contexte du projet",
      content:
        "EduConnect France est une plateforme développée en équipe chez Anumerique. Elle agrège automatiquement des données provenant de HelloWork (stages), MaFormation (formations), L'Étudiant (salons) et Eventbrite (événements) pour les centraliser dans une interface unique à destination des étudiants."
    },
    {
      title: "Mes missions spécifiques",
      items: [
        "Réparation et stabilisation de l'orchestrateur de scraping — cerveau central coordonnant les 4 scrapers en séquence",
        "Correction des erreurs de types TypeScript liées à l'injection de page Playwright (build sans erreurs)",
        "Mise en place de la logique upsert sur les 4 scrapers : mise à jour si l'URL existe, création sinon",
        "Développement du CleanupService : fusion des doublons, suppression des offres +30 jours et événements passés",
        "Refactoring complet : création de 7 fonctions utilitaires réutilisables, élimination de 100% du code dupliqué",
        "Correction d'un bug critique sur le parsing des dates Eventbrite"
      ]
    },
    {
      title: "Stack technique",
      content:
        "Next.js 15 (App Router) avec TypeScript pour le front et les API routes. Prisma ORM avec PostgreSQL pour la base de données (4 modèles : Job, Training, Event, Organization). Playwright pour le scraping headless. Docker et Docker Compose pour la conteneurisation. GitHub Actions pour le CI/CD (lint + build automatiques sur chaque PR)."
    },
    {
      title: "Compétences développées",
      items: [
        "Pipeline de scraping asynchrone multi-sources avec Playwright",
        "Conception d'une logique upsert robuste pour éviter les doublons en base",
        "Maintenance automatique des données (nettoyage, fusion, expiration)",
        "Sécurisation d'API par token",
        "Refactoring et création de fonctions utilitaires réutilisables",
        "Travail en équipe avec Git, GitHub Actions et CI/CD"
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
        <div className="no-print mb-6 flex justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="rounded-lg bg-[#043c85] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#032d66]">
            Imprimer / Télécharger PDF
          </button>
        </div>

        <header className="mb-8 overflow-hidden rounded-xl">
          <div className="bg-[#043c85] px-8 py-6 text-white">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-200">
              BTS SIO — Option SLAM
            </p>
            <h1 className="mt-2 text-2xl font-bold leading-tight">{STAGE_PROJECT.title}</h1>
            <p className="mt-1 text-sm text-blue-100">{STAGE_PROJECT.type}</p>
          </div>

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

        <div className="mb-8 flex flex-wrap gap-2">
          {STAGE_PROJECT.services.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#043c85]/20 bg-[#043c85]/8 px-3 py-1 text-xs font-semibold text-[#043c85]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-8 rounded-lg border-l-4 border-[#043c85] bg-blue-50/50 px-5 py-4">
          <p className="text-sm leading-relaxed text-gray-700">{STAGE_PROJECT.context}</p>
        </div>

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
