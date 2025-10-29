import { Card, Typography } from "antd";
const { Title, Paragraph } = Typography;

export const About = () => {
  return (
    <Card>
      <Title level={2}>О нас</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque a
        maxime deleniti? Libero aut hic nulla veniam perferendis excepturi error
        minima sed illo aliquam!
      </Paragraph>
    </Card>
  );
};
