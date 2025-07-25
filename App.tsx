
import React, { useState, useCallback } from 'react';
import { FighterCat } from './types';
import Header from './components/Header';
import FighterGenerator from './components/FighterGenerator';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [fighters, setFighters] = useState<FighterCat[]>([]);

  const addFighterToGallery = useCallback((fighter: FighterCat) => {
    setFighters(prevFighters => [fighter, ...prevFighters]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 bg-grid-pink-500/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        <main>
          <FighterGenerator onFighterGenerated={addFighterToGallery} />
          <Gallery fighters={fighters} />
        </main>
      </div>
    </div>
  );
};

export default App;
