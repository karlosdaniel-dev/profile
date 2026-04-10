'use client';

import React from 'react';
import { Github, Linkedin, Mail, Globe, Code2, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

export function PortfolioHeader() {
    const t = useTranslations('Header');
    
    return (
        <header className="bg-slate-900 text-white p-2 sm:p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10">
                {/* Seção Esquerda - Imagem e Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full lg:w-auto">
                    {/* Imagem de Perfil */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] border-slate-700/50 shadow-xl shrink-0 ring-2 ring-blue-500/30">
                        <Image
                            src="/profile.jpg"
                            alt="Foto de Perfil de Karlos Sodre"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Textos */}
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 bg-clip-text">
                            Karlos Sodre
                        </h1>
                        <p className="text-xl text-blue-400 font-semibold mb-3">{t('role')}</p>
                        <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed opacity-90">
                            React | TypeScript | JavaScript | Node.js | Architecture
                        </p>
                        <p className="text-sm opacity-90 text-gray-400">
                            {t('description')}
                        </p>
                    </div>
                </div>

                {/* Seção Direita - Contatos */}
                <div className="flex flex-row lg:flex-col gap-4 text-sm text-slate-300 lg:text-right min-w-max bg-slate-800/50 md:p-3 lg:p-5 p-2 rounded-2xl border border-slate-700/50 lg:self-stretch lg:justify-center">
                    <a
                        href="https://www.linkedin.com/in/karlos-daniel/" 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center lg:justify-end gap-3 hover:text-blue-400 transition-colors group"
                    >
                        <div className="bg-slate-700 p-2 rounded-full">
                            <Linkedin size={16} className="text-blue-400" />
                        </div>
                        <span className="group-hover:underline underline-offset-4">
                            linkedin.com/in/karlos-sodre
                        </span>
                        
                    </a>
                    <a
                        href="https://github.com/karlosdaniel-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center lg:justify-end gap-3 hover:text-white transition-colors group"
                    >
                        <div className="bg-slate-700 p-2 rounded-full">
                            <Github size={16} className="text-blue-400" />
                        </div>
                        <span className="group-hover:underline underline-offset-4">
                            github.com/karlos-sodre
                        </span>
                        
                    </a>

                    <a
                        href="mailto:karlosdanielalvessodres@gmail.com"
                        className="flex items-center lg:justify-end gap-3 hover:text-white transition-colors group"
                    >
                        <div className="bg-slate-700 p-2 rounded-full">
                            <Mail size={16} className="text-blue-400" />
                        </div>
                        <span className="group-hover:underline underline-offset-4">karlosdanielalvessodres@gmail.com</span>
                        
                    </a>
                </div>
            </div>
        </header>
    );
}