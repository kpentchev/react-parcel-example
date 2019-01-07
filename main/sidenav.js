import React from 'react';

import {Layout, Menu} from 'antd';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';

import { Link } from 'react-router-dom';

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        const { Sider } = Layout;
        const pathname = 'dashboard';
        return (
            <Sider className="side-nav" breakpoint="lg"
                collapsible collapsed={this.state.collapsed}
                onCollapse={this.onCollapse} >
                <Link to={{ pathname: '/'}}>
                    <div className="logo">
                        <div className="shadow">
                            logo
                        </div>
                    </div>
                </Link>
                <Menu defaultSelectedKeys={['dashboard']} selectedKeys={[pathname]} mode="inline">
                    <Menu.Item key="dashboard">
                        <Link to={{ pathname: '/'}}>
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
    
}

export default SideNav;