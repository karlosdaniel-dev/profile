import React from 'react';
import { PortfolioHeader } from '@/components/portfolio/Header';
import { PortfolioSummary } from '@/components/portfolio/Summary';
import { PortfolioProjects } from '@/components/portfolio/Projects';
import { PortfolioWorkStyle } from '@/components/portfolio/WorkStyle';
import { PortfolioExperience } from '@/components/portfolio/Experience';
import { PortfolioTechStack } from '@/components/portfolio/TechStack';
import { PortfolioAbout } from '@/components/portfolio/About';
import { PortfolioContact } from '@/components/portfolio/Contact';
import { PortfolioFooter } from '@/components/portfolio/Footer';

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                <PortfolioHeader />

                <main className="space-y-0">
                    <PortfolioSummary />
                    <PortfolioProjects />
                    <PortfolioWorkStyle />
                    <PortfolioExperience />
                    <PortfolioTechStack />
                    <PortfolioAbout />
                    <PortfolioContact />
                </main>

                <PortfolioFooter />
            </div>
        </div>
    );
}