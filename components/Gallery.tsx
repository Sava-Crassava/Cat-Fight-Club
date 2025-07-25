
import React from 'react';
import { FighterCat } from '../types';

interface GalleryProps {
  fighters: FighterCat[];
}

const initialChampions: FighterCat[] = [
    { id: 'champ1', imageUrl: 'https://picsum.photos/seed/catfighter1/500', prompt: 'A Bengal cat as a swift ninja warrior.' },
    { id: 'champ2', imageUrl: 'https://picsum.photos/seed/catfighter2/500', prompt: 'A Maine Coon as a burly viking berserker.' },
    { id: 'champ3', imageUrl: 'https://picsum.photos/seed/catfighter3/500', prompt: 'A Sphynx cat as a wise martial arts master.' },
    { id: 'champ4', imageUrl: 'https://picsum.photos/seed/catfighter4/500', prompt: 'A British Shorthair as a stoic Roman gladiator.' },
];


const Gallery: React.FC<GalleryProps> = ({ fighters }) => {
  const allFighters = [...fighters, ...initialChampions.filter(champ => !fighters.some(f => f.id === champ.id || f.prompt === champ.prompt))];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-display text-center mb-8 text-cyan-400" style={{ textShadow: '0 0 10px #22d3ee' }}>
        Галерея Чемпионов
      </h2>
      {allFighters.length === 0 ? (
        <p className="text-center text-gray-500">Галерея пока пуста. Создайте своего первого бойца!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allFighters.map((fighter) => (
            <div key={fighter.id} className="group relative overflow-hidden rounded-lg border-2 border-gray-700/50 hover:border-cyan-500 transition-all duration-300 shadow-lg">
              <img 
                src={fighter.imageUrl} 
                alt={fighter.prompt} 
                className="aspect-square w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {fighter.prompt}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
