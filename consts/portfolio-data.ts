export interface ProjectData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    context: string;
    challenge: string;
    action: string;
    result: string;
    shortPhrase: string;
    technologies: string[];
    links?: {
        github?: string;
        live?: string;
    };
}

export interface ExperienceData {
    id: string;
    company: string;
    title: string;
    period: string;
    description: string;
    highlights: string[];
}

export interface WorkStyleItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const portfolioProjects: ProjectData[] = [
    {
        id: "system-hub-rpg",
        title: "System Hub RPG - Plataforma SaaS",
        subtitle: "Idealizador, Arquiteto de Software & Desenvolvedor Full Stack",
        description:
            "Plataforma SaaS completa de Mesa Virtual (VTT) e gestão de campanhas de RPG, com foco em um motor de regras universal e escalável.",
        context:
            "Iniciei este projeto como um desafio pessoal para aplicar e aprofundar minhas habilidades após um período fora do mercado. O objetivo era construir uma solução completa do zero, que evoluiu de uma ajuda para um amigo para um SaaS funcional.",
        challenge:
            "O maior desafio foi arquitetar um sistema complexo e flexível o suficiente para suportar diferentes sistemas de RPG. Isso exigiu um profundo trabalho de modelagem de dados, múltiplas refatorações e a construção de um 'Rule Engine' (Motor de Regras) que unifica itens, personagens, inventários e lore de forma coesa.",
        action:
            "Utilizando Next.js, TypeScript, Prisma e Supabase, construí a arquitetura completa. Criei módulos para gestão de campanhas, cadastro de itens e componentes, fichas de NPCs com inventários dinâmicos, um mapa interativo com tokens customizáveis e uma seção para a lore do mundo. O sistema foi desenhado para ser modular e preparado para futuras integrações com IA.",
        result:
            "O System Hub RPG se tornou meu projeto mais completo, validando minha capacidade de ir da ideia à execução de um produto SaaS. A arquitetura permite a criação de universos dinâmicos e atualmente está em evolução para incluir IA generativa que auxiliará na criação de itens, fichas e side-quests baseadas na lore de cada campanha.",
        shortPhrase:
            "Idealizei e desenvolvi do zero uma plataforma SaaS de Mesa Virtual (VTT) e gestão de campanhas de RPG, com foco em um motor de regras universal e escalável.",
        technologies: [
            "Next.js (App Router)",
            "TypeScript",
            "Prisma ORM",
            "Supabase (PostgreSQL)",
            "Tailwind CSS",
            "NextAuth",
            "Arquitetura SaaS",
        ],
        links: {
            live: "https://system-hub-rpg.vercel.app/",
        },
    },
    {
        id: "dre-compta",
        title: "Dashboard Financeiro e DRE",
        subtitle: "Compreensão rápida de regra de negócio + arquitetura escalável",
        description:
            "Sistema de dashboard financeiro com DRE (Demonstração do Resultado do Exercício) para empresa de contabilidade",
        context:
            "Entrei no projeto sem experiência prévia na área contábil e precisei entender rapidamente a lógica do DRE, os indicadores financeiros e a forma como essas informações precisavam ser organizadas no sistema.",
        challenge:
            "Além de aprender uma área nova em pouco tempo, eu era o único desenvolvedor da empresa. Isso exigiu não apenas a implementação da solução, mas também decisões de arquitetura, escolha de tecnologias e preocupação com escalabilidade e manutenção futura.",
        action:
            "Em menos de 3 meses, consegui absorver a regra de negócio necessária, estruturar o dashboard financeiro e organizar a solução de forma que o sistema ficasse fácil de usar para o cliente e simples de evoluir para outros desenvolvedores no futuro.",
        result:
            "O projeto se tornou uma virada importante na minha trajetória, porque mostrou minha capacidade de aprender domínios complexos rapidamente, traduzir isso em produto e construir uma base limpa para crescimento do sistema.",
        shortPhrase:
            "Aprendi contabilidade aplicada ao DRE em menos de 3 meses e transformei esse entendimento em um dashboard escalável e de fácil manutenção.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
            "SQL",
        ],
    },
    {
        id: "ia-sistema",
        title: "IA integrada à navegação e automação",
        subtitle: "Aprendizado autodidata + funcionalidade prática",
        description:
            "Integração de IA capaz de interagir com o sistema, alterando telas, modificando filtros e gerando relatórios automatizados",
        context:
            "Durante o desenvolvimento do sistema na Compta, identifiquei uma oportunidade de explorar IA de forma prática, indo além de respostas genéricas e buscando uma integração útil com a aplicação.",
        challenge:
            "Eu nunca tinha implementado esse tipo de solução antes. O desafio era estudar sozinho, entender como integrar a IA ao fluxo do sistema e fazer com que ela realmente executasse ações relevantes.",
        action:
            "Desenvolvi uma integração em que a IA conseguia interagir com o software, alterando telas, modificando filtros, gerando pequenos relatórios e enviando resultados por email.",
        result:
            "Essa experiência reforçou minha capacidade de aprender sozinho, aplicar rapidamente novas tecnologias e transformar curiosidade técnica em ganho real de produto.",
        shortPhrase:
            "Implementei uma IA capaz de interagir com a interface do sistema, alterar filtros, gerar relatórios e automatizar envios por email.",
        technologies: [
            "React",
            "TypeScript",
            "OpenAI API",
            "Node.js",
            "Automação",
            "Email",
        ],
    },
    {
        id: "ecossistema-buildings",
        title: "Ecossistema de sistemas com componentes reutilizáveis",
        subtitle: "Base full stack construída ao longo de 7 anos",
        description:
            "Estruturação e evolução de um ecossistema de sistemas que compartilhavam componentes mas ainda preservavam suas particularidades",
        context:
            "Na Buildings, trabalhei por cerca de 7 anos em um ambiente de equipe pequena, onde os desenvolvedores precisavam atuar tanto no frontend quanto no backend, banco de dados e integrações.",
        challenge:
            "Manter consistência e reutilização de componentes entre vários sistemas diferentes, cada um com suas customizações específicas, sem gerar duplicação ou rigidez excessiva.",
        action:
            "Participei diretamente da criação e evolução de vários sites e sistemas, trabalhando com JavaScript, TypeScript, React, PHP, modelagem de banco, SQL e APIs. Ajudei a construir uma estrutura capaz de sustentar um ecossistema.",
        result:
            "Essa experiência consolidou minha visão full stack e minha preocupação com consistência, reaproveitamento e escalabilidade na arquitetura dos produtos.",
        shortPhrase:
            "Ajudei a estruturar um ecossistema de sistemas com componentes reutilizáveis e customização por produto, atuando em frontend, backend e banco de dados.",
        technologies: [
            "React",
            "JavaScript",
            "TypeScript",
            "PHP",
            "MySQL",
            "Arquitetura",
            "Design Systems",
        ],
    },
];

