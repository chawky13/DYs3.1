import React from 'react';
import { MainContent } from './MainContent';
import { SkipLink } from './SkipLink';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <SkipLink />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-gray-900">
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
}