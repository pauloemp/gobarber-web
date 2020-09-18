import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';
import { IToast } from '../components/ToastContainer/Toast';

interface IToastContext {
  addToast(toast: Omit<IToast, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToast, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setToasts(oldToasts => [...oldToasts, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContext {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error('useToast can only be used within an ToastProvider');

  return context;
}
