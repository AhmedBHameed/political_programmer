import {NextComponentType} from 'next';
import {AppContext, AppInitialProps, AppProps} from 'next/app';
import {Normalize} from 'styled-normalize';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import theme from '../styles/Theme';
import {Layout, Space} from 'antd';
import ViewportProvider from '../components/WindowViewport/ViewportProvider';
import NavBar from '../components/NavBar/NavBar';
import styled from 'styled-components';
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gotham Light';
    src: local('Gotham'),
      url('./fonts/Gotham_Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Gotham Medium';
    src: local('Gotham'),
      url('./fonts/Gotham_Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Kufi Arabic Regular';
    src: url('/fonts/Noto_Kufi_Arabic_Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Kufi Arabic Bold';
    src: url('/fonts/Noto_Kufi_Arabic_Bold.ttf') format('truetype');
  }

  #__next {
    height: 100vh;
  }
`;

const AntdContextProvider = styled(Space)`
  &&,
  .ant-space-item {
    width: 100%;
    height: 100vh;
  }
`;

const StyledLayout = styled(Layout)`
  display: block;
  height: 100%;
`;

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ViewportProvider>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>

      <Normalize />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AntdContextProvider>
          <StyledLayout>
            <NavBar />
            <Component {...pageProps} />
          </StyledLayout>
        </AntdContextProvider>
      </ThemeProvider>
    </ViewportProvider>
  );
};

export default App;
