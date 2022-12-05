  import { Breadcrumb, Layout, Menu} from 'antd';
  import React from 'react';
  import './plantilla.css'
  import ProductoList from '../producto/productoList'
  

  const { Header, Content, Footer} = Layout; 
  
  const App = () => {
    return (
      <Layout className="layout">
      <Header className='header'>
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(4).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />

      
      </Header>
      
      <Content
        style={{
          padding: '0 50px',
          textAlign: 'left',
          backgroundColor: '#ffe5d9',
          margin: '50px',
          marginTop: '50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 10PX',
            
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>


        </Breadcrumb>
        <div className="site-layout-content">Content</div>

        <ProductoList/>
      </Content>
      
      <Footer
        style={{
          margin: '1px',
          
        }}
      >


              Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
    );
  };
  
  export default App;