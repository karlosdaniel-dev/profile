'use client';

import React from 'react';
import { portfolioTechStack } from '@/consts/portfolio-data';

export function PortfolioTechStack() {
    return (
        <section className="bg-white p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                ⚙️ Tecnologias
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolioTechStack.map((category) => (
                    <div
                        key={category.name}
                        className="p-6 bg-slate-50 rounded-lg border border-slate-200"
                    >
                        <h3 className="text-base font-bold text-slate-900 mb-4">{category.name}</h3>
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