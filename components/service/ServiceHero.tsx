'use client';

import Link from 'next/link';
import { ArrowLeft, TrendingUp, Code, Video, BrainCircuit, Megaphone, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp />,
  Code: <Code />,
  Video: <Video />,
  BrainCircuit: <BrainCircuit />,
  Megaphone: <Megaphone />,
  Briefcase: <Briefcase />,
};

interface ServiceHeroProps {
  title: string;
  tagline: string;
  icon: string;
}

export default function ServiceHero({ title, tagline, icon }: ServiceHeroProps) {
  return (
    <section className="service-hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="container">
        <Link href="/#services" className="service-back">
          <ArrowLeft size={16} />
          Retour aux services
        </Link>
        <div className="service-hero-header">
          <div className="service-hero-text">
            <h1>{title}</h1>
            <p className="service-tagline">{tagline}</p>
          </div>
          <div className="service-icon-large">
            {iconMap[icon] || null}
          </div>
        </div>
      </div>
    </section>
  );
}
