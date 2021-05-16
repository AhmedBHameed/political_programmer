import {useCallback} from 'react';
import {useRouter} from 'next/router';
import NAVIGATION_ROUTES from '../../../config/NavigationRoutes';

const useNavigateToBlog = () => {
  const router = useRouter();

  const goToBlog = useCallback(() => {
    router.push(NAVIGATION_ROUTES.blog.path);
  }, [router]);

  return {goToBlog};
};

export default useNavigateToBlog;
