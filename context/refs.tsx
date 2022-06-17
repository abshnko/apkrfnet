import { createContext, useContext, useState } from 'react';
import { IRefsContent } from '../types';

const RefsContext = createContext<IRefsContent>({
  scrollToTeam: false,
  setScrollToTeam: () => {},
  scrollToClassics: false,
  setScrollToClassics: () => {},
});

export const RefsProvider = ({ children }: any) => {
  const [scrollToTeam, setScrollToTeam] = useState(false);
  const [scrollToClassics, setScrollToClassics] = useState(false);

  return (
    <RefsContext.Provider
      value={{
        scrollToTeam,
        setScrollToTeam,
        scrollToClassics,
        setScrollToClassics,
      }}
    >
      {children}
    </RefsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(RefsContext);
};
