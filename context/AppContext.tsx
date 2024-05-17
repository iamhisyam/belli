"use client"

import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context value
interface AppContextValue {
  orderOpened: boolean;
  setOrderOpened: (value: boolean) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [orderOpened, setOrderOpened] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ orderOpened, setOrderOpened }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
};
