'use client';

import React from 'react';

export function PortfolioAbout() {
    const diferenciais = [
        'Aprendizado rápido em contextos novos',
        'Persistência diante de problemas complexos',
        'Organização e clareza arquitetural',
        'Autonomia para aprender e implementar',
        'Foco em soluções úteis e sustentáveis',
        'Comunicação clara com técnico e não-técnico',
    ];

    return (
        <section className="bg-slate-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                👨‍💻 Sobre Mim
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Texto principal */}
                <div className="space-y-4">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Tenho um perfil naturalmente colaborativo, paciente e orientado à construção de soluções
                        estáveis. Ao mesmo tempo, o ambiente profissional me levou a desenvolver uma postura
                        mais assertiva e prática na tomada de decisões.
                    </p>

                    <p className="text-base text-gray-700 leading-relaxed">
                        Gosto de entender a lógica por trás das coisas, estudar contextos novos e organizar
                        sistemas de forma clara, tanto para o usuário quanto para o time técnico. Essa
                        combinação entre calma, estrutura e capacidade de adaptação define a forma como
                        trabalho hoje.
                    </p>

                    <p className="text-base text-gray-700 leading-relaxed">
                        No meu tempo livre, gosto de explorar novas tecnologias, resolver problemas técnicos e
                        aprender sobre diferentes domínios de negócio.
                    </p>
                </div>

                {/* Diferenciais */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-5">Meus Diferenciais</h3>
                    <div className="space-y-3">
                        {diferenciais.map((diferencial, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="text-blue-600 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-700 text-sm font-medium">{diferencial}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}