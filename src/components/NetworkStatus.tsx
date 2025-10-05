/**
 * RAJ AI APP BUILDER - Network Status Component
 * Built and Developed by RAJ SHAH
 * https://github.com/rajshah9305
 */

'use client';

import { useState, useEffect } from 'react';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <span className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold ${
      isOnline ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
    }`}>
      <svg 
        className="w-4 h-4" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        {isOnline ? (
          <>
            {/* Network lines - animated */}
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              className="animate-pulse"
            />
          </>
        ) : (
          <>
            {/* Disconnected X */}
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          </>
        )}
      </svg>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}
