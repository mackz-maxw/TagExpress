import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import Header from './components/Header';

const { Content } = Layout;

const App = () => {
  const { i18n } = useTranslation();

  return (
    <Router>
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed/:id" element={<FeedPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;