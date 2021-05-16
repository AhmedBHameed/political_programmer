import {useCallback} from 'react';
import {useRouter} from 'next/router';
import NAVIGATION_ROUTES from '../../../config/NavigationRoutes';

const useNavigateToLogin = () => {
  const router = useRouter();

  const goToLogin = useCallback(() => {
    router.push(NAVIGATION_ROUTES.login.path);
  }, [router]);

  return {goToLogin};
};

export default useNavigateToLogin;
