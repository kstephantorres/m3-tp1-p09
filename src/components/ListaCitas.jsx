import { Card, Button } from "react-bootstrap";
const ListaCitas = ({ citas, borrarCita }) => {

    return (
        <div >
            {citas.map((cita) => (
                <Card key={cita.id} className="my-3">
                <Card.Body>
                    <Card.Title className="">{cita.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cita.mascota}</Card.Subtitle>
                    <Card.Text>
                    <strong>Fecha:</strong> {cita.fecha} | <strong>Hora:</strong> {cita.hora}
                    </Card.Text>
                    <Card.Text>
                        {cita.sintomas}
                    </Card.Text>
                    <Button variant="danger" onClick={() => borrarCita(cita.id)}>
                    Borrar Cita
                    </Button>
                </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ListaCitas;