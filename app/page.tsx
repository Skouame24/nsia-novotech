'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiteShell } from '../components/layout/SiteShell';
import { NSIA_COLORS } from '../constants/theme';
import { fadeInUp, staggerContainer } from '../lib/animations';

const NAV_ITEMS = [
  { id: 'hero', label: 'Le projet' },
  { id: 'problemes', label: 'Problèmes' },
  { id: 'solution', label: 'Le nouvel outil' },
  { id: 'demo', label: 'Démonstration' },
  { id: 'benefices', label: 'Bénéfices' },
  { id: 'roadmap', label: 'Feuille de route' },
  { id: 'pays', label: 'Mon pays' },
  { id: 'formation', label: 'Formation' },
  { id: 'equipe', label: 'Équipe' },
  { id: 'support', label: 'Support' },
  { id: 'facteurs', label: 'Succès' },
];

export default function NovatechLandingPage() {
  const [activeSection, setActiveSection] = React.useState<string>('hero');

  const scrollTo = (id: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    if (typeof document === 'undefined') return;

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0 || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // On considère une section "active" quand son haut approche le milieu de l'écran
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell>
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-[#0B1440] via-[#1B2A6B] to-[#050816] px-6 py-12 text-white md:px-10 md:py-16"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.35)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(192,197,214,0.28)_0%,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mx-auto flex max-w-6xl md:max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl space-y-6">
            {/* Tag projet façon NHA premium */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,166,35,0.5)] bg-[rgba(245,166,35,0.15)] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5A800]">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              Projet Novatech · Oct. 2024 — Déc. 2026
            </span>

            {/* Titre héro très typé Bebas / NSIA */}
            <h1 className="font-[var(--font-bebas)] text-4xl leading-[0.95] tracking-[0.08em] text-white md:text-5xl lg:text-[3.6rem]">
              NOVATECH,
              <br />
              <span className="text-[#F5A800]">LE NOUVEL OUTIL</span>
              <br />
              MÉTIER DU GROUPE NSIA.
            </h1>

            <p className="max-w-xl text-sm text-slate-100/80 md:text-[15px]">
              <span className="font-semibold">
                Un nouvel outil, une nouvelle ère pour l’assurance NSIA.
              </span>{' '}
              Novatech remplace l&apos;ancien logiciel lent et instable par une plateforme moderne,
              rapide et sécurisée, pensée pour les équipes métier : souscripteurs, gestionnaires,
              comptables et direction dans les 10 filiales africaines.
            </p>

            {/* CTA principaux */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('solution')}
                className="inline-flex items-center justify-center rounded-full bg-[#F5A800] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-[#F5A800]/30 transition hover:shadow-xl hover:shadow-[#F5A800]/40"
              >
                Découvrir le projet
              </button>
              <button
                onClick={() => scrollTo('demo')}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-4 py-2 text-sm font-medium text-slate-50 backdrop-blur-sm transition hover:bg-white/15"
              >
                Voir la démo
              </button>
            </div>

            {/* Accès rapides vers les rubriques clés */}
            <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
              <button
                type="button"
                onClick={() => scrollTo('formation')}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-medium text-slate-50 transition hover:bg-white/15"
              >
                🎓 Se former
              </button>
              <button
                type="button"
                onClick={() => scrollTo('roadmap')}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/0 px-3 py-1 font-medium text-slate-100 transition hover:bg-white/10"
              >
                📅 Feuille de route
              </button>
              <button
                type="button"
                onClick={() => scrollTo('benefices')}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/0 px-3 py-1 font-medium text-slate-100 transition hover:bg-white/10"
              >
                🌍 Mon métier / Ma filiale
              </button>
            </div>

            {/* Avancement + 3 chiffres clés */}
            <div className="mt-4 flex flex-col gap-4 text-xs text-slate-100/85 md:flex-row md:items-center">
              <div className="flex-1 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  Avancement global du programme
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-slate-800/70">
                    <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200 shadow-[0_0_12px_rgba(245,166,35,0.55)]" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5A800]">28%</div>
                </div>
                <div className="text-[11px] text-slate-200/80">
                  Prochain jalon : <span className="font-semibold">Go-Live Auto · Juil. 2025</span>
                </div>
              </div>

              {/* <div className="flex-1 grid grid-cols-3 gap-3">
                {[
                  {
                    label: 'Filiales concernées',
                    value: '10',
                  },
                  {
                    label: 'Utilisateurs impactés',
                    value: '3 000+',
                  },
                  {
                    label: '1er déploiement',
                    value: 'Auto · Juil. 2025',
                  },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/5 p-3 text-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  >
                    <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-200/85">
                      {kpi.label}
                    </div>
                    <div className="mt-2 text-[14px] font-semibold text-white">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Dernières actualités projet — pour donner un aspect vivant */}
            <div className="mt-4 max-w-xl space-y-1 rounded-2xl border border-white/15 bg-black/20 p-3 text-[11px] text-slate-100/85 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Dernières actualités projet
                </span>
                <span className="text-[10px] text-slate-300/80">Mise à jour régulière</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <p>
                    <span className="font-semibold">T2 2025 :</span> Ateliers Auto terminés pour les
                    filiales pilotes, démarrage de la recette fonctionnelle.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#F5A800]" />
                  <p>
                    Lancement de la préparation <span className="font-semibold">Go-Live Auto</span>{' '}
                    (communication, formation, support).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <p>
                    Nouvelle vidéo mascotte en cours de production pour expliquer le parcours
                    utilisateur Novatech.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration hero — inspirée de l'écran premium NSIA, plus soft */}
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#111936] via-[#0D1A45] to-[#050816] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
              {/* Halo doré doux */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.22)_0%,transparent_70%)]" />

              {/* Barre de fenêtre */}
              <div className="relative mb-4 flex items-center gap-2 text-[10px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Interface métier Novatech
                </span>
                <span className="ml-auto rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
                  En conception
                </span>
              </div>

              {/* Modules métier */}
              <div className="relative grid gap-2 text-xs md:grid-cols-2">
                {[
                  {
                    icon: '🚗',
                    title: 'Souscription Auto',
                    subtitle: 'Module pilote',
                    progress: '75%',
                    active: true,
                  },
                  {
                    icon: '⚖️',
                    title: 'Sinistres',
                    subtitle: 'En paramétrage',
                    progress: '45%',
                  },
                  {
                    icon: '🧾',
                    title: 'Comptabilité',
                    subtitle: 'Ateliers en cours',
                    progress: '30%',
                  },
                  {
                    icon: '📊',
                    title: 'Reporting',
                    subtitle: 'Démo disponible',
                    progress: '60%',
                  },
                ].map((mod) => (
                  <div
                    key={mod.title}
                    className={`flex items-center gap-3 rounded-2xl border bg-white/5 px-3 py-2 transition hover:bg-white/[0.12] ${
                      mod.active ? 'border-[#F5A800]/70 bg-[#F5A800]/10' : 'border-white/10'
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/60 text-lg">
                      {mod.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[11px] font-semibold text-white">{mod.title}</div>
                        <div className="text-[10px] text-slate-300">{mod.subtitle}</div>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/70">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200"
                          style={{ width: mod.progress }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges pays + progression globale, version compacte */}
              <div className="mt-3 space-y-3 text-[10px] text-slate-200/85">
                <div className="flex flex-wrap gap-1.5">
                  {['🇨🇮 CI', '🇧🇯 BJ', '🇸🇳 SN', '🇨🇲 CM', '🇲🇱 ML', '🇹🇬 TG', '+ 4 pays'].map(
                    (pays) => (
                      <span
                        key={pays}
                        className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5"
                      >
                        {pays}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/20 px-3 py-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Avancement global (indicatif)
                  </div>
                  <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-slate-800/70">
                    <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200 shadow-[0_0_12px_rgba(245,166,35,0.6)]" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5A800]">28%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NAVIGATION PRINCIPALE */}
      <nav
        className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur"
        aria-label="Navigation Novatech"
      >
        <div className="mx-auto max-w-6xl md:max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2 text-[11px] md:text-xs">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveSection(item.id);
                  scrollTo(item.id);
                }}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                style={
                  activeSection === item.id
                    ? {
                        backgroundColor: NSIA_COLORS.gold,
                        color: '#111827',
                      }
                    : undefined
                }
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor:
                      activeSection === item.id
                        ? NSIA_COLORS.gold
                        : NSIA_COLORS.silver,
                  }}
                />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="space-y-10 py-8 md:py-12">
        {/* POURQUOI CE PROJET ? — inspiré de la section premium */}
        <motion.section
          id="problemes"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 px-6 md:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2"
          >
            <span
              className="h-1.5 w-7 rounded-full"
              style={{ backgroundColor: NSIA_COLORS.gold }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Rubrique 02 — Pourquoi ce projet ?
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              💡 Pourquoi ce projet Novatech ?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Objectif : faire comprendre à chaque collaborateur pourquoi on change. Les gens
              n’adhèrent pas à une refonte SI, ils adhèrent à ce que Novatech change concrètement
              dans leur quotidien métier.
            </p>
          </motion.div>

          {/* Irritants actuels IXPERTA */}
          <motion.div
            variants={fadeInUp}
            className="space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Les irritants actuels avec l&apos;outil IXPERTA
              </h3>
              <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600 ring-1 ring-rose-100">
                Aujourd&apos;hui
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                {
                  icon: '⏱',
                  title: 'Instabilité & pertes d’exploitation',
                  desc: 'Arrêts fréquents, incidents en pleine production, impacts directs sur le chiffre d’affaires.',
                },
                {
                  icon: '📉',
                  title: 'Données peu fiables',
                  desc: 'Écarts entre production, sinistres et réassurance, besoin de retraiter les chiffres à la main.',
                },
                {
                  icon: '📊',
                  title: 'Reporting difficile',
                  desc: 'Temps important pour consolider les données groupe, faible visibilité temps réel.',
                },
                {
                  icon: '🔐',
                  title: 'Limites de sécurité',
                  desc: 'Architecture vieillissante face aux risques cyber, droits d’accès peu granulaires.',
                },
                {
                  icon: '🌍',
                  title: 'Pas de multi-pays / multidevise',
                  desc: 'Outil monolingue et monodévise, difficilement adaptable aux réalités des 10 filiales.',
                },
                {
                  icon: '🔗',
                  title: 'Pas d’interopérabilité',
                  desc: 'Peu ou pas de connexion avec les paiements digitaux, Mobile Money ou partenaires.',
                },
                {
                  icon: '🧾',
                  title: 'Éditiques complexes',
                  desc: 'Mise à jour difficile des documents (attestations, quittances, BPC) par pays.',
                },
                {
                  icon: '🙍‍♀️',
                  title: 'Expérience utilisateur pénalisante',
                  desc: 'Interfaces complexes, beaucoup de clics, double saisie fréquente pour les équipes.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-3 text-xs text-rose-900 shadow-sm"
                >
                  <div className="mt-1 text-lg">{item.icon}</div>
                  <div>
                    <div className="text-[12px] font-semibold">{item.title}</div>
                    <p className="mt-1 text-[11px] leading-relaxed text-rose-900/90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Comparatif Avant / Après IXPERTA vs Novatech */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
          >
            <div className="space-y-2 border-b border-slate-200 bg-gradient-to-br from-[#1E0B0B] to-[#2D1010] p-4 text-xs text-rose-100 md:border-b-0 md:border-r md:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-rose-200">
                <span>❌ IXPERTA — Aujourd&apos;hui</span>
              </div>
              <ul className="space-y-1.5">
                <li>Instabilité chronique causant des pertes d’exploitation.</li>
                <li>Données production / sinistres / réassurance peu fiables.</li>
                <li>Reporting difficile, pas de consolidation automatique groupe.</li>
                <li>Sécurité insuffisante face aux risques cyber.</li>
                <li>Outil monolingue et monodévise, mal adapté au multi-pays.</li>
                <li>Pas d’interopérabilité avec les paiements digitaux.</li>
                <li>Interface vieillissante, expérience utilisateur pénalisante.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center bg-slate-900 px-3 py-4 text-lg font-semibold text-amber-300 md:px-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A800] text-slate-900 shadow-lg shadow-[#F5A800]/40">
                →
              </div>
            </div>

            <div className="space-y-2 bg-gradient-to-br from-[#071C0F] to-[#0A2B18] p-4 text-xs text-emerald-100 md:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                <span>✅ Novatech — Demain</span>
              </div>
              <ul className="space-y-1.5">
                <li>Architecture robuste, haute disponibilité, zéro perte d’exploitation.</li>
                <li>Données fiables en temps réel — une source de vérité groupe.</li>
                <li>Reporting automatisé, tableaux de bord temps réel par pays.</li>
                <li>Sécurité renforcée, conforme aux standards bancaires.</li>
                <li>Multilingue FR/EN/PT et multidevise pour les 10 pays NSIA.</li>
                <li>Interopérabilité Mobile Money, API partenaires, paiements digitaux.</li>
                <li>Ergonomie moderne, parcours simplifiés, adoption rapide.</li>
              </ul>
            </div>
          </motion.div>

          {/* Bénéfices par profil métier — inspiré des cartes profil premium */}
          <motion.div
            variants={fadeInUp}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-7 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Bénéfices par profil métier
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: '📝',
                  name: 'Souscripteur',
                  role: 'Chargé de production',
                  quote:
                    '« Fini les doubles saisies. » Souscription auto en quelques clics, attestation éditée instantanément.',
                },
                {
                  icon: '⚖️',
                  name: 'Gestionnaire Sinistres',
                  role: 'Service indemnisation',
                  quote:
                    '« Suivi temps réel. » Dossier centralisé, workflow automatisé, délais optimisés.',
                },
                {
                  icon: '🤝',
                  name: 'Partenaire commercial',
                  role: 'Courtier / Agent / Bancassureur',
                  quote:
                    '« Autonomie totale. » Accès digital aux produits de masse, suivi commissions en temps réel.',
                },
                {
                  icon: '🧾',
                  name: 'Comptable',
                  role: 'Direction financière',
                  quote:
                    '« Encaissements fiables. » Suivi impayés automatisé, clôtures mensuelles accélérées.',
                },
                {
                  icon: '📊',
                  name: 'Direction filiale',
                  role: 'DG / DGA',
                  quote:
                    '« Vision instantanée. » Reporting automatique, tableaux de bord temps réel.',
                },
                {
                  icon: '🌐',
                  name: 'Holding NSIA',
                  role: 'Direction Groupe',
                  quote:
                    '« Consolidation groupe. » Accès consolidé aux productions de toutes les filiales.',
                },
              ].map((profil, idx) => (
                <div
                  key={profil.name}
                  className="relative flex flex-col gap-3 rounded-2xl bg-[#0D1A45] p-4 text-xs text-slate-50 shadow-sm ring-1 ring-[#F5A800]/15 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#F5A800]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A2D6D] to-[#F5A800] text-lg">
                      {profil.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{profil.name}</div>
                      <div className="text-[11px] font-medium text-[#F5A800]/80">
                        {profil.role}
                      </div>
                    </div>
                  </div>
                  <p className="rounded-xl border-l-4 border-[#F5A800] bg-[#F5A800]/10 px-3 py-2 text-[11px] leading-relaxed text-slate-100">
                    {profil.quote}
                  </p>
                  <div className="pointer-events-none absolute -right-1 -bottom-3 text-4xl font-semibold text-[#F5A800]/10">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Témoignage sponsor — vidéo / message stratégique */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:p-6"
          >
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-7 rounded-full"
                  style={{ backgroundColor: NSIA_COLORS.gold }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Témoignage sponsor
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                « Novatech est un investissement stratégique pour les 10 prochaines années. »
              </h3>
              <p className="text-xs text-slate-600">
                Dans ce message, la Sponsor du projet explique la vision : sécuriser le cœur du
                métier assurance, redonner de la fluidité aux équipes et doter chaque filiale d’un
                outil fiable et moderne. Ce témoignage est clé pour embarquer toutes les directions
                locales.
              </p>
              <p className="text-[11px] text-slate-500">
                Conseil adoption : éviter le jargon technique. Le message se concentre sur
                l&apos;impact métier : qualité de service, fiabilité des données, capacité à se
                développer dans 10 pays.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-slate-900/90 shadow-lg shadow-slate-900/40">
              <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#F5A800]/90 px-2 py-0.5 text-[10px] font-semibold text-slate-900">
                🎥 Témoignage vidéo
              </div>
              <video
                controls
                className="h-full w-full object-cover"
              >
                <source
                  src="/motion2Fast_Realistic_video_a_professional_presenter_from_Nova_0.mp4"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture de cette vidéo.
              </video>
            </div>
          </motion.div>
        </motion.section>

        {/* LE NOUVEL OUTIL — FONCTIONNALITÉS PHARES (adapté du modèle premium, rendu plus soft) */}
        <motion.section
          id="solution"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 px-6 md:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-7 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Rubrique 03 — Le nouvel outil
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              💻 Novatech — fonctionnalités phares
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              L’objectif est de démystifier le changement en montrant concrètement ce que Novatech
              apporte : interopérabilité, sécurité, multilingue / multidevise, reporting, parcours
              métier simplifiés. Les démonstrations visuelles sont prioritaires.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: '🔗',
                title: 'Interopérabilité paiements digitaux',
                desc: 'Connexion native Mobile Money (Orange, MTN, Wave…), systèmes bancaires locaux, collecte de primes sans friction.',
              },
              {
                icon: '🔐',
                title: 'Sécurité renforcée',
                desc: 'Chiffrement bout-en-bout, MFA, gestion fine des droits par rôle, traçabilité complète des accès.',
              },
              {
                icon: '🌍',
                title: 'Multilingue & multidevise',
                desc: 'Interface FR / EN / PT. Support natif de plusieurs devises (XOF, XAF, EUR, USD, GNF, GHS, NGN).',
              },
              {
                icon: '📊',
                title: 'Reporting automatisé',
                desc: 'Tableaux de bord temps réel, extraction instantanée, consolidation multi-filiales automatique.',
              },
              {
                icon: '🚗',
                title: 'Souscription auto simplifiée',
                desc: 'Du client à l’attestation en quelques minutes, avec contrôles automatiques et zéro double saisie.',
              },
              {
                icon: '⚙️',
                title: 'Ergonomie moderne',
                desc: 'Interface intuitive, écrans épurés, parcours guidés pour réduire la courbe d’apprentissage.',
              },
              {
                icon: '♻️',
                title: 'Gestion sinistres intégrée',
                desc: 'Du premier avis au règlement : workflow complet, provisions, expertise et édition automatique des BPC.',
              },
              {
                icon: '📋',
                title: 'Réassurance & comptabilité',
                desc: 'Traités intégrés, calcul automatique des cessions, suivi des encaissements et reversements réassureurs.',
              },
              {
                icon: '🤖',
                title: 'Éditiques automatisées',
                desc: 'Attestations, cartes vertes, quittances, avenants et BPC générés automatiquement, adaptés à chaque pays.',
              },
            ].map((feat, index) => (
              <motion.div
                // eslint-disable-next-line react/no-array-index-key
                key={feat.title}
                variants={fadeInUp}
                transition={{ delay: 0.02 * index }}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B2A6B] to-[#0D1A45] text-lg">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{feat.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* DEMO */}
        <motion.section
          id="demo"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-10 text-slate-50 md:py-12"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.06)_1px,transparent_1px)] bg-[length:60px_60px]" />
            <div className="absolute -right-32 -top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,168,0,0.18)_0%,transparent_70%)]" />
            <div className="absolute -left-24 bottom-[-120px] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(26,45,109,0.5)_0%,transparent_70%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl md:max-w-7xl px-6 md:px-10">
            <div className="space-y-3">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#F5A800]/40 bg-[#F5A800]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5A800]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A800]" />
                Démo vidéo · Mascotte Novatech
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-xl font-semibold md:text-2xl"
              >
                Découvrez Novatech avec votre mascotte.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-sm text-slate-200/80"
              >
                Une courte vidéo raconte le parcours complet d&apos;un dossier — de la souscription
                au règlement — guidé par la mascotte du projet. Idéal à projeter en COPIL ou en
                formation.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative mt-6 flex flex-col gap-5 md:flex-row"
            >
              {/* Bloc vidéo mascotte mis en avant */}
              <div className="relative flex-1">
                <div className="absolute -top-3 right-4 z-10 rounded-full bg-[#F5A800] px-3 py-1 text-[10px] font-semibold text-slate-900 shadow-lg">
                  🎬 Vidéo mascotte · 3 min
                </div>
                <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-[#F5A800]/40 bg-gradient-to-br from-[#1A2D6D] via-[#0D1A45] to-black text-xs text-slate-100/90 md:h-60">
                  <div className="flex flex-col items-center gap-3 rounded-2xl bg-black/30 px-5 py-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg">
                        🐺
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                          Mascotte Novatech
                        </div>
                        <div className="text-sm font-semibold text-slate-50">
                          « Suivez-moi dans le nouvel outil ! »
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-[#F5A800]/40 transition hover:shadow-lg hover:shadow-[#F5A800]/60"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 text-sm">
                        ▶
                      </span>
                      Lancer la vidéo de démonstration
                    </button>
                    <p className="text-[11px] text-slate-200/80">
                      Idée : intégrer ici la vraie vidéo mascotte (YouTube, fichier interne ou
                      animation).
                    </p>
                  </div>
                </div>
              </div>

              {/* Légende de la démo */}
              <div className="flex-1 space-y-3 text-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F5A800]">
                  Ce que la vidéo met en scène
                </div>
                <ul className="space-y-1.5 text-[13px] text-slate-100/90">
                  <li>• Un client arrive en agence ou via un partenaire, la mascotte guide la souscription Auto.</li>
                  <li>• En cas de sinistre, elle montre le suivi temps réel et les étapes clés pour le gestionnaire.</li>
                  <li>• Enfin, elle illustre les encaissements et mises à jour automatiques pour la comptabilité.</li>
                </ul>
                <p className="text-[12px] text-slate-300">
                  Cette séquence peut être utilisée dans les ateliers pays, les formations et les
                  communications internes pour donner envie de découvrir le nouvel outil.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* BÉNÉFICES PAR PROFIL */}
        <motion.section
          id="benefices"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 px-6 md:px-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl font-semibold text-slate-900 md:text-2xl"
          >
            Des bénéfices concrets pour chaque profil.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              {
                title: 'Souscripteur',
                icon: '💼',
                desc: 'Parcours guidés, moins de clics, moins d’erreurs, plus de temps pour le client.',
              },
              {
                title: 'Comptable',
                icon: '📒',
                desc: 'Suivi automatisé des encaissements et des impayés, rapprochements facilités.',
              },
              {
                title: 'Direction',
                icon: '📈',
                desc: 'Reporting temps réel, vue consolidée groupe, prise de décision accélérée.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="font-semibold text-slate-900">{item.title}</div>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ROADMAP — inspirée de la section premium 📅 FEUILLE DE ROUTE & AVANCEMENT */}
        <motion.section
          id="roadmap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-10 text-slate-50 md:py-12"
        >
          {/* Motif de fond façon grille dorée */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.06)_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative mx-auto max-w-6xl md:max-w-7xl px-6 md:px-10 space-y-6">
            {/* Eyebrow */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2"
            >
              <span className="h-1 w-7 rounded-full bg-[#F5A800]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F5A800]">
                Rubrique 04 — Feuille de route & avancement
              </span>
            </motion.div>

            {/* Titre + description */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-semibold tracking-[0.08em] md:text-3xl">
                📅 Feuille de route Novatech &amp; avancement
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200/80">
                Transparence totale sur un programme de 27 mois. La feuille de route Novatech est
                le point de repère unique pour suivre les jalons, l&apos;avancement et l&apos;engagement
                des équipes.
              </p>
            </motion.div>

            {/* KPI jauges (simplifiées) */}
            <motion.div
              variants={fadeInUp}
              className="grid gap-4 md:grid-cols-4"
            >
              {[
                {
                  label: 'Avancement global',
                  value: '28%',
                  detail: 'Time to Market : 19 mois (Auto)',
                  color: '#F5A800',
                },
                {
                  label: 'Taux de retard',
                  value: '20%',
                  detail: 'Seuil max cible : ≤ 20%',
                  color: '#22C55E',
                },
                {
                  label: 'Écart budgétaire',
                  value: '5%',
                  detail: 'Seuil max cible : ≤ 5%',
                  color: '#60A5FA',
                },
                {
                  label: 'Engagement équipes',
                  value: '60%',
                  detail: 'Objectif : ≥ 90%',
                  color: '#C084FC',
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex flex-col items-center rounded-2xl border border-[#F5A800]/25 bg-white/5 p-4 text-center text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:border-[#F5A800]/50"
                >
                  <div className="relative mb-3 h-20 w-20">
                    <div className="absolute inset-0 rounded-full border border-white/10 bg-slate-900/30" />
                    <div className="absolute inset-2 rounded-full border-2 border-white/5" />
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                      {kpi.value}
                    </div>
                    <div
                      className="absolute inset-1 rounded-full border-2 border-transparent border-t-[3px]"
                      style={{ borderTopColor: kpi.color, transform: 'rotate(40deg)' }}
                    />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                    {kpi.label}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-300/80">{kpi.detail}</div>
                </div>
              ))}
            </motion.div>

            {/* Timeline verticale */}
            <motion.div
              variants={fadeInUp}
              className="mt-2 grid gap-6 md:grid-cols-[220px,minmax(0,1fr)]"
            >
              <div className="space-y-2 text-xs text-slate-200/80">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
                  2024 → 2026 · Programme 27 mois
                </div>
                <p>
                  Chaque jalon est l&apos;occasion de communiquer, former et rassurer les équipes
                  sur la progression de Novatech.
                </p>
              </div>

              <div className="relative border-l border-slate-700/60 pl-6">
                <div className="absolute left-[-2px] top-0 h-6 w-[3px] rounded-full bg-gradient-to-b from-[#F5A800] to-transparent" />

                <div className="space-y-3">
                  {[
                    {
                      date: 'Oct. 2024',
                      status: 'Réalisé',
                      statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
                      title: '🚩 Lancement officiel du programme Novatech',
                      desc: "Kick-off groupe, installation de la gouvernance projet et validation de la feuille de route 27 mois pour la refonte du logiciel métier.",
                      tags: ['Gouvernance', 'Kick-off', '10 pays mobilisés'],
                      done: true,
                      current: false,
                    },
                    {
                      date: 'T1 2025',
                      status: 'Réalisé',
                      statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
                      title: '🔬 Ateliers fonctionnels & cadrage Novatech',
                      desc: 'Ateliers par branche (Auto, Sinistres, Comptabilité, Réassurance) et recensement des éditiques pays pour définir le périmètre fonctionnel cible.',
                      tags: ['Auto', 'Sinistres', 'Éditiques', 'Référents métiers'],
                      done: true,
                      current: false,
                    },
                    {
                      date: 'T2 2025',
                      status: 'En cours',
                      statusColor: 'bg-amber-500/15 text-amber-200 border-amber-400/50',
                      title: '⚙️ Paramétrage & recette module Auto',
                      desc: 'Paramétrage du module Auto pour les filiales pilotes, tests fonctionnels et formation des référents métier, incluant les éditiques prioritaires.',
                      tags: ['Paramétrage', 'Recette', 'Formation référents'],
                      done: false,
                      current: true,
                    },
                    {
                      date: 'Juil. 2025',
                      status: 'À venir',
                      statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                      title: '🚀 Go-Live Auto — filiales pilotes',
                      desc: 'Premier déploiement en production de Novatech sur la branche Auto, avec accompagnement terrain renforcé et suivi rapproché des utilisateurs.',
                      tags: ['Go-Live', 'Production', 'Filiales pilotes'],
                      done: false,
                      current: false,
                    },
                    {
                      date: '2025 – 2026',
                      status: 'À venir',
                      statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                      title: '🌍 Déploiement progressif dans les 10 pays',
                      desc: 'Extension progressive aux autres branches (Sinistres, Comptabilité, Réassurance) et aux 10 filiales NSIA, selon un planning pays détaillé.',
                      tags: ['Sinistres', 'Comptabilité', '10 filiales'],
                      done: false,
                      current: false,
                    },
                    {
                      date: 'Déc. 2026',
                      status: 'Objectif final',
                      statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                      title: '🏁 Clôture programme — 10 pays déployés',
                      desc: 'Généralisation complète de Novatech, bilan projet, passage en mode exploitation et célébration de la transformation réussie.',
                      tags: ['Clôture programme', 'Bilan', 'Célébration'],
                      done: false,
                      current: false,
                    },
                  ].map((step, index) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      className="relative pl-4"
                    >
                      {/* Pastille de timeline */}
                      <div
                        className="absolute left-[-13px] top-2 h-3.5 w-3.5 rounded-full border-2"
                        style={{
                          borderColor: step.current
                            ? NSIA_COLORS.gold
                            : step.done
                            ? '#22C55E'
                            : '#C0C5D6',
                          boxShadow: step.current
                            ? '0 0 0 5px rgba(245,166,35,0.25)'
                            : 'none',
                          backgroundColor: step.done
                            ? '#22C55E'
                            : step.current
                            ? NSIA_COLORS.gold
                            : NSIA_COLORS.silver,
                        }}
                      />

                      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-3 text-xs">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F5A800]">
                            {step.date}
                          </div>
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${step.statusColor}`}
                          >
                            {step.status}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-50">{step.title}</div>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-200/80">
                          {step.desc}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#F5A800]/35 bg-[#F5A800]/10 px-2 py-0.5 text-[10px] font-medium text-amber-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* MON PAYS — MA FILIALE (Rubrique 05) */}
        <motion.section
          id="pays"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-b from-[#1B2A6B] to-[#0D1A45] py-10 text-slate-50 md:py-12"
        >
          <div className="mx-auto max-w-6xl md:max-w-7xl space-y-6 px-6 md:px-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
              <span className="h-1.5 w-7 rounded-full bg-[#F5A800]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
                  Rubrique 05 — Mon pays / Ma filiale
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-[0.06em] md:text-3xl">
                🌍 Mon pays — Ma filiale
              </h2>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Chaque filiale trouve ici ses informations : planning local, équipe projet, éditiques
                pays, formations. Un contenu adapté aux réalités de chaque marché africain NSIA.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-4 md:grid-cols-5"
            >
              {[
                { flag: '🇧🇯', name: 'Bénin', status: 'En cours', progress: 45 },
                { flag: '🇬🇼', name: 'Guinée-Bissau', status: 'Planifié', progress: 10 },
                { flag: '🇨🇲', name: 'Cameroun', status: 'En cours', progress: 38 },
                { flag: '🇨🇬', name: 'Congo', status: 'Planifié', progress: 8 },
                { flag: '🇨🇮', name: "Côte d'Ivoire", status: 'En cours', progress: 55 },
                { flag: '🇬🇦', name: 'Gabon', status: 'Planifié', progress: 12 },
                { flag: '🇬🇳', name: 'Guinée', status: 'En cours', progress: 30 },
                { flag: '🇲🇱', name: 'Mali', status: 'En cours', progress: 42 },
                { flag: '🇸🇳', name: 'Sénégal', status: 'En cours', progress: 48 },
                { flag: '🇹🇬', name: 'Togo', status: 'En cours', progress: 35 },
              ].map((pays) => (
                <div
                  key={pays.name}
                  className="rounded-2xl border border-[rgba(245,168,0,0.18)] bg-white/5 p-4 text-center text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-[#F5A800] hover:bg-white/10 hover:shadow-lg"
                >
                  <div className="mb-2 text-3xl">{pays.flag}</div>
                  <div className="text-sm font-semibold text-white">{pays.name}</div>
                  <span
                    className={`mt-1 inline-flex rounded-full px-3 py-0.5 text-[10px] font-semibold ${
                      pays.status === 'En cours'
                        ? 'bg-[rgba(245,168,0,0.2)] text-[#F5A800]'
                        : 'bg-white/10 text-slate-200/70'
                    }`}
                  >
                    {pays.status}
                  </span>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200"
                      style={{ width: `${pays.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FORMATION — Une montée en compétences accompagnée (inspirée du centre de ressources) */}
        <motion.section
          id="formation"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 px-6 md:px-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl font-semibold text-slate-900 md:text-2xl"
          >
            🎓 Une montée en compétences accompagnée.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-sm text-slate-600"
          >
            L&apos;insuffisance de formation est un risque majeur identifié. Cette rubrique y répond
            directement avec des vidéos courtes, des guides visuels et des quiz simples pour
            sécuriser la prise en main de Novatech dans toutes les filiales.
          </motion.p>

          {/* Cartes de formation adaptées du centre de ressources premium */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: '🎬',
                title: 'Tutoriels vidéo',
                subtitle: 'Bibliothèque · 3–5 min par parcours',
                items: [
                  'Souscription Auto mono & flotte',
                  'Gestion sinistre matériel & corporel',
                  'Encaissements & quittancement',
                  'Édition des documents pays (éditiques)',
                ],
              },
              {
                icon: '📚',
                title: 'Guides PDF & fiches',
                subtitle: 'Manuels pas à pas · Captures d’écran',
                items: [
                  'Guide Souscripteur & Gestionnaire sinistres',
                  'Guide Comptable & Partenaire commercial',
                  'Fiches réflexe par parcours clé',
                  'FAQ enrichie par les retours terrain',
                ],
              },
              {
                icon: '✅',
                title: 'Quiz & certification',
                subtitle: 'Tests courts avant Go‑Live',
                items: [
                  'Quiz Connexion & navigation de base',
                  'Quiz Souscription Auto & sinistres',
                  'Quiz Éditions & documents',
                  'Parcours « Utilisateur confirmé »',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#1B2A6B] to-[#0D1A45] px-4 py-3 text-slate-50">
                  <div className="text-2xl">{card.icon}</div>
                  <div>
                    <div className="text-sm font-semibold">{card.title}</div>
                    <div className="text-[11px] text-slate-200/80">{card.subtitle}</div>
                  </div>
                </div>
                <div className="space-y-1.5 px-4 py-3 text-[11px] text-slate-600">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 border-b border-slate-100 py-1 last:border-b-0"
                    >
                      <span className="mt-0.5 text-xs text-[#F5A800]">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-[11px] text-slate-500"
          >
            Conseil adoption : mieux vaut plusieurs contenus courts et concrets (vidéo 3 minutes,
            fiche réflexe, quiz rapide) qu’un long manuel théorique. L’objectif est que chaque
            utilisateur se sente accompagné, pas submergé.
          </motion.p>
        </motion.section>

        {/* ÉQUIPE */}
        <motion.section
          id="equipe"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 px-4 md:px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl font-semibold text-slate-900 md:text-2xl"
          >
            Une équipe projet engagée derrière Novatech.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-4"
          >
            {[
              { initials: 'JD', role: 'Sponsor', name: 'Mme Janine DIAGOU' },
              {
                initials: 'DD',
                role: 'Coordinatrice',
                name: 'Mme Dominique DIAGOU Épse EHILE',
              },
              { initials: 'EA', role: 'Chef de projet Groupe', name: 'M. Etienne AHOUNOU' },
              { initials: 'DP', role: 'Directeurs de projet filiales', name: 'Équipes pays' },
            ].map((member) => (
              <div
                key={member.role}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-slate-50">
                  {member.initials}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {member.role}
                </div>
                <div className="text-xs text-slate-800">{member.name}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* AIDE & SUPPORT — Rubrique 09 */}
        <motion.section
          id="support"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 px-6 md:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-7 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Rubrique 09 — Aide &amp; support
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              🛠️ Aide &amp; support
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              Personne ne doit se sentir seul face aux difficultés. Le temps de réponse est
              déterminant — un SLA clair et affiché rassure les équipes et encourage l&apos;usage
              quotidien de Novatech.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-4"
          >
            {[
              {
                icon: '📝',
                title: "Signalement d'incident",
                desc: "Bug, question fonctionnelle ou demande d'amélioration. Formulaire simple, catégorisé, traité sous 24h.",
                badge: '⏱ SLA · Réponse sous 24h',
              },
              {
                icon: '📊',
                title: 'Suivi de mes demandes',
                desc: 'Tableau de bord personnel : statut en temps réel — Reçu / En cours / Résolu. Notification automatique.',
                badge: '🔔 Notif à chaque mise à jour',
              },
              {
                icon: '📞',
                title: 'Contact direct équipe',
                desc: "Email, téléphone, chat avec l'équipe projet. Horaires de disponibilité par fuseau horaire africain.",
                badge: '💬 Chat 8h–18h WAT/GMT',
              },
              {
                icon: '🧠',
                title: 'Base de connaissances',
                desc: 'Articles de résolution des problèmes fréquents, enrichie en continu par les remontées de toutes les filiales.',
                badge: '🔍 Recherche instantanée',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-600">{item.desc}</p>
                <span className="mt-1 inline-flex rounded-full bg-gradient-to-r from-amber-100 to-amber-200 px-3 py-1 text-[10px] font-semibold text-slate-900">
                  {item.badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* FACTEURS CLÉS DE SUCCÈS — Principes + Risques / Réponses */}
        <motion.section
          id="facteurs"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-10 text-slate-50 md:py-12"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative mx-auto max-w-6xl md:max-w-7xl space-y-6 px-6 md:px-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-7 rounded-full bg-[#F5A800]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
                  Facteurs clés de succès
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-[0.06em] md:text-3xl">
                🎯 Principes directeurs
              </h2>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Cinq règles d&apos;or qui guident tout le contenu publié sur le site projet
                Novatech, pour rester centré sur les métiers et l&apos;adoption dans les 10 pays.
              </p>
            </motion.div>

            {/* Principes */}
            <motion.div
              variants={fadeInUp}
              className="grid gap-3 md:grid-cols-5"
            >
              {[
                {
                  icon: '🗣️',
                  title: 'Parler métier',
                  desc: "Pas de jargon IT. Du point de vue de l'utilisateur, toujours.",
                },
                {
                  icon: '📸',
                  title: 'Montrer',
                  desc: 'Captures, vidéos, témoignages &gt; longs textes descriptifs.',
                },
                {
                  icon: '📍',
                  title: 'Localiser',
                  desc: 'Chaque filiale se retrouve dans un contenu adapté à elle.',
                },
                {
                  icon: '🔄',
                  title: 'Mettre à jour',
                  desc: 'Site vivant = confiance. Site figé = désengagement.',
                },
                {
                  icon: '🏆',
                  title: 'Célébrer',
                  desc: 'Valoriser chaque jalon pour maintenir la dynamique 27 mois.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-[#F5A800]/25 bg-white/5 p-4 text-center text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-[#F5A800]/50 hover:shadow-md"
                >
                  <div className="mb-2 text-2xl">{p.icon}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F5A800]">
                    {p.title}
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-100/80">{p.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Risques / Réponses */}
            <motion.div
              variants={fadeInUp}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-7 rounded-full bg-[#F5A800]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
                  Comment le site répond aux risques identifiés
                </span>
              </div>
              <div className="space-y-2 text-[11px]">
                {[
                  {
                    risk: "Manque d'implication des utilisateurs finaux",
                    answer:
                      'Rubrique 02 « Pourquoi ? » — bénéfices concrets par profil + témoignages terrain vidéo.',
                  },
                  {
                    risk: 'Insuffisance dans la formation des équipes',
                    answer:
                      'Rubrique 06 « Se former » — vidéos courtes, guides visuels, quiz, calendrier des sessions.',
                  },
                  {
                    risk: "Difficulté d'adaptation aux réalités locales",
                    answer:
                      'Rubrique 05 « Mon pays » — page dédiée par filiale, éditiques et planning local (à venir).',
                  },
                  {
                    risk: "Mauvaise utilisation du logiciel post Go-Live",
                    answer:
                      'Tutoriels + base de connaissances + support réactif sous 24h garanti.',
                  },
                  {
                    risk: "Défaut de communication sur l'avancement",
                    answer:
                      'Feuille de route mise à jour régulièrement + newsletter bimensuelle + célébrations de jalons.',
                  },
                ].map((row) => (
                  <div
                    key={row.risk}
                    className="grid gap-2 rounded-2xl bg:white/0 bg-white/5 p-3 text-xs md:grid-cols-[minmax(0,1.1fr)_40px_minmax(0,1.1fr)]"
                  >
                    <div className="flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-900/30 px-3 py-2 text-[11px] text-rose-100">
                      <span>⚠️</span>
                      <span className="font-semibold">{row.risk}</span>
                    </div>
                    <div className="flex items-center justify-center text-lg text-slate-100">
                      →
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-900/25 px-3 py-2 text-[11px] text-emerald-100">
                      <span>✅</span>
                      <span>{row.answer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PLANNING ÉDITORIAL RECOMMANDÉ — Actualités & communication */}
        <motion.section
          id="planning-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 px-6 md:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-7 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Rubrique 08 — Actualités &amp; communication
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              📆 Planning éditorial recommandé
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              La régularité est critique : une brève actu chaque semaine vaut mieux qu&apos;un long
              article tous les deux mois. Le silence tue l&apos;adhésion sur 27 mois.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <table className="min-w-full text-left text-xs text-slate-700">
              <thead className="bg-[#0D1A45] text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-100">
                <tr>
                  <th className="px-4 py-3">Fréquence</th>
                  <th className="px-4 py-3">Action</th>
                  <th className="px-4 py-3">Responsable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    freq: '📅 Hebdomadaire',
                    action:
                      "Mise à jour page d'accueil — actualités, compteur d'avancement Novatech.",
                    resp: 'M. Etienne AHOUNOU — Chef de projet Groupe',
                  },
                  {
                    freq: '📰 Bimensuelle',
                    action:
                      'Newsletter projet envoyée à toutes les équipes des 10 filiales NSIA.',
                    resp: 'Chef de projet Groupe',
                  },
                  {
                    freq: '📊 Bimensuelle',
                    action:
                      "Mise à jour feuille de route, KPIs et tableau d'avancement par pays.",
                    resp: 'Chef de projet Groupe',
                  },
                  {
                    freq: '🎤 Mensuelle',
                    action:
                      'Témoignage utilisateur vidéo ou écrit — filiales pilotes en priorité.',
                    resp: 'Directeurs de projet filiales',
                  },
                  {
                    freq: '📋 Mensuelle',
                    action:
                      'Synthèse COPIL publiée — version vulgarisée, accessible à tous.',
                    resp: 'Mme Dominique DIAGOU — Coordinatrice',
                  },
                  {
                    freq: '🏆 Chaque jalon',
                    action:
                      'Célébration publiée : Go-Live, formation terminée, pays déployé…',
                    resp: 'Équipe projet Groupe',
                  },
                  {
                    freq: '🔄 En continu',
                    action:
                      'Enrichissement FAQ, base de connaissances, réponses aux signalements.',
                    resp: 'Équipe support',
                  },
                ].map((row) => (
                  <tr
                    key={row.freq}
                    className="border-b border-slate-100 last:border-b-0 odd:bg-slate-50/60"
                  >
                    <td className="px-4 py-3 font-semibold text-[#F5A800]">{row.freq}</td>
                    <td className="px-4 py-3 text-[11px] text-slate-700">{row.action}</td>
                    <td className="px-4 py-3 text-[11px] font-medium text-slate-800">
                      {row.resp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section
          id="cta-final"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden bg-gradient-to-r from-[#1B2A6B] via-[#0B1440] to-slate-900 py-8 text-slate-50"
        >
          <div className="mx-auto max-w-6xl md:max-w-7xl px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
            >
              <div className="max-w-xl space-y-2">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Prêt à entrer dans l’ère Novatech ?
                </h2>
                <p className="text-sm text-slate-100/85">
                  Novatech est bien plus qu&apos;un nouveau logiciel : c&apos;est un levier pour
                  simplifier le quotidien, fiabiliser les données et renforcer la performance des
                  filiales NSIA.
                </p>
              </div>
            <button
              onClick={() => scrollTo('demo')}
              className="inline-flex items-center justify-center rounded-full bg-[#F5A800] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-[#F5A800]/30 transition hover:shadow-xl hover:shadow-[#F5A800]/40"
            >
                Explorer la démo Novatech
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </SiteShell>
  );
}
