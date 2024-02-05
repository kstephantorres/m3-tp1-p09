import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
const Formulario = ({ agregarCita }) => {
    const [cita, setCita] = useState({
        nombre: '',
        mascota: '',
        fecha: '',
        hora: '',
        sintomas:''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCita({
          ...cita,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if (Object.values(cita).every((value) => value.trim() !== '')) {
          agregarCita(cita);
          setCita({
            nombre: '',
            mascota: '',
            fecha: '',
            hora: '',
            sintomas:'',
          });
        } else {
          alert('Complete todos los campos antes de enviar la cita.');
        }
      };
      const agregarCeroAdelante = (valor) => {
        return valor < 10 ? `0${valor}` : valor;
      };
      const obtenerFechaActual = () => {
        const fechaActual = new Date();
        const formatoFecha = `${fechaActual.getFullYear()}-${agregarCeroAdelante(
          fechaActual.getMonth() + 1
        )}-${agregarCeroAdelante(fechaActual.getDate())}`;
    
        return formatoFecha;
      };


    return (
        <Form onSubmit={handleSubmit} className="border-bottom border-start border-end">
            <h5 className="border-bottom border-dark shadow-sm textoForm mb-0">Llenar el formulario para crear una cita</h5>
         
        <Form.Group controlId="formMascota" className="bg-primary-subtle">
            <div className="d-flex textoForm">
                <Form.Label className="me-2">Mascota:&nbsp;&nbsp;</Form.Label>
                <Form.Control
                type="text"
                name="mascota"
                value={cita.mascota}
                onChange={handleInputChange}
                placeholder="Nombre de la mascota"
                required
                maxLength={50}
                minLength={1}
                />
            </div>
          
        </Form.Group>
        <Form.Group controlId="formNombre" className="bg-primary-subtle">
            <div className="d-flex textoForm">
                <Form.Label className="me-2">Dueño:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                <Form.Control
                type="text"
                name="nombre"
                value={cita.nombre}
                onChange={handleInputChange}
                placeholder="Nombre del dueño"
                required
                maxLength={50}
                minLength={2}
                />
            </div>
        </Form.Group>

        <Row className="d-flex textoForm justify-content-between bg-primary-subtle">
            <Col sm={12} md={6}>
                <Form.Group controlId="formFecha" className="d-flex">
                    <Form.Label className="me-2">Fecha:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                    <Form.Control
                        type="date"
                        name="fecha"
                        value={cita.fecha}
                        onChange={handleInputChange}
                        required
                        min={obtenerFechaActual()}
                    />
                </Form.Group>
            </Col>
               
            <Col sm={12} md={6}>
                <Form.Group controlId="formHora" className="d-flex pt-4 pt-md-0">
                <Form.Label className="me-2 ">Hora:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                <Form.Control
                    type="time"
                    name="hora"
                    value={cita.hora}
                    onChange={handleInputChange}
                    required
                />
                </Form.Group>
            </Col>  
        </Row>
        <Form.Group controlId="formSintomas" className="bg-primary-subtle border-bottom shadow-sm">
            <div className="d-flex textoForm">
                <Form.Label className="me-2">Sintomas:</Form.Label>
                <Form.Control
                type="text"
                name="sintomas"
                value={cita.sintomas}
                onChange={handleInputChange}
                placeholder="Describir sintomas"
                required
                minLength={3}
                maxLength={500}
                />
            </div>
          
        </Form.Group>
        
        <div  className="d-flex justify-content-center ">
            <Button variant="primary" type="submit" className="m-3">
            Agregar nueva cita
            </Button>
        </div>
        
      </Form>
  
    );
};

export default Formulario;