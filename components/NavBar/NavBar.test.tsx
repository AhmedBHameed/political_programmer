import {act, fireEvent, render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {mockLocationPathname, mockMediaQuery} from '../../setupTests';
import {md, sm} from '../../styles/mediaQueries';

import theme from '../../styles/Theme';
import ViewportProvider from '../WindowViewport/ViewportProvider';
import NavBar from './NavBar';

function renderComponent() {
  return render(
    <Router>
      <ViewportProvider>
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>
      </ViewportProvider>
    </Router>
  );
}

describe('NavBar', () => {
  beforeEach(() => {
    mockLocationPathname.mockImplementation(() => ({
      pathname: '/',
    }));

    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    mockMediaQuery(md, md);

    const {container} = renderComponent();

    expect(container).toMatchSnapshot();
  });

  describe('Viewport behaviour', () => {
    it('shows tablet navbar version on screen bigger or equal to tablet size', async () => {
      mockMediaQuery(md, md);

      const {queryByTestId} = renderComponent();

      expect(await queryByTestId('tablet-navbar')).toBeInTheDocument();
      expect(await queryByTestId('profile-tablet-submenu')).toBeInTheDocument();
      expect(await queryByTestId('burger-button')).not.toBeInTheDocument();
    });

    it('shows mobile navbar version on screen smaller than tablet size', async () => {
      mockMediaQuery(md, sm);
      const {queryByTestId} = renderComponent();

      expect(await queryByTestId('tablet-navbar')).not.toBeInTheDocument();
      // expect(
      //   await queryByTestId('profile-tablet-submenu')
      // ).not.toBeInTheDocument();
      // TODO: Please check the comment in `NavBar.tsx component L:116`
      expect(await queryByTestId('profile-tablet-submenu')).toBeInTheDocument();
      expect(await queryByTestId('burger-button')).toBeInTheDocument();
    });

    it('shows drawer menu on mobile version when burger button clicked', async () => {
      mockMediaQuery(md, sm);

      const {getByTestId} = renderComponent();

      act(() => {
        fireEvent.click(getByTestId('burger-button'));
      });

      expect(getByTestId('drawer-navigation')).toBeInTheDocument();
    });
  });
});
