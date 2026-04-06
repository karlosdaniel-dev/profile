'use client';

import React from 'react';
import { portfolioExperience } from '@/consts/portfolio-data';
import { CheckCircle } from 'lucide-react';

export function PortfolioExperience() {
    return (
        <section className="bg-slate-50 p-2 sm:p-4 break-after-page">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                🏆 Experiência Profissional
            </h2>

            <div className="space-y-8 border-l-2 border-blue-100 pl-6 ml-2 relative">
                {portfolioExperience.map((exp, index) => (
                    <div key={exp.id} className="relative">
                        {/* Timeline dot */}
                        <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>

                        {/* Card */}
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-gray-800">{exp.company}</h3>
                                <p className="text-blue-600 font-semibold text-base">{exp.title}</p>
                                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                            </div>

                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{exp.description}</p>

                            <div className="space-y-2">
                                {exp.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-600 text-sm">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}