
import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-16 h-16',
    };

    return (
        <div 
            className={`animate-spin rounded-full border-t-2 border-b-2 border-pink-500 ${sizeClasses[size]}`}
            role="status"
            aria-live="polite"
        >
            <span className="sr-only">Загрузка...</span>
        </div>
    );
};

export default LoadingSpinner;
