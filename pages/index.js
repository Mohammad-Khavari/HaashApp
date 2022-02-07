import { Container, Col } from "react-bootstrap";
// import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: "85vh" }}
        >
            <Col className="text-center">
                <h1 className=" ">Welcome Hash Mamad ;)</h1>
                <br />
                <p className="">Show me what you can do! </p>
            </Col>
        </Container>
    );
}
