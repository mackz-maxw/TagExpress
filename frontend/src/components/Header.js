import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

const AppHeader = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => changeLanguage('en')}>English</Menu.Item>
      <Menu.Item onClick={() => changeLanguage('zh')}>中文</Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Feeds</Menu.Item>
        <Menu.Item key="3">
          <Dropdown overlay={menu}>
            <a href="#">Language</a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;