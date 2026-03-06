import React from 'react';
import { Github, Linkedin, Mail, MapPin, Globe, Award, Code2, Terminal, Cpu, LayoutTemplate, Link as LinkIcon } from 'lucide-react';
import { skills } from '@/consts';
import Image from 'next/image';

// ==========================================
// COMPONENTES DE SEÇÃO 
// ==========================================

function Header() {
  return (
    <header className="bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden print:p-8">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none print:hidden"></div>
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10 print:flex-col print:items-start print:gap-4">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full lg:w-auto">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] border-slate-700/50 shadow-xl shrink-0 ring-2 ring-blue-500/30 print:border-slate-700">
            <Image 
              src="/profile.jpg" 
              alt="Foto de Perfil de Karlos Daniel"
              fill 
              className="object-cover" 
              priority 
            />
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 print:text-white print:bg-none">
              Karlos Daniel
            </h1>
            <p className="text-xl text-blue-400 font-semibold mb-3">Desenvolvedor Full Stack</p>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed opacity-90 print:text-slate-200">
              Desenvolvedor FrontEnd | ReactJs | Javascript | Tailwind
            </p>
            <p className='text-sm opacity-90 text-gray-500 print:text-gray-400'>
              Especialista em criar Interfaces Modernas & Integração de IA Generativa.
              Foco em React, TypeScript e soluções SaaS escaláveis que geram valor real.
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* CONTATOS - VERSÃO WEB (Oculta no PDF)      */}
        {/* ========================================== */}
        <div className="flex flex-col gap-4 text-sm text-slate-300 lg:text-right min-w-max bg-slate-800/50 md:p-5 lg:p-5 p-3 rounded-2xl backdrop-blur-sm border border-slate-700/50 lg:self-stretch lg:justify-center print:hidden">
          <a href="#" className="flex items-center lg:justify-end gap-3 hover:text-white transition-colors group">
            <span className="group-hover:underline underline-offset-4">São Paulo, SP</span>
            <div className="bg-slate-700 p-2 rounded-full"><MapPin size={16} className="text-blue-400" /></div>
          </a>
          <a href="https://www.linkedin.com/in/karlos-daniel/" target="_blank" rel="noreferrer" className="flex items-center lg:justify-end gap-3 hover:text-blue-400 transition-colors group">
            <span className="group-hover:underline underline-offset-4">linkedin.com/in/karlos-daniel</span>
            <div className="bg-slate-700 p-2 rounded-full"><Linkedin size={16} className="text-blue-400" /></div>
          </a>
          <a href="https://github.com/karlosdaniel-dev" target="_blank" rel="noreferrer" className="flex items-center lg:justify-end gap-3 hover:text-white transition-colors group">
            <span className="group-hover:underline underline-offset-4">github.com/karlos-daniel</span>
            <div className="bg-slate-700 p-2 rounded-full"><Github size={16} className="text-blue-400" /></div>
          </a>
          <a href="mailto:karlosdanielalvessodre@gmail.com" className="flex items-center lg:justify-end gap-3 hover:text-white transition-colors group">
            <span className="group-hover:underline underline-offset-4">karlosdanielalvessodre@gmail.com</span>
            <div className="bg-slate-700 p-2 rounded-full"><Mail size={16} className="text-blue-400" /></div>
          </a>
        </div>

        {/* ========================================== */}
        {/* CONTATOS - VERSÃO PDF (Oculta na Web)      */}
        {/* ========================================== */}
        <div className="hidden print:flex flex-row flex-wrap gap-x-8 gap-y-3 mt-4 w-full text-sm text-slate-200 border-t border-slate-700/50 pt-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-400" />
            <span>São Paulo, SP</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} className="text-blue-400" />
            <span>linkedin.com/in/karlos-daniel</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} className="text-blue-400" />
            <span>github.com/karlos-daniel</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <span>karlosdanielalvessodre@gmail.com</span>
          </div>
        </div>

      </div>
    </header>
  );
}

function TechnicalSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
        <Terminal className="text-blue-600" /> Competências Técnicas
      </h2>

      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-1">
              <div>
                <span className="font-semibold text-gray-700 block">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.context}</span>
              </div>
              <span className="text-sm font-bold text-blue-600">{skill.level}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-purple-500"
                style={{ width: `${(skill.level / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section className="print:break-before-page print:pt-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
        <Award className="text-blue-600" /> Experiência Recente
      </h2>

      <div className="space-y-8 border-l-2 border-blue-100 pl-6 ml-2 relative">
        <div className="relative print:break-inside-avoid">
          <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-bold text-gray-800">Desenvolvedor Full Stack</h3>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Dezembro 2025 - Janeiro 2026</span>
          </div>
          <h4 className="text-gray-600 font-medium mb-3">Empresa de Contabilidade (SaaS)</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>Liderança no desenvolvimento inicial de um sistema <strong className="text-gray-800">SaaS</strong> para gestão contábil moderna.</li>
            <li>Implementação de <strong className="text-gray-800">IA Generativa</strong> para UX dinâmica: usuários manipulam filtros complexos e layouts apenas descrevendo o que desejam em linguagem natural.</li>
            <li>Criação de automação de relatórios que compila dados de gráficos e envia e-mails detalhados automaticamente para clientes.</li>
          </ul>
        </div>

        <div className="relative print:break-inside-avoid print:mt-6">
          <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></span>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-bold text-gray-800">Desenvolvedor Front-end</h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2023 - 2025</span>
          </div>
          <h4 className="text-gray-600 font-medium mb-3">Buildigns / WebPages</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>Desenvolvimento de interfaces responsivas utilizando React e metodologia Mobile First, metodologia ágil.</li>
            <li>Colaboração em projetos de sites de produtos distintos da empresa com sistema administrativo.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Code2 className="text-blue-600" /> Projetos de Destaque
      </h2>

      {/* CARD DO PROJETO RPG (Atualizado) */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        {/* Detalhe visual na borda */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">System Hub RPG</h3>
            <p className="text-sm font-medium text-blue-600 mt-1">Criador, Arquiteto de Software & Full Stack</p>
          </div>
          <a
            href="https://system-hub-rpg.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors w-fit"
          >
            <LinkIcon size={14} /> Acessar App
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">Next.js (App Router)</span>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">TypeScript</span>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">Prisma ORM</span>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">PostgreSQL</span>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">NextAuth</span>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Idealizei e desenvolvi do zero uma plataforma SaaS completa de Mesa Virtual (VTT) e gestão de campanhas de RPG. O foco do projeto foi construir um <strong>Motor de Regras (Rule Engine)</strong> universal e escalável, permitindo aos usuários jogar sistemas oficiais ou criar seus próprios universos dinâmicos.
        </p>

        <ul className="list-none space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><strong>Modelagem de Dados Complexa:</strong> Arquitetura relacional com Prisma aplicando o padrão de <em>Flexible Scope</em> para unificar instâncias globais (Blueprints) e locais (Forja de Itens).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><strong>Gestão de Estado:</strong> Construção de interfaces dinâmicas para gestão de Árvores de Habilidades progressivas e relações de personagens.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><strong>IA Generativa:</strong> Integração de RAG (Vetorização de Livros Base) para criar itens e lores automaticamente com base nos documentos de cada campanha.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="print:break-inside-avoid">
      <h2 className="text-xl font-bold text-slate-800 my-4 flex items-center gap-2">
        <Globe className="text-blue-600" /> Educação
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 print:break-inside-avoid">
          <h3 className="font-bold text-gray-800">Analise e Desenvolvimento de Sistemas</h3>
          <p className="text-sm text-gray-600">Ensino Superior • Previsão de conclusão: 2027</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 print:break-inside-avoid print:mt-4">
          <h3 className="font-bold text-gray-800">Inglês Técnico (Times Idiomas)</h3>
          <p className="text-sm text-blue-600 font-medium">Nível Intermediário (B2)</p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PÁGINA PRINCIPAL EXPORTADA
// ==========================================

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

        <Header />

        <main className="p-8 sm:p-8 space-y-12">
          <TechnicalSkills />
          <WorkExperience />

          <div className="grid grid-cols-1 gap-8">
            <FeaturedProjects />
            <Education />
          </div>
        </main>

        <footer className="bg-gray-50 p-6 text-center text-gray-400 text-sm border-t border-gray-200" suppressHydrationWarning>
          © {new Date().getFullYear()} Karlos Daniel. Desenvolvido com Next.js & Tailwind.
        </footer>
      </div>
    </div>
  );
}