
import React from 'react';

const CatPawIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M7.25,2.47C6.46,2.29 5.61,2.5 5,3.06C4.18,3.8 4.11,5.03 4.8,5.93C5.48,6.83 6.74,7.03 7.7,6.5C8.39,6.12 8.89,5.43 9,4.72C9.13,3.95 8.71,3.17 8,2.79C7.75,2.65 7.5,2.54 7.25,2.47M5.1,10.27C4.19,10.05 3.23,10.23 2.5,10.79C1.56,11.5 1.3,12.75 1.91,13.73C2.5,14.74 3.75,15.14 4.8,14.73C5.59,14.41 6.19,13.74 6.38,12.96C6.6,12.06 6.17,11.14 5.4,10.63C5.3,10.5 5.2,10.39 5.1,10.27M12.16,3.1C11.19,2.83 10.18,3.12 9.5,3.75C8.6,4.56 8.5,5.88 9.29,6.83C9.93,7.65 11.05,8.04 12,7.64C12.73,7.32 13.29,6.66 13.43,5.89C13.6,5.03 13.14,4.12 12.42,3.53C12.35,3.47 12.25,3.41 12.16,3.1M18.89,10.27C18.8,10.39 18.7,10.5 18.6,10.63C17.83,11.14 17.4,12.06 17.62,12.96C17.81,13.74 18.41,14.41 19.2,14.73C20.25,15.14 21.5,14.74 22.09,13.73C22.7,12.75 22.44,11.5 21.5,10.79C20.77,10.23 19.81,10.05 18.9,10.27M13,8.3C11.83,8.3 10.67,8.9 10,10C10.59,11.39 11.66,12.87 13,14C14.34,12.87 15.41,11.39 16,10C15.33,8.9 14.17,8.3 13,8.3Z" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex justify-center items-center gap-4">
        <CatPawIcon className="w-12 h-12 text-pink-500 transform -rotate-45" />
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-wider uppercase" style={{ textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899' }}>
          Бойцовский <span className="text-pink-500">Кошачий</span> Клуб
        </h1>
        <CatPawIcon className="w-12 h-12 text-pink-500 transform rotate-45" />
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Создайте своего легендарного кота-бойца. Выберите его стиль, доспехи и характер, а нейросеть воплотит его в жизнь.
      </p>
    </header>
  );
};

export default Header;
