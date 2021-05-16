import {Col, Row} from 'antd';
import {Content, Footer} from 'antd/lib/layout/layout';
import {NextPage} from 'next';
import React from 'react';
import styled from 'styled-components';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote} from 'next-mdx-remote';
import MDPreview from '../../../components/MDPreview/MDPreview';
// import {MDXRemote} from 'next-mdx-remote';

const FillWidthRow = styled(Row)`
  width: 100%;
`;

interface BlogProp {
  source: any;
}

const Blog: NextPage<BlogProp> = ({source}) => {
  console.log('🚀 ~ file: index.tsx ~ line 18 ~ post', source);
  return (
    <>
      <Content>
        <FillWidthRow justify="center">
          <Col xs={20} sm={15}>
            <MDPreview
              markdown={
                'Some **mdx** text, with a component <Audio src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3?_=1" />'
              }
            />
            <MDXRemote {...source} />
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            animi odio maiores molestias maxime enim blanditiis. At aliquam
            earum voluptates aspernatur velit, quisquam, fugiat obcaecati,
            provident repellendus quis dolorum quaerat. */}
          </Col>
        </FillWidthRow>
      </Content>
      <Footer>
        <Row justify="center">Footer</Row>
      </Footer>
    </>
  );
};

export async function getServerSideProps() {
  // const apolloClient = await getStandaloneApolloClient();

  // const {data} = await apolloClient.query<PostsQuery>({query: POSTS_QUERY});
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component';
  const mdxSource = await serialize(source);
  return {props: {source: mdxSource}};
}

export default Blog;
