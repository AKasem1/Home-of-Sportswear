'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#000',
          padding: '16px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          fontSize: '15px',
          fontWeight: '500',
          maxWidth: '500px',
        },
        
        success: {
          duration: 3000,
          style: {
            background: '#ECFDF5',
            color: '#065F46',
            border: '2px solid #10B981',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
          },
          iconTheme: {
            primary: '#10B981',
            secondary: '#ECFDF5',
          },
        },
        
        error: {
          duration: 4000,
          style: {
            background: '#FEF2F2',
            color: '#991B1B',
            border: '2px solid #EF4444',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
          },
          iconTheme: {
            primary: '#EF4444',
            secondary: '#FEF2F2',
          },
        },
        
        loading: {
          style: {
            background: '#F3F4F6',
            color: '#374151',
            border: '2px solid #9CA3AF',
          },
          iconTheme: {
            primary: '#6B7280',
            secondary: '#F3F4F6',
          },
        },
      }}
    />
  );
}
