import React from 'react';
import dynamic from 'next/dynamic';

const ResultServer = dynamic(() => import('./ResultServer'), { ssr: true }); // Load server component dynamically with SSR
const ResultClient = dynamic(() => import('./ResultClient'), { ssr: false }); // Load client component dynamically without SSR

const Result = () => {
    return (
        <div>
            <ResultServer /> {/* Render server component */}
            <ResultClient /> {/* Render client component */}
        </div>
    );
}

export default Result;
