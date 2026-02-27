'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { NSIA_COLORS } from '../../constants/theme';

const PRINCIPES = [
  {
    title: 'Mettre le métier au centre',
    desc: 'Parler irritants, parcours et bénéfices concrets, pas seulement fonctionnalités techniques.',
    tag: 'Approche métier',
  },
  {
    title: 'Rassurer les 10 pays',
    desc: 'Donner de la visibilité sur la feuille de route, les jalons et le rôle de chaque filiale.',
    tag: 'Conduite du changement',
  },
  {
    title: 'Former & accompagner',
    desc: 'Un espace unique pour se former, poser des questions et retrouver tous les supports.',
    tag: 'Adoption & support',
  },
];

export function PrincipesSection() {
  return (
    <motion.section
      id="accueil"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <motion.h2
          variants={fadeInUp}
          className="text-base font-extrabold text-slate-900 md:text-lg"
        >
          🧭 Principes directeurs du site projet
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold text-slate-50"
        >
          Un site outil au service de l&apos;adoption du nouvel outil métier.
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="grid gap-3 md:grid-cols-3"
      >
        {PRINCIPES.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 p-4"
          >
            <div
              className="absolute inset-y-3 left-0 w-1 rounded-full"
              style={{ backgroundColor: NSIA_COLORS.gold }}
            />
            <div className="pl-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {p.tag}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                {p.title}
              </div>
              <p className="mt-1 text-xs text-slate-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