export const portfolioExperience: ExperienceData[] = [
    {
        id: "compta",
        company: "Compta",
        title: "Desenvolvedor / Único dev da operação",
        period: "2023 - Presente",
        description:
            "Atuei como único desenvolvedor da empresa, assumindo arquitetura, implementação e evolução do sistema contábil.",
        highlights: [
            "Estruturei dashboard financeiro com foco em DRE, escalabilidade e clareza de uso",
            "Escolhi tecnologias alinhadas ao orçamento da empresa sem abrir mão de qualidade técnica",
            "Mantive arquitetura limpa, com atenção à manutenção futura e experiência do cliente",
            "Desenvolvi integração de IA com capacidade de alterar filtros, interagir com telas, gerar relatórios e automatizar envios",
            "Aprendi contabilidade aplicada em menos de 3 meses",
        ],
    },
    {
        id: "buildings",
        company: "Buildings",
        title: "Desenvolvedor Full Stack",
        period: "2016 - 2023 (~7 anos)",
        description:
            "Atuação full stack em empresa de porte menor, com participação em frontend, backend, banco de dados e APIs.",
        highlights: [
            "Desenvolvimento com JavaScript, TypeScript, React e PHP",
            "Criação e evolução de diversos sites e sistemas",
            "Participação na modelagem de banco e construção de queries SQL",
            "Apoio na criação de um ecossistema de sistemas com compartilhamento de componentes",
            "Trabalho em ambiente que exigia versatilidade e autonomia",
        ],
    },
];



export const portfolioWorkStyle: WorkStyleItem[] = [
    {
        id: "learning",
        title: "Aprendizado rápido",
        description:
            "Consigo entrar em contextos novos, entender regras de negócio e transformar esse conhecimento em solução prática com rapidez.",
        icon: "🎯",
    },
    {
        id: "architecture",
        title: "Arquitetura limpa",
        description:
            "Gosto de estruturar sistemas para que sejam claros para o usuário e sustentáveis para quem vai manter o código.",
        icon: "🏗️",
    },
    {
        id: "autonomy",
        title: "Autonomia com responsabilidade",
        description:
            "Tenho experiência assumindo sozinho decisões técnicas, priorização e escolhas de stack em cenários reais.",
        icon: "💪",
    },
    {
        id: "focus",
        title: "Foco no uso real",
        description:
            "Não penso só no código funcionando, mas em como o sistema será usado, entendido e expandido.",
        icon: "👥",
    },
    {
        id: "curiosity",
        title: "Curiosidade aplicada",
        description:
            "Busco aprender novas tecnologias com profundidade e aplicá-las de forma útil, e não apenas experimental.",
        icon: "🔬",
    },
    {
        id: "consistency",
        title: "Consistência na entrega",
        description:
            "Trabalho com método, organização e persistência para garantir soluções estáveis e bem construídas.",
        icon: "✓",
    },
];

export const portfolioTechStack = [
    {
        id: "frontend",
        name: "Frontend",
        technologies: [
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
        ],
    },
    {
        id: "backend",
        name: "Backend",
        technologies: ["Node.js", "Express", "PHP", "APIs REST", "Integrações"],
    },
    {
        id: "database",
        name: "Banco de dados",
        technologies: ["PostgreSQL", "MySQL", "SQL", "Modelagem de dados"],
    },
    {
        id: "others",
        name: "Outros",
        technologies: [
            "Arquitetura de sistemas",
            "Componentização",
            "IA / OpenAI API",
            "Automação",
            "Git",
        ],
    },
];

export const portfolioContactLinks = [
    {
        id: "email",
        label: "Email",
        value: "karlosdanielalvessodres@gmail.com",
        href: "mailto:karlosdanielalvessodre@gmail.com",
        icon: "✉️",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/karlos-daniel",
        href: "https://www.linkedin.com/in/karlos-daniel/",
        icon: "💼",
    },
    {
        id: "github",
        label: "GitHub",
        value: "github.com/karlosdaniel-dev",
        href: "https://github.com/karlosdaniel-dev",
        icon: "🔗",
    },
];