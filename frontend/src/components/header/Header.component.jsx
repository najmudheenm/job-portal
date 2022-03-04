import "./Header.styles.scss";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {useSelector,useDispatch} from 'react-redux'

import {Logout} from "../../redux/admin/adminAction"

const { Header } = Layout;

const HeaderNav = () => {
  const dispatch=useDispatch()
  const user =useSelector(user=>user.admin)
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/" exact>Careers</NavLink>
          </Menu.Item>
          {user.email.length ?
          (<><Menu.Item key="2">
          <NavLink to="/createjob">Create Job</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="" onClick={()=>dispatch(Logout())}>logout</NavLink>
        </Menu.Item></>)
          :
          (<Menu.Item key="2">
          <NavLink to="/login" >Login</NavLink>
        </Menu.Item>
        )
        }
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderNav;
