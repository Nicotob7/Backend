  import { Breadcrumb, Layout} from 'antd';
  import React from 'react';
  import './plantilla.css'
  import ProductoList from '../producto/productoList'
  import { Button} from 'antd';

  const { Header, Content, Footer} = Layout; 
  
  const App = () => {
    return (
      <Layout className="layout">
      <Header className='header'>

      
      </Header>
      
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >

              <ProductoList />
              Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
    );
  };
  
  export default App;