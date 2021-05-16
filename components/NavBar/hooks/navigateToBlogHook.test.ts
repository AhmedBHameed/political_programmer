import {renderHook} from '@testing-library/react-hooks';

import NAVIGATION_ROUTES from '../../../config/NavigationRoutes';
import {mockHistoryPush} from '../../../setupTests';
import useNavigateToLogin from './navigateToBlogHook';

it(`redirects to "${NAVIGATION_ROUTES.blog.path}"`, () => {
  const {result} = renderHook(useNavigateToLogin);
  result.current.goToBlog();

  expect(mockHistoryPush).toHaveBeenCalledWith(NAVIGATION_ROUTES.blog.path);
});
