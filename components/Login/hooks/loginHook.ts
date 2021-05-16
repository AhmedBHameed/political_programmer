import {useCallback} from 'react';
import {LoginModel} from '../models/LoginModel';

const useLogin = () => {
  const handleLogin = useCallback(async (loginData: LoginModel) => {
    // eslint-disable-next-line no-console
    console.log(loginData);
    // TODO: Write your login call here.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }, []);

  return {handleLogin};
};

export default useLogin;
