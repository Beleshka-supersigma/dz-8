import { Card, Row, Col, Typography } from "antd";
import { posts } from "../db/data";

const { Title, Paragraph } = Typography;

export const Posts = () => {
  return (
    <>
      <Title level={2}>Список постов</Title>
      <Row gutter={[16, 16]}>
        {posts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card title={post.title} bordered>
              <Paragraph>{post.content}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
