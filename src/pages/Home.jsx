import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export const Home = () => {
  return (
    <Card>
      <Title level={2}>Добро пожаловать в блог!</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quos
        in qui iure, necessitatibus itaque, temporibus harum culpa nemo, aut
        pariatur asperiores error? Soluta, sapiente rerum? Soluta earum
        temporibus magnam nihil vero blanditiis voluptatibus asperiores quae,
        perspiciatis praesentium, quis velit, amet saepe commodi consequuntur
        cum quod cupiditate. Obcaecati, numquam velit.
      </Paragraph>
    </Card>
  );
};
