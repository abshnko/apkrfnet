import { createContext, useContext, useState } from 'react';
import { GlobalContent } from '../types';

const GlobalContext = createContext<GlobalContent>({
  scrollToTeam: false,
  setScrollToTeam: () => {},
});

export const Provider = ({ children }: any) => {
  const [scrollToTeam, setScrollToTeam] = useState(false);

  return (
    <GlobalContext.Provider value={{ scrollToTeam, setScrollToTeam }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
