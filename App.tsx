import React, { useState } from 'react';
import ServicePage from './components/ServicePage';
import HomePage from './components/HomePage';

export type Page = 'home' | 'waermedaemmung';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'waermedaemmung':
        return <ServicePage />; // In a real app, we'd pass a prop to go back
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  }

  return (
    <main className="bg-transparent text-sage-gray font-sans">
      {renderPage()}
    </main>
  );
};

export default App;