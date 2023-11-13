import "../static/game-warrior/css/animate.css";
import "../static/game-warrior/css/bootstrap.min.css";
import "../static/game-warrior/css/style.css";
import "../static/game-warrior/css/animate.css";
import "../static/game-warrior/css/bootstrap.min.css";
import "../static/game-warrior/css/style.css";
import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
    AlignCenterOutlined,
} from '@ant-design/icons';
import header from "../static/game-warrior/css/header.module.css";
export function Header() {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const menuItems = [
        { label: '식단', key: 'diet', icon: <CalendarOutlined /> },
        { label: '영상', key: 'video', icon: <AppstoreOutlined /> },
        { label: '운동계획', key: 'exercise', icon: <SettingOutlined /> },
        { label: '커뮤니티', key: 'community', icon: <LinkOutlined /> },
    ];

    return (
        <header className="header-section">
            <div className="container">
                <a className="site-logo" href="#">
                    <span>OUW</span>
                </a>
                <div className="user-panel">
                    <a href="#">Login</a> / <a href="#">Register</a>
                </div>

                <div className="nav-switch">
                    <button className={header.customButton} onClick={showDrawer}>
                        <AlignCenterOutlined style={{ fontSize: '25px', color: '#FFFFFF' }}/>
                    </button>
                </div>
                <nav className="main-menu">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.key}>
                                <a href="#">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <Drawer
                title="Menu"
                placement="right"
                closable={true}
                onClose={onCloseDrawer}
                visible={drawerVisible}
            >
                <Menu mode="vertical" theme="light" defaultSelectedKeys={['home']}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </header>
    );
}
