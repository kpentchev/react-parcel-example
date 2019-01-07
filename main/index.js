import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '~/index.css';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
import { Main } from '~/main';

const {Header, Content} = Layout;

const App = () => (
  <div className="app">
    <Layout className="layout">
        <Header className="header">
            <h1>App</h1>
        </Header>
        <Layout>
            <Content className="content">
              <Main />
            </Content>
        </Layout>
    </Layout>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
