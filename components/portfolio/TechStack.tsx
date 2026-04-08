'use client';

import React from 'react';
import { portfolioTechStack } from '@/consts/portfolio-data';
import { useTranslations } from 'next-intl';

export function PortfolioTechStack() {
    // Hooks de tradução
    const t = useTranslations('Portfolio');
    const tTech = useTranslations('Portfolio.TechCategories');

    return (
        <section className="bg-white p-2 sm:p-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                {t('techTitle')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolioTechStack.map((category) => (
                    <div
                        key={category.id} // Usando o novo ID
                        className="p-6 bg-slate-50 rounded-lg border border-slate-200"
                    >
                        {/* Traduz o nome da categoria (Frontend, Backend, etc) */}
                        <h3 className="text-base font-bold text-slate-900 mb-4">
                            {tTech(category.id)}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:border-blue-300 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}