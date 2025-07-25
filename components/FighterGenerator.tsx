
import React, { useState, useCallback } from 'react';
import { generateFighterImage } from '../services/geminiService';
import { FighterCat } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface FighterGeneratorProps {
  onFighterGenerated: (fighter: FighterCat) => void;
}

const styles = ["Ниндзя", "Самурай", "Викинг", "Гладиатор", "Боксер", "Киборг", "Маг"];
const breeds = ["Мейн-кун", "Сфинкс", "Британская", "Сиамская", "Бенгальская", "Рэгдолл"];
const accessories = ["Боевая раскраска", "Кожаная куртка", "Шипованный ошейник", "Кибернетический глаз", "Светящиеся руны", "Боксерские перчатки"];

const FighterGenerator: React.FC<FighterGeneratorProps> = ({ onFighterGenerated }) => {
  const [style, setStyle] = useState<string>(styles[0]);
  const [breed, setBreed] = useState<string>(breeds[0]);
  const [accessory, setAccessory] = useState<string>(accessories[0]);
  const [customDetail, setCustomDetail] = useState<string>('');
  
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    const prompt = `Epic cinematic portrait of a ${breed} cat as a fierce ${style} warrior. The cat is adorned with ${accessory}. ${customDetail}. Dramatic dark background with neon highlights. Hyper-detailed, fantasy concept art, octane render.`;
    
    try {
      const imageUrl = await generateFighterImage(prompt);
      setGeneratedImage(imageUrl);
      setLastPrompt(prompt);
    } catch (err: any) {
      setError(err.message || 'Произошла неизвестная ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToGallery = useCallback(() => {
    if (generatedImage) {
      const newFighter: FighterCat = {
        id: new Date().toISOString(),
        imageUrl: generatedImage,
        prompt: lastPrompt,
      };
      onFighterGenerated(newFighter);
      setGeneratedImage(null); // Clear after adding
    }
  }, [generatedImage, lastPrompt, onFighterGenerated]);
  
  const renderSelect = (label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[]) => (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <select value={value} onChange={onChange} className="bg-gray-800 border-2 border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition duration-200">
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-500/10">
          <h2 className="text-3xl font-display mb-6 text-center text-pink-400">Создать Бойца</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderSelect("Порода", breed, e => setBreed(e.target.value), breeds)}
            {renderSelect("Стиль", style, e => setStyle(e.target.value), styles)}
            {renderSelect("Аксессуар", accessory, e => setAccessory(e.target.value), accessories)}
            
            <div>
              <label className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Дополнительная деталь</label>
              <input type="text" value={customDetail} onChange={e => setCustomDetail(e.target.value)} placeholder="Напр: шрам над глазом" className="w-full bg-gray-800 border-2 border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition duration-200" />
            </div>

            <button type="submit" disabled={isLoading} className="w-full font-display uppercase tracking-widest bg-pink-600 text-white font-bold py-4 px-4 rounded-lg hover:bg-pink-700 active:bg-pink-800 transition duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
              {isLoading ? <><LoadingSpinner /> ГЕНЕРАЦИЯ...</> : 'СГЕНЕРИРОВАТЬ'}
            </button>
          </form>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 min-h-[450px] aspect-square shadow-2xl shadow-cyan-500/10">
          {isLoading && <LoadingSpinner size="lg" />}
          {error && <p className="text-red-400 text-center">{error}</p>}
          {generatedImage && (
            <div className="flex flex-col items-center gap-4 w-full">
              <img src={generatedImage} alt="Сгенерированный кот-боец" className="rounded-lg w-full h-auto object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/20"/>
              <button onClick={handleAddToGallery} className="w-full font-display uppercase tracking-widest bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-700 active:bg-cyan-800 transition duration-300 transform hover:scale-105">
                Добавить в Галерею
              </button>
            </div>
          )}
          {!isLoading && !error && !generatedImage && (
            <div className="text-center text-gray-500">
              <p className="text-xl">Здесь появится ваш чемпион</p>
              <p>Заполните форму и нажмите "Сгенерировать"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FighterGenerator;
