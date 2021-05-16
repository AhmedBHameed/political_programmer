import {Col, Row} from 'antd';
import {Content, Footer} from 'antd/lib/layout/layout';
import {NextPage} from 'next';
import PostCard from '../../components/PostCard/PostCard';
import styled from 'styled-components';
import MainTitle from '../../components/MainTitle/MainTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  min-height: calc(100vh - 50px);
`;

const Blogs: NextPage = () => {
  return (
    <Container>
      <Content>
        <Row justify="center">
          <Col xs={20} sm={15}>
            <Row justify="end">
              <Col>
                <MainTitle text="المقالات الجديدة" />
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={8}>
                <PostCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <PostCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <PostCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <PostCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row justify="center">Footer</Row>
      </Footer>
    </Container>
  );
};

export default Blogs;
