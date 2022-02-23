import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderNav = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/careers">Careers</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderNav;
