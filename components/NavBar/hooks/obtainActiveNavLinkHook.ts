import {useRouter} from 'next/router';
import {useMemo, useState} from 'react';

import NAVIGATION_ROUTES from '../../../config/NavigationRoutes';

const {
  blog,
  patients,
  orderAnalysis,
  profileAccount,
  profileSettings,
} = NAVIGATION_ROUTES;

const useObtainActiveNavLink = () => {
  const {pathname} = useRouter();
  const [activeIndex, setActiveIndex] = useState<string>('1');

  useMemo(() => {
    switch (true) {
      case pathname === blog.path:
        setActiveIndex('1');
        break;
      case pathname === patients.path:
        setActiveIndex('2');
        break;

      case pathname.includes(orderAnalysis.path):
        setActiveIndex('3');
        break;

      case pathname === profileAccount.path:
        setActiveIndex('4');
        break;

      case pathname === profileSettings.path:
        setActiveIndex('5');
        break;

      default:
        setActiveIndex('0');
    }
  }, [pathname, setActiveIndex]);

  return {
    activeIndex,
  };
};

export default useObtainActiveNavLink;
