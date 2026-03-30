'use client';

import Link from 'next/link';
import {
  TrendingUp, Code, Video, BrainCircuit, Megaphone, Briefcase, LineChart,
} from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  icon: string;
  title: string;
  externalLink?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp />,
  Code: <Code />,
  Video: <Video />,
  BrainCircuit: <BrainCircuit />,
  Megaphone: <Megaphone />,
  Briefcase: <Briefcase />,
  LineChart: <LineChart />,
};

export default function ServiceCard({ slug, icon, title, externalLink }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="service-card service-card-link">
      <div className="service-icon">
        {iconMap[icon] || null}
      </div>
      <h3>{title}</h3>
    </Link>
  );
}
