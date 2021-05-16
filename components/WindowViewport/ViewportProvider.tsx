import {createContext, useEffect, useState} from 'react';

import devices from '../../styles/mediaQueries';

interface ViewportSettings {
  isTabletOrLarger?: boolean;
}

export const ViewportContext = createContext<ViewportSettings>({});

const ViewportProvider: React.FC = ({children}) => {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const match = window.matchMedia(devices.mdMediaQuery);
    function handleResize() {
      setIsTabletOrLarger(match.matches);
    }

    match.addEventListener('change', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => match.removeEventListener('change', handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{isTabletOrLarger}}>
      {isTabletOrLarger !== undefined && children}
    </ViewportContext.Provider>
  );
};

export default ViewportProvider;
