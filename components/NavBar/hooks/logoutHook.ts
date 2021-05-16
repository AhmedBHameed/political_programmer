import {useCallback} from 'react';
import useNavigateToLogin from '../../Login/hooks/navigateToLoginHook';

const useLogout = () => {
  const {goToLogin} = useNavigateToLogin();

  const handleLogout = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('HANDLE LOGOUT FUNCTIONALITY HERE!!!');
    goToLogin();
  }, [goToLogin]);

  return {handleLogout};
};

export default useLogout;
