import {useContext} from 'react';

import {ViewportContext} from '../ViewportProvider';

const useViewport = () => {
  const {isTabletOrLarger} = useContext(ViewportContext);
  return {isTabletOrLarger};
};

export default useViewport;
