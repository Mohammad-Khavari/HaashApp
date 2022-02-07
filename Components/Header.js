import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsPlusCircleFill,BsFillGearFill,BsFillCheckSquareFill,BsArrowCounterclockwise } from "react-icons/bs";


import Link from "next/Link";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/" passHref >
                <Navbar.Brand >iCam...</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Nav calssName=" d-flex "variant="pills" defaultActiveKey="/"> 

                        <Link href="/" passHref>
                            <Nav.Link >Home</Nav.Link>
                        </Link>

                        <Link href="/AddNew" passHref>
                            <Nav.Link ><BsPlusCircleFill /> Add</Nav.Link>
                        </Link>

                        <Link href="/Setup" passHref>
                            <Nav.Link ><BsFillGearFill/> Setup</Nav.Link>
                        </Link>

                        <Link href="/Empty" passHref>
                            <Nav.Link ><BsFillCheckSquareFill/> Save</Nav.Link>
                        </Link>

                        <Link href="Empty" passHref>
                            <Nav.Link ><BsArrowCounterclockwise/> Clear All</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
