'use client';

import React, { useState } from 'react';
import { ChevronDown, Star, Link as LinkIcon } from 'lucide-react';
import { portfolioProjects, ProjectData } from '@/consts/portfolio-data';

function ProjectCard({ project, isFeatured }: { project: ProjectData; isFeatured?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);

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

                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p
                    className={`font-semibold text-sm mb-3 ${isFeatured ? 'text-yellow-600' : 'text-blue-600'
                        }`}
                >
                    {project.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">{project.shortPhrase}</p>
            </div>

            {/* Technologies */}
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
                        <h4 className="font-bold text-gray-900 mb-2">Contexto</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.context}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Desafio</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Minha atuação</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.action}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Resultado</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.result}</p>
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
                    {isExpanded ? 'Fechar detalhes' : 'Ver detalhes completos'}
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
                        <LinkIcon size={14} /> Acessar App
                    </a>
                )}
            </div>
        </div>
    );
}

export function PortfolioProjects() {
    return (
        <section className="bg-white p-2 sm:p-4 break-after-page">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                💼 Projetos em Destaque
            </h2>

            <div className="space-y-6">
                {portfolioProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isFeatured={project.id === 'system-hub-rpg'} // Aqui definimos qual projeto é o destaque
                    />
                ))}
            </div>
        </section>
    );
}