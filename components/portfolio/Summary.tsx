'use client';

import React from 'react';

export function PortfolioSummary() {
    return (
        <section className="bg-white p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                📋 Resumo Profissional
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-4">
                <p className="text-base text-slate-700 leading-relaxed">
                    Sou um desenvolvedor full stack com perfil voltado à organização, aprendizado contínuo e
                    construção de soluções sustentáveis. Ao longo da minha trajetória, atuei tanto em
                    ecossistemas com múltiplos sistemas quanto em cenários de alta autonomia, assumindo
                    decisões técnicas sozinho.
                </p>

                <p className="text-base text-slate-700 leading-relaxed">
                    Tenho facilidade para entender novos contextos de negócio, desenhar arquiteturas limpas e
                    entregar sistemas fáceis de usar, manter e escalar. Minha base combina experiência
                    prática com busca contínua por aprendizado profundo.
                </p>
            </div>
        </section>
    );
}