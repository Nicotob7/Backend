import React, { useState } from 'react'
import Producto from './producto'
import { Row, Col, Drawer, Button } from 'antd'
import './productoList.css'
import { Modal } from 'antd';
import { Input } from 'antd';


const items = [
    { nombre: 'cocacola', precio: 1350, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'fanta', precio: 1220, descripcion: "Formato: 2200cc | Material: Vidrio | Retornable: No" },
    { nombre: 'sprite', precio: 1310, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'tomy cola', precio: 1150, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: No" },
    { nombre: 'Pepsi', precio: 1280, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'Kem', precio: 1350, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" }
]

const ProductoList = () => {
    const [open, setOpen] = useState(false);

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
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const Caja = () => {
        return (
            <div>
                <Input placeholder="Basic usage" />
                <Input placeholder="Basic usage" />
                <Input placeholder="Basic usage" />
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

            <Drawer title="Tabla de porqueria" placement="left" onClose={onClose} open={open}>

                <Button type="primary" onClick={showModal}>Open Modal</Button>

                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Caja />
                </Modal>

            </Drawer>
        </>
    )
}

export default ProductoList;