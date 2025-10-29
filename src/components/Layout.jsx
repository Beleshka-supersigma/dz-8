import { Layout as AntLayout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const { Content } = AntLayout;

export const Layout = () => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ padding: "24px 50px", background: "#fff" }}>
        <Outlet />
      </Content>
      <Footer />
    </AntLayout>
  );
};
