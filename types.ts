import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  differentiator: string;
  icon: LucideIcon;
  category: 'Travel' | 'Lifestyle' | 'Tech' | 'Health';
  steps?: string[];
}

export interface BusinessSection {
  title: string;
  content: string[];
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface RevenueData {
  name: string;
  value: number;
}

export interface BMCItem {
    id: string;
    title: string;
    icon: LucideIcon;
    items: string[];
    color: string;
    gridArea: string;
}