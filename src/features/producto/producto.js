import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;

const Producto = (props) =>{
  const [id , setId] = useState(props.data.id)
  const [nombre, setNombre] = useState(props.data.nombre);
  const [precio,setPrecio] = useState(props.data.precio);
  const [precio1,setDescripcion] = useState(props.data.precio1);
  const [precio2,setPrecio2] = useState(props.data.precio2);
  

  return (  
    <Card
      title={id+".-"+nombre}
      bordered={false}
      style={{
        width: 300,
      }}
      

    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" onClick={props.onClick} />,
    ]}
  >

    
    <Meta
    
      title={" Precio actual: $"+ precio1}
      description={"Precio anterior: "+precio+ "  Precio futuro: "+precio2}
    />


  </Card>
);
}





export default Producto;