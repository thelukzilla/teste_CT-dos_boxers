export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  title: string;
  price: number;
  frequency: string;
  features: string[];
}