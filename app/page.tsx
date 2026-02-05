import React from 'react';
import { Github, Linkedin, Mail, MapPin, Globe, Award, Code2, Terminal, Cpu, LayoutTemplate } from 'lucide-react';
import { skills } from '@/consts';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

        <header className="bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full lg:w-auto">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] border-slate-700/50 shadow-xl shrink-0 ring-2 ring-blue-500/30">
                <Image 
                  src="/profile.jpg" 
                  alt="Foto de Perfil de Karlos Daniel"
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  Karlos Daniel
                </h1>
                <p className="text-xl text-blue-400 font-semibold mb-3">Desenvolvedor Full Stack</p>
                <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed opacity-90">
                  Especialista em criar Interfaces Modernas & Integração de IA Generativa.
                  Foco em React, TypeScript e soluções SaaS escaláveis que geram valor real.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm text-slate-300 lg:text-right min-w-max bg-slate-800/50 md:p-5 lg:p-5 p-3 rounded-2xl backdrop-blur-sm border border-slate-700/50 lg:self-stretch lg:justify-center">
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

          </div>
        </header>

        <main className="p-8 sm:p-12 space-y-12">

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

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
              <Award className="text-blue-600" /> Experiência Recente
            </h2>

            <div className="space-y-8 border-l-2 border-blue-100 pl-6 ml-2 relative">
              <div className="relative">
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

              <div className="relative">
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

          {/* Seção: Educação e Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Code2 className="text-blue-600" /> Projetos de Destaque
              </h2>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-800 mb-1">System hub RPG (Atual projeto)</h3>
                <p className="text-sm text-gray-500 mb-3">React, TypeScript, prisma e SupaBase</p>
                <p className="text-sm text-gray-600">
                  Aplicação focada em layout white-label para gerenciar sistema de RPG, com uso de IA Generativa criando itens com base em documentos da lore de cada campanha.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Globe className="text-blue-600" /> Educação
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800">Ensino Superior</h3>
                  <p className="text-sm text-gray-600">Previsão de conclusão: 2027</p>
                  <p className="text-xs text-gray-500 mt-1">Analise e Desenvolvimento de Sistemas</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Inglês Técnico (Times Idiomas)</h3>
                  <p className="text-sm text-gray-600">Nível Intermediário (B2)</p>
                </div>
              </div>
            </section>
          </div>

        </main>

        {/* Rodapé simples */}
        <footer className="bg-gray-50 p-6 text-center text-gray-400 text-sm border-t border-gray-200">
          © {new Date().getFullYear()} Karlos Daniel. Desenvolvido com Next.js & Tailwind.
        </footer>
      </div>
    </div>
  );
}