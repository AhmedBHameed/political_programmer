import {renderHook} from '@testing-library/react-hooks';
import {mockMediaQuery} from '../../setupTests';

import {md, sm} from '../../styles/mediaQueries';
import useViewport from './hooks/windowViewportHook';
import ViewportProvider from './ViewportProvider';

describe('ViewportProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders mobile components on screen smaller than tablet', async () => {
    mockMediaQuery(md, sm);

    const {result} = renderHook(useViewport, {
      wrapper: ViewportProvider,
    });

    expect(result.current?.isTabletOrLarger).toBeFalsy();
  });

  it('renders tablet components on screen equal or larger than tablet screen', async () => {
    mockMediaQuery(md, md);

    const {result} = renderHook(useViewport, {
      wrapper: ViewportProvider,
    });

    expect(result.current?.isTabletOrLarger).toBeTruthy();
  });
});
