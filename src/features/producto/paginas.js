import {Menu} from 'antd';
import React from 'react';


const Paginas = () => {

return (
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
/>);
}

export default Paginas;