import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaCitas from './components/ListaCitas';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
  const [citas, setCitas] = useState(citasGuardadas);
  const [vacio, setVacio] = useState(false);
  
  const actualizarVacio=(citasArray)=>{
    setVacio(citasArray.length === 0);
  }

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
    actualizarVacio(citas)
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, { ...nuevaCita, id: Date.now() }]);
    actualizarVacio(citas)
  };

  

  const borrarCita = (id) => {
    const citasActualizadas = citas.filter((cita) => cita.id !== id);
    setCitas(citasActualizadas);
    actualizarVacio(citasActualizadas)
  };

  return (
    <Container>
      <h1 className='text-center'>Administrador pacientes de veterinaria</h1>
      <Row>
        <Col md={12}>
          <Formulario agregarCita={agregarCita} />
        </Col>
        <Col md={12}>
          {vacio? ( 
            <div className="mt-3 p-3 border rounded bg-primary-subtle text-center">
              <p className="m-0">No hay citas guardadas.</p>
            </div>)
            : <ListaCitas citas={citas} borrarCita={borrarCita} />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default App
