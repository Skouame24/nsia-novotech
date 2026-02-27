'use client';

import React from 'react';
import { NSIA_COLORS } from '../../constants/theme';

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: `radial-gradient(circle at top right, ${NSIA_COLORS.light} 0, #ffffff 45%, #e5e7eb 100%)`,
      }}
    >
      <div className="flex min-h-screen flex-col">
        <header
          className="border-b border-slate-200 bg-white/90 backdrop-blur"
          style={{ boxShadow: '0 8px 24px rgba(10,16,36,0.08)' }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-lg"
                style={{ backgroundColor: NSIA_COLORS.blue }}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  NSIA Assurance
                </span>
                <span className="text-sm font-bold text-slate-900">
                  Refonte du logiciel métier
                </span>
              </div>
            </div>
            <div className="hidden items-center gap-2 text-[11px] font-medium text-slate-600 md:flex">
              <span
                className="inline-block h-1 w-8 rounded-full"
                style={{ backgroundColor: NSIA_COLORS.gold }}
              />
              <span>Site projet · Conduite du changement</span>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white/80">
          <div className="mx-auto max-w-6xl px-4 py-3 text-[11px] text-slate-500 md:px-6">
            © {new Date().getFullYear()} Pôle Assurance NSIA — Site projet interne (maquette).
          </div>
        </footer>
      </div>
    </div>
  );
}

