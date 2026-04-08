'use client';

import React, { useState } from 'react';
import { ChevronDown, Star, Link as LinkIcon } from 'lucide-react';
import { portfolioProjects, ProjectData } from '@/consts/portfolio-data';
import { useTranslations } from 'next-intl';

function ProjectCard({ project, isFeatured }: { project: ProjectData; isFeatured?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Busca as traduções específicas deste projeto usando o ID dele
    const tProject = useTranslations(`Portfolio.Projects.${project.id}`);
    // Busca as traduções da interface (botões, títulos das seções)
    const tUI = useTranslations('UI');

    return (
        <div
            className={`my-2 bg-white rounded-lg border shadow-sm hover:shadow-lg transition-all overflow-hidden relative ${isFeatured
                ? 'border-2 border-yellow-400 shadow-yellow-100 break-after-page'
                : 'border-gray-200 hover:border-gray-300'
                }`}
        >
            {/* Destaque Visual */}
            {isFeatured && (
                <div className="absolute top-0 right-0 p-2 bg-yellow-400 rounded-bl-lg z-10">
                    <Star size={20} className="text-white fill-current" />
                </div>
            )}

            {/* Header */}
            <div className="p-6 border-b border-slate-200">
                {/* Borda lateral */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${isFeatured ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-600'
                        }`}
                ></div>

                {/* Textos puxados do JSON */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tProject('title')}</h3>
                <p
                    className={`font-semibold text-sm mb-3 ${isFeatured ? 'text-yellow-600' : 'text-blue-600'
                        }`}
                >
                    {tProject('subtitle')}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">{tProject('shortPhrase')}</p>
            </div>

            {/* Technologies (Mantido do array original pois não precisa de tradução) */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className={`text-xs font-mono px-2 py-1 rounded ${isFeatured
                                ? 'bg-yellow-50 text-yellow-800'
                                : 'bg-blue-50 text-blue-700'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="px-6 py-6 bg-slate-50 space-y-4">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">{tUI('context')}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{tProject('context')}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">{tUI('challenge')}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{tProject('challenge')}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">{tUI('action')}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{tProject('action')}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">{tUI('result')}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{tProject('result')}</p>
                    </div>
                </div>
            )}

            {/* Footer com botões */}
            <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`flex items-center gap-2 font-semibold hover:opacity-80 transition text-sm ${isFeatured ? 'text-yellow-600' : 'text-blue-600'
                        }`}
                >
                    {isExpanded ? tUI('closeDetails') : tUI('viewDetails')}
                    <ChevronDown
                        size={16}
                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                </button>

                {project.links?.live && (
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors w-fit"
                    >
                        <LinkIcon size={14} /> {tUI('accessApp')}
                    </a>
                )}
            </div>
        </div>
    );
}

export function PortfolioProjects() {
    // Busca o título principal da seção
    const t = useTranslations('Portfolio');

    return (
        <section className="bg-white p-2 sm:p-4 break-after-page">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                {t('projectsTitle')}
            </h2>

            <div className="space-y-6">
                {/* Iteramos sobre o array original apenas para gerar a lista e pegar os IDs e Tecnologias */}
                {portfolioProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isFeatured={project.id === 'system-hub-rpg'}
                    />
                ))}
            </div>
        </section>
    );
}