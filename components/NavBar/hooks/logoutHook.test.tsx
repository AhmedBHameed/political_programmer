import {act} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import useLogout from './logoutHook';

const mockGoToLogout = jest.fn(() => Promise.resolve(true));
jest.mock('../../Login/hooks/navigateToLoginHook', () => () => ({
  goToLogin: mockGoToLogout,
}));

describe('LogoutHook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('logs out and clear the cache', async () => {
    const {result} = renderHook(useLogout);

    act(() => {
      result.current.handleLogout();
    });

    expect(mockGoToLogout).toHaveBeenCalledTimes(1);
    expect(mockGoToLogout).toHaveBeenCalledWith(/* nothing */);
  });
});
