import { Container, Col} from "react-bootstrap";

const Empty = () => {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: "85vh" }}
        >
            <Col className="text-center">
            <h1 className=" ">Empty for Now</h1>
            </Col>
        </Container>
    );
};

export default Empty;
