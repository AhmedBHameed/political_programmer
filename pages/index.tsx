import {Content, Footer} from 'antd/lib/layout/layout';
import {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </>
  );
};

// AboutMe.getInitialProps = ctx => {
//   // const isServer = !!props.req;
//   const isBrowser = !ctx.req;

//   if (isBrowser) return {};
//   const cookies = parseCookies(ctx.req.headers.cookie);
//   console.log(cookies);

//   return {};
// };

export default Home;
