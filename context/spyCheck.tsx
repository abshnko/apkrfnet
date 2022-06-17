import { createContext, useContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { ISpyCheckContext } from '../types';

const SpyCheckContext = createContext<ISpyCheckContext>({
  showSpyCheck: false,
  setShowSpyCheck: () => {},
  didntPass: false,
  setDidntPass: () => {},
  passedSpyCheck: false,
  setPassedSpyCheck: () => {},
});

export const SpyCheckProvider = ({ children }: any) => {
  const [showSpyCheck, setShowSpyCheck] = useState(false);
  const [didntPass, setDidntPass] = useLocalStorage("didn't Pass", false);
  const [passedSpyCheck, setPassedSpyCheck] = useLocalStorage(
    'passedSpyCheck',
    false
  );

  return (
    <SpyCheckContext.Provider
      value={{
        showSpyCheck,
        setShowSpyCheck,
        didntPass,
        setDidntPass,
        passedSpyCheck,
        setPassedSpyCheck,
      }}
    >
      {children}
    </SpyCheckContext.Provider>
  );
};

export const useSpyCheckContext = () => {
  return useContext(SpyCheckContext);
};
