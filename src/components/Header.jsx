import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const location = useLocation();

  const items = [
    { label: <Link to="/">Главная</Link>, key: "/" },
    { label: <Link to="/about">О нас</Link>, key: "/about" },
    { label: <Link to="/posts">Посты</Link>, key: "/posts" },
  ];

  return (
    <AntHeader style={{ background: "#1677ff" }}>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          float: "left",
          marginRight: "30px",
        }}
      >
        Блог
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        style={{ background: "transparent" }}
      />
    </AntHeader>
  );
};
