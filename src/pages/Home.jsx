import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export const Home = () => {
  return (
    <Card>
      <Title level={2}>Добро пожаловать в блог!</Title>
      <Paragraph>
        Это современное SPA-приложение, созданное с помощью React и Ant Design.
      </Paragraph>
    </Card>
  );
};
