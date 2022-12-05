import React, {useEffect, useState} from 'react'
import Producto from './producto'
import {Row, Col, Drawer} from 'antd'
import './productoList.css'
import axios from 'axios'
import { Modal } from 'antd';
import {Button } from 'antd'
import { Input } from 'antd';


const data = [ 1
]

const ProductoList = () => {
    const [open, setOpen] = useState(false);
    const [items,setItems] = useState(data)

    useEffect(()=>{
      axios.get("https://gb3c55b057f2555-samai.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/productos/")
      .then((registros)=>{
        setItems(registros.data.items)
       
      })
      .then(()=>{ console.log(items) })

    },[])


    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("https://gb3c55b057f2555-samai.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/productos/")
        .then((response) => {
          setPost(response.data);
        });
      }, []);
      


    const agregar = () => {
         axios.post("https://gb3c55b057f2555-samai.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/productos/",
         {
            id: document.getElementById("id").value,
            nombre: document.getElementById("nombre").value,
            precio: document.getElementById("precio").value,
            precio1: document.getElementById("precio1").value,
            precio2: document.getElementById("precio2").value,
            
        })
        .then((response)=>{
            console.log(response)
            alert("Producto Agregado")
            window.location.reload()
        })
    }

    const deletpost = () => {
        axios.delete("https://gb3c55b057f2555-samai.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/productos/"+
        document.getElementById("id").value)
        .then((response)=>{
            console.log(response)
            alert("Producto Eliminado")
            window.location.reload()
        })
    }
 

      const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };

      const [isModalOpen, setIsModalOpen] = useState(false);

      const showModal = () => {
        setIsModalOpen(true);
    };

      const handleOk = () => {
        agregar(true)
        setIsModalOpen(false);
        
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const [open1, setOpen1] = useState(false);

    
    const Caja = () => {
        return (
            <div>
                Escriba id producto <Input placeholder="Id producto"type='text' id='id' />
                Escriba Nombre Producto<Input placeholder="Nombre"type='text' id='nombre' />
                Escriba Precio Anterior<Input placeholder="Precio Producto"type='text' id='precio' />
                Escriba Precio Actual<Input placeholder="Precio Producto Actual"type='text' id='precio1' />
                Escriba Precio Futuro<Input placeholder="Precio Producto Futuro"type='text' id='precio2' />
            </div>
        )
    };

    const Caja2 = () => {
        if (!post) return "No post!"
        return(
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                Escriba id producto <Input placeholder="Id producto"type='text' id='id' />
                <h1><Button type="danger" onClick={() => deletpost()}>Eliminar productos</Button></h1>
                
            </div>
        )
    }

    return (
        <>
        
            <Row >
                {
                    items.map(elemento => {
                        return (
                            <Col className='separador'>
                                <Producto data={elemento} onClick={showDrawer} />
                            </Col>)
                    })
                }
            </Row>

            <Drawer title="Tabla productos" placement="left" onClose={onClose} open={open}>

                <h1><Button type="primary" onClick={showModal}>Agregar Productos</Button></h1>
                <h1><Button type="primary" onClick={showModal}>Editar Productos-- </Button></h1>
                <h1><Button type="danger" onClick={() => setOpen1(true)}>Eliminar productos</Button></h1>

                <Modal title="Agregar productos" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Caja/>
                </Modal>
                
                <Modal title="Eliminar producto por ID"centered open={open1} onOk={() => setOpen1(false)} onCancel={() => setOpen1(false)} width={1000}>
                    <Caja2/>
                </Modal>
            </Drawer>

                


        </>
    )
}

export default ProductoList;