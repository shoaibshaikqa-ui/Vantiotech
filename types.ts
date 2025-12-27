
// Fix: Import React to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools?: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  topics: string[];
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}