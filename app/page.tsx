'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiteShell } from '../components/layout/SiteShell';
import { NSIA_COLORS } from '../constants/theme';
import { fadeInUp, staggerContainer } from '../lib/animations';

const NAV_ITEMS = [
  { id: 'hero', label: 'Le projet' },
  { id: 'problemes', label: 'Pourquoi ce projet' },
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
      const navHeight = 60;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const rect = entry.target.getBoundingClientRect();
            const navHeight = 60;
            // Section active quand elle est dans le viewport et proche du haut
            if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-80px 0px -60% 0px',
        threshold: [0, 0.1, 0.3, 0.5],
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
        className="relative min-h-[85vh] overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-[#0B1440] via-[#1B2A6B] to-[#050816] px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.25)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(192,197,214,0.2)_0%,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,166,35,0.4)] bg-[rgba(245,166,35,0.12)] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5A800]">
              <span
                className="h-2 w-2 animate-pulse rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              Projet Novatech · Oct. 2024 — Déc. 2026
            </span>

            <h1 className="font-[var(--font-bebas)] text-5xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              NOVATECH,
              <br />
              <span className="text-[#F5A800]">LE NOUVEL OUTIL</span>
              <br />
              MÉTIER DU GROUPE NSIA.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-100/90 md:text-lg">
              <span className="font-semibold text-white">
                Un nouvel outil, une nouvelle ère pour l&apos;assurance NSIA.
              </span>{' '}
              Novatech remplace l&apos;ancien logiciel lent et instable par une plateforme moderne,
              rapide et sécurisée, pensée pour les équipes métier : souscripteurs, gestionnaires,
              comptables et direction dans les 10 filiales africaines.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('solution')}
                className="inline-flex items-center justify-center rounded-lg bg-[#F5A800] px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-[#F5A800]/30 transition-all hover:shadow-xl hover:shadow-[#F5A800]/40 hover:scale-[1.02]"
              >
                Découvrir le projet
              </button>
              <button
                onClick={() => scrollTo('demo')}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-medium text-slate-50 backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
              >
                Voir la démo
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="text-sm uppercase tracking-wider text-slate-300">
                Avancement global du programme
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-800/70">
                  <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200 shadow-[0_0_12px_rgba(245,166,35,0.55)]" />
                </div>
                <div className="text-xl font-bold text-[#F5A800]">28%</div>
              </div>
              <div className="text-sm text-slate-200/80">
                Prochain jalon : <span className="font-semibold text-white">Go-Live Auto · Juil. 2025</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#111936] via-[#0D1A45] to-[#050816] p-6 shadow-2xl"
            >
              <div className="relative mb-6 flex items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Interface métier Novatech
                </span>
                <span className="ml-auto rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                  En conception
                </span>
              </div>

              <div className="grid gap-3 text-sm">
                {[
                  { title: 'Souscription Auto', subtitle: 'Module pilote', progress: '75%', active: true },
                  { title: 'Sinistres', subtitle: 'En paramétrage', progress: '45%', active: false },
                  { title: 'Comptabilité', subtitle: 'Ateliers en cours', progress: '30%', active: false },
                  { title: 'Reporting', subtitle: 'Démo disponible', progress: '60%', active: false },
                ].map((mod) => (
                  <div
                    key={mod.title}
                    className={`flex items-center gap-4 rounded-xl border bg-white/5 p-4 transition hover:bg-white/[0.12] ${
                      mod.active ? 'border-[#F5A800]/70 bg-[#F5A800]/10' : 'border-white/10'
                    }`}
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-white">{mod.title}</div>
                        <div className="text-xs text-slate-300">{mod.subtitle}</div>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/70">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#F5A800] to-amber-200"
                          style={{ width: mod.progress }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NAVIGATION PRINCIPALE */}
      <nav
        className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/98 backdrop-blur-md"
        aria-label="Navigation Novatech"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 text-xs md:text-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveSection(item.id);
                  scrollTo(item.id);
                }}
                className={`relative inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-[#F5A800] text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-[#F5A800]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="space-y-24 py-16 md:space-y-32 md:py-24">
        {/* POURQUOI CE PROJET */}
        <motion.section
          id="problemes"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-12 px-6 md:px-10"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Pourquoi ce projet
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Pourquoi ce projet Novatech ?
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Objectif : faire comprendre à chaque collaborateur pourquoi on change. Les gens
              n&apos;adhèrent pas à une refonte SI, ils adhèrent à ce que Novatech change concrètement
              dans leur quotidien métier.
            </p>
          </motion.div>

          {/* Comparatif Avant / Après */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg md:grid md:grid-cols-[1fr_auto_1fr]"
          >
            <div className="space-y-4 border-b border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white md:border-b-0 md:border-r">
              <h3 className="text-xl font-bold text-rose-200">IXPERTA — Aujourd&apos;hui</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Instabilité chronique causant des pertes d&apos;exploitation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Données production / sinistres / réassurance peu fiables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Reporting difficile, pas de consolidation automatique groupe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Sécurité insuffisante face aux risques cyber.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Outil monolingue et monodévise, mal adapté au multi-pays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Pas d&apos;interopérabilité avec les paiements digitaux.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>Interface vieillissante, expérience utilisateur pénalisante.</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center bg-slate-900 px-6 py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A800] text-2xl font-bold text-slate-900 shadow-lg">
                →
              </div>
            </div>

            <div className="space-y-4 bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 text-white">
              <h3 className="text-xl font-bold text-emerald-200">Novatech — Demain</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-emerald-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Architecture robuste, haute disponibilité, zéro perte d&apos;exploitation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Données fiables en temps réel — une source de vérité groupe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Reporting automatisé, tableaux de bord temps réel par pays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Sécurité renforcée, conforme aux standards bancaires.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Multilingue FR/EN/PT et multidevise pour les 10 pays NSIA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Interopérabilité Mobile Money, API partenaires, paiements digitaux.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>Ergonomie moderne, parcours simplifiés, adoption rapide.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bénéfices par profil métier */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Bénéfices par profil métier</h3>
              <p className="text-slate-600">Chaque collaborateur découvre ce que Novatech change concrètement dans son quotidien.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Souscripteur',
                  role: 'Chargé de production',
                  quote: '« Fini les doubles saisies. » Souscription auto en quelques clics, attestation éditée instantanément.',
                },
                {
                  name: 'Gestionnaire Sinistres',
                  role: 'Service indemnisation',
                  quote: '« Suivi temps réel. » Dossier centralisé, workflow automatisé, délais optimisés.',
                },
                {
                  name: 'Partenaire commercial',
                  role: 'Courtier / Agent / Bancassureur',
                  quote: '« Autonomie totale. » Accès digital aux produits de masse, suivi commissions en temps réel.',
                },
                {
                  name: 'Comptable',
                  role: 'Direction financière',
                  quote: '« Encaissements fiables. » Suivi impayés automatisé, clôtures mensuelles accélérées.',
                },
                {
                  name: 'Direction filiale',
                  role: 'DG / DGA',
                  quote: '« Vision instantanée. » Reporting automatique, tableaux de bord temps réel.',
                },
                {
                  name: 'Holding NSIA',
                  role: 'Direction Groupe',
                  quote: '« Consolidation groupe. » Accès consolidé aux productions de toutes les filiales.',
                },
              ].map((profil) => (
                <div
                  key={profil.name}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#0D1A45] to-[#1B2A6B] p-6 text-white shadow-lg transition hover:shadow-xl"
                >
                  <div>
                    <div className="text-lg font-bold text-white">{profil.name}</div>
                    <div className="text-sm font-medium text-[#F5A800]/90">{profil.role}</div>
                  </div>
                  <p className="rounded-lg border-l-4 border-[#F5A800] bg-[#F5A800]/10 px-4 py-3 text-sm leading-relaxed text-slate-100">
                    {profil.quote}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Témoignage sponsor */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg md:grid-cols-[1.2fr_1fr]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: NSIA_COLORS.gold }}
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Témoignage sponsor
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                « Novatech est un investissement stratégique pour les 10 prochaines années. »
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                Dans ce message, la Sponsor du projet explique la vision : sécuriser le cœur du
                métier assurance, redonner de la fluidité aux équipes et doter chaque filiale d&apos;un
                outil fiable et moderne. Ce témoignage est clé pour embarquer toutes les directions
                locales.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-slate-900 shadow-xl">
              <video
                controls
                className="h-full w-full object-cover"
              >
                <source
                  src="/motion2Fast_Realistic_cinematic_video_a_Black_person_confident_0.mp4"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture de cette vidéo.
              </video>
            </div>
          </motion.div>
        </motion.section>

        {/* LE NOUVEL OUTIL */}
        <motion.section
          id="solution"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-12 px-6 md:px-10"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Le nouvel outil
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Novatech — Fonctionnalités phares
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              L&apos;objectif est de démystifier le changement en montrant concrètement ce que Novatech
              apporte : interopérabilité, sécurité, multilingue / multidevise, reporting, parcours
              métier simplifiés.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Interopérabilité paiements digitaux',
                desc: 'Connexion native Mobile Money (Orange, MTN, Wave…), systèmes bancaires locaux, collecte de primes sans friction.',
              },
              {
                title: 'Sécurité renforcée',
                desc: 'Chiffrement bout-en-bout, MFA, gestion fine des droits par rôle, traçabilité complète des accès.',
              },
              {
                title: 'Multilingue & multidevise',
                desc: 'Interface FR / EN / PT. Support natif de plusieurs devises (XOF, XAF, EUR, USD, GNF, GHS, NGN).',
              },
              {
                title: 'Reporting automatisé',
                desc: 'Tableaux de bord temps réel, extraction instantanée, consolidation multi-filiales automatique.',
              },
              {
                title: 'Souscription auto simplifiée',
                desc: "Du client à l'attestation en quelques minutes, avec contrôles automatiques et zéro double saisie.",
              },
              {
                title: 'Ergonomie moderne',
                desc: "Interface intuitive, écrans épurés, parcours guidés pour réduire la courbe d'apprentissage.",
              },
              {
                title: 'Gestion sinistres intégrée',
                desc: 'Du premier avis au règlement : workflow complet, provisions, expertise et édition automatique des BPC.',
              },
              {
                title: 'Réassurance & comptabilité',
                desc: 'Traités intégrés, calcul automatique des cessions, suivi des encaissements et reversements réassureurs.',
              },
              {
                title: 'Éditiques automatisées',
                desc: 'Attestations, cartes vertes, quittances, avenants et BPC générés automatiquement, adaptés à chaque pays.',
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feat.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* DEMO */}
        <motion.section
          id="demo"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-20 text-slate-50 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-8 px-6 md:px-10">
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A800]/40 bg-[#F5A800]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5A800]">
                Démo vidéo · Mascotte Novatech
              </div>
              <h2 className="text-4xl font-bold md:text-5xl">
                Découvrez Novatech avec votre mascotte
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200/90">
                Une courte vidéo raconte le parcours complet d&apos;un dossier — de la souscription
                au règlement — guidé par la mascotte du projet. Idéal à projeter en COPIL ou en
                formation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-8 md:grid-cols-[1fr_1fr]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#F5A800]/40 bg-gradient-to-br from-[#1A2D6D] via-[#0D1A45] to-black">
                <div className="absolute right-4 top-4 z-10 rounded-full bg-[#F5A800] px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                  Vidéo mascotte · 3 min
                </div>
                <div className="flex h-80 items-center justify-center p-8">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl">
                      ▶
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Mascotte Novatech
                      </div>
                      <div className="mt-1 text-lg font-bold text-slate-50">
                        « Suivez-moi dans le nouvel outil ! »
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:shadow-lg"
                    >
                      Lancer la vidéo de démonstration
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#F5A800]">Ce que la vidéo met en scène</h3>
                <ul className="space-y-3 text-base leading-relaxed text-slate-100/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A800]" />
                    <span>Un client arrive en agence ou via un partenaire, la mascotte guide la souscription Auto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A800]" />
                    <span>En cas de sinistre, elle montre le suivi temps réel et les étapes clés pour le gestionnaire.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A800]" />
                    <span>Enfin, elle illustre les encaissements et mises à jour automatiques pour la comptabilité.</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-300">
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
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-8 px-6 md:px-10"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900 md:text-5xl">
            Des bénéfices concrets pour chaque profil
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Souscripteur',
                desc: "Parcours guidés, moins de clics, moins d'erreurs, plus de temps pour le client.",
              },
              {
                title: 'Comptable',
                desc: 'Suivi automatisé des encaissements et des impayés, rapprochements facilités.',
              },
              {
                title: 'Direction',
                desc: 'Reporting temps réel, vue consolidée groupe, prise de décision accélérée.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-xl font-bold text-slate-900">{item.title}</div>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ROADMAP */}
        <motion.section
          id="roadmap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-20 text-slate-50 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.04)_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-12 px-6 md:px-10">
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 rounded-full bg-[#F5A800]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5A800]">
                  Feuille de route & avancement
                </span>
              </div>
              <h2 className="text-4xl font-bold md:text-5xl">
                Feuille de route Novatech & avancement
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200/90">
                Transparence totale sur un programme de 27 mois. La feuille de route Novatech est
                le point de repère unique pour suivre les jalons, l&apos;avancement et l&apos;engagement
                des équipes.
              </p>
            </motion.div>

            {/* KPI */}
            <motion.div
              variants={fadeInUp}
              className="grid gap-6 md:grid-cols-4"
            >
              {[
                {
                  label: 'Avancement global',
                  value: '28%',
                  detail: 'Time to Market : 19 mois (Auto)',
                },
                {
                  label: 'Taux de retard',
                  value: '20%',
                  detail: 'Seuil max cible : ≤ 20%',
                },
                {
                  label: 'Écart budgétaire',
                  value: '5%',
                  detail: 'Seuil max cible : ≤ 5%',
                },
                {
                  label: 'Engagement équipes',
                  value: '60%',
                  detail: 'Objectif : ≥ 90%',
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex flex-col items-center rounded-2xl border border-[#F5A800]/25 bg-white/5 p-6 text-center shadow-sm"
                >
                  <div className="mb-4 text-4xl font-bold text-[#F5A800]">{kpi.value}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    {kpi.label}
                  </div>
                  <div className="mt-2 text-xs text-slate-300/80">{kpi.detail}</div>
                </div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative border-l-2 border-slate-700/60 pl-8">
                {[
                  {
                    date: 'Oct. 2024',
                    status: 'Réalisé',
                    statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
                    title: 'Lancement officiel du programme Novatech',
                    desc: "Kick-off groupe, installation de la gouvernance projet et validation de la feuille de route 27 mois pour la refonte du logiciel métier.",
                    tags: ['Gouvernance', 'Kick-off', '10 pays mobilisés'],
                    done: true,
                    current: false,
                  },
                  {
                    date: 'T1 2025',
                    status: 'Réalisé',
                    statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
                    title: 'Ateliers fonctionnels & cadrage Novatech',
                    desc: 'Ateliers par branche (Auto, Sinistres, Comptabilité, Réassurance) et recensement des éditiques pays pour définir le périmètre fonctionnel cible.',
                    tags: ['Auto', 'Sinistres', 'Éditiques', 'Référents métiers'],
                    done: true,
                    current: false,
                  },
                  {
                    date: 'T2 2025',
                    status: 'En cours',
                    statusColor: 'bg-amber-500/15 text-amber-200 border-amber-400/50',
                    title: 'Paramétrage & recette module Auto',
                    desc: 'Paramétrage du module Auto pour les filiales pilotes, tests fonctionnels et formation des référents métier, incluant les éditiques prioritaires.',
                    tags: ['Paramétrage', 'Recette', 'Formation référents'],
                    done: false,
                    current: true,
                  },
                  {
                    date: 'Juil. 2025',
                    status: 'À venir',
                    statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                    title: 'Go-Live Auto — filiales pilotes',
                    desc: 'Premier déploiement en production de Novatech sur la branche Auto, avec accompagnement terrain renforcé et suivi rapproché des utilisateurs.',
                    tags: ['Go-Live', 'Production', 'Filiales pilotes'],
                    done: false,
                    current: false,
                  },
                  {
                    date: '2025 – 2026',
                    status: 'À venir',
                    statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                    title: 'Déploiement progressif dans les 10 pays',
                    desc: 'Extension progressive aux autres branches (Sinistres, Comptabilité, Réassurance) et aux 10 filiales NSIA, selon un planning pays détaillé.',
                    tags: ['Sinistres', 'Comptabilité', '10 filiales'],
                    done: false,
                    current: false,
                  },
                  {
                    date: 'Déc. 2026',
                    status: 'Objectif final',
                    statusColor: 'bg-slate-500/15 text-slate-200 border-slate-400/40',
                    title: 'Clôture programme — 10 pays déployés',
                    desc: 'Généralisation complète de Novatech, bilan projet, passage en mode exploitation et célébration de la transformation réussie.',
                    tags: ['Clôture programme', 'Bilan', 'Célébration'],
                    done: false,
                    current: false,
                  },
                ].map((step, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    <div
                      className="absolute left-[-21px] top-2 h-4 w-4 rounded-full border-2"
                      style={{
                        borderColor: step.current
                          ? NSIA_COLORS.gold
                          : step.done
                          ? '#22C55E'
                          : '#C0C5D6',
                        boxShadow: step.current
                          ? '0 0 0 6px rgba(245,166,35,0.25)'
                          : 'none',
                        backgroundColor: step.done
                          ? '#22C55E'
                          : step.current
                          ? NSIA_COLORS.gold
                          : NSIA_COLORS.silver,
                      }}
                    />

                    <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#F5A800]">
                          {step.date}
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${step.statusColor}`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <div className="mb-2 text-lg font-bold text-slate-50">{step.title}</div>
                      <p className="mb-4 text-sm leading-relaxed text-slate-200/80">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#F5A800]/35 bg-[#F5A800]/10 px-3 py-1 text-xs font-medium text-amber-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* MON PAYS */}
        <motion.section
          id="pays"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-gradient-to-b from-[#1B2A6B] to-[#0D1A45] py-20 text-slate-50 md:py-28"
        >
          <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-10">
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 rounded-full bg-[#F5A800]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5A800]">
                  Mon pays / Ma filiale
                </span>
              </div>
              <h2 className="text-4xl font-bold md:text-5xl">
                Mon pays — Ma filiale
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200/90">
                Chaque filiale trouve ici ses informations : planning local, équipe projet, éditiques
                pays, formations. Un contenu adapté aux réalités de chaque marché africain NSIA.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-6 md:grid-cols-5"
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
                  className="rounded-xl border border-[rgba(245,168,0,0.18)] bg-white/5 p-6 text-center shadow-sm transition hover:border-[#F5A800] hover:bg-white/10"
                >
                  <div className="mb-3 text-4xl">{pays.flag}</div>
                  <div className="mb-2 text-base font-bold text-white">{pays.name}</div>
                  <span
                    className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      pays.status === 'En cours'
                        ? 'bg-[rgba(245,168,0,0.2)] text-[#F5A800]'
                        : 'bg-white/10 text-slate-200/70'
                    }`}
                  >
                    {pays.status}
                  </span>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
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

        {/* FORMATION */}
        <motion.section
          id="formation"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-12 px-6 md:px-10"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900 md:text-5xl">
            Une montée en compétences accompagnée
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            L&apos;insuffisance de formation est un risque majeur identifié. Cette rubrique y répond
            directement avec des vidéos courtes, des guides visuels et des quiz simples pour
            sécuriser la prise en main de Novatech dans toutes les filiales.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
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
                title: 'Guides PDF & fiches',
                subtitle: "Manuels pas à pas · Captures d'écran",
                items: [
                  'Guide Souscripteur & Gestionnaire sinistres',
                  'Guide Comptable & Partenaire commercial',
                  'Fiches réflexe par parcours clé',
                  'FAQ enrichie par les retours terrain',
                ],
              },
              {
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
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#1B2A6B] to-[#0D1A45] px-6 py-4 text-slate-50">
                  <div>
                    <div className="text-lg font-bold">{card.title}</div>
                    <div className="text-sm text-slate-200/80">{card.subtitle}</div>
                  </div>
                </div>
                <div className="space-y-2 px-6 py-4 text-sm text-slate-600">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 border-b border-slate-100 py-2 last:border-b-0"
                    >
                      <span className="mt-1 text-xs text-[#F5A800]">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ÉQUIPE */}
        <motion.section
          id="equipe"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-12 px-6 md:px-10"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900 md:text-5xl">
            Une équipe projet engagée derrière Novatech
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-4"
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
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-slate-50">
                  {member.initials}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {member.role}
                </div>
                <div className="text-sm text-slate-800">{member.name}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* AIDE & SUPPORT */}
        <motion.section
          id="support"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl space-y-12 px-6 md:px-10"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Aide & support
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Aide & support
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Personne ne doit se sentir seul face aux difficultés. Le temps de réponse est
              déterminant — un SLA clair et affiché rassure les équipes et encourage l&apos;usage
              quotidien de Novatech.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-4"
          >
            {[
              {
                title: "Signalement d'incident",
                desc: "Bug, question fonctionnelle ou demande d'amélioration. Formulaire simple, catégorisé, traité sous 24h.",
                badge: 'SLA · Réponse sous 24h',
              },
              {
                title: 'Suivi de mes demandes',
                desc: 'Tableau de bord personnel : statut en temps réel — Reçu / En cours / Résolu. Notification automatique.',
                badge: 'Notif à chaque mise à jour',
              },
              {
                title: 'Contact direct équipe',
                desc: "Email, téléphone, chat avec l'équipe projet. Horaires de disponibilité par fuseau horaire africain.",
                badge: 'Chat 8h–18h WAT/GMT',
              },
              {
                title: 'Base de connaissances',
                desc: 'Articles de résolution des problèmes fréquents, enrichie en continu par les remontées de toutes les filiales.',
                badge: 'Recherche instantanée',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <span className="mt-2 inline-flex rounded-full bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-2 text-xs font-semibold text-slate-900">
                  {item.badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* FACTEURS CLÉS DE SUCCÈS */}
        <motion.section
          id="facteurs"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0D1A45] via-[#1A2D6D] to-[#050816] py-20 text-slate-50 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,168,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,168,0,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-12 px-6 md:px-10">
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 rounded-full bg-[#F5A800]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5A800]">
                  Facteurs clés de succès
                </span>
              </div>
              <h2 className="text-4xl font-bold md:text-5xl">
                Principes directeurs
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200/90">
                Cinq règles d&apos;or qui guident tout le contenu publié sur le site projet
                Novatech, pour rester centré sur les métiers et l&apos;adoption dans les 10 pays.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-6 md:grid-cols-5"
            >
              {[
                {
                  title: 'Parler métier',
                  desc: "Pas de jargon IT. Du point de vue de l'utilisateur, toujours.",
                },
                {
                  title: 'Montrer',
                  desc: 'Captures, vidéos, témoignages > longs textes descriptifs.',
                },
                {
                  title: 'Localiser',
                  desc: 'Chaque filiale se retrouve dans un contenu adapté à elle.',
                },
                {
                  title: 'Mettre à jour',
                  desc: 'Site vivant = confiance. Site figé = désengagement.',
                },
                {
                  title: 'Célébrer',
                  desc: 'Valoriser chaque jalon pour maintenir la dynamique 27 mois.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-[#F5A800]/25 bg-white/5 p-6 text-center shadow-sm"
                >
                  <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F5A800]">
                    {p.title}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/80">{p.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Risques / Réponses */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-2xl font-bold">Comment le site répond aux risques identifiés</h3>
              <div className="space-y-3">
                {[
                  {
                    risk: "Manque d'implication des utilisateurs finaux",
                    answer:
                      'Section « Pourquoi ? » — bénéfices concrets par profil + témoignages terrain vidéo.',
                  },
                  {
                    risk: 'Insuffisance dans la formation des équipes',
                    answer:
                      'Section « Formation » — vidéos courtes, guides visuels, quiz, calendrier des sessions.',
                  },
                  {
                    risk: "Difficulté d'adaptation aux réalités locales",
                    answer:
                      'Section « Mon pays » — page dédiée par filiale, éditiques et planning local.',
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
                    className="grid gap-4 rounded-xl bg-white/5 p-6 md:grid-cols-[1fr_auto_1fr]"
                  >
                    <div className="flex items-center gap-3 rounded-lg border border-rose-400/30 bg-rose-900/30 px-4 py-3 text-sm text-rose-100">
                      <span className="font-bold">{row.risk}</span>
                    </div>
                    <div className="flex items-center justify-center text-xl text-slate-100">
                      →
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-emerald-400/30 bg-emerald-900/25 px-4 py-3 text-sm text-emerald-100">
                      <span>{row.answer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section
          id="cta-final"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden bg-gradient-to-r from-[#1B2A6B] via-[#0B1440] to-slate-900 py-20 text-slate-50 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
            >
              <div className="max-w-2xl space-y-4">
                <h2 className="text-4xl font-bold md:text-5xl">
                  Prêt à entrer dans l&apos;ère Novatech ?
                </h2>
                <p className="text-lg leading-relaxed text-slate-100/90">
                  Novatech est bien plus qu'un nouveau logiciel : c'est un levier pour
                  simplifier le quotidien, fiabiliser les données et renforcer la performance des
                  filiales NSIA.
                </p>
              </div>
              <button
                onClick={() => scrollTo('demo')}
                className="inline-flex items-center justify-center rounded-lg bg-[#F5A800] px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-[#F5A800]/30 transition-all hover:shadow-xl hover:shadow-[#F5A800]/40 hover:scale-[1.02]"
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
