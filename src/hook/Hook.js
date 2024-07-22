import React, { useRef, useState } from 'react'
import "./hook.css"
import { Button, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink, Card, Container, Col, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
// import img1 from "./img"

export default function Hook() {
    const [flag, setFlag] = useState(true);
    const [count, setCount] = useState(10);
    const sidebarRef = useRef()
    const handle_cd = () => {
        setCount(count - 1)// -1
        // setCount(count - 1)// -1
        setCount(preState => preState - 1) // -1
        setCount(preState => preState - 1)//-2 

    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={handle_cd}>count down</button>
            </div>
            <div className={flag ? "hook active" : "hook"}>
                <h1>Chi Hao</h1>
                <p>flag: {flag ? "true" : "false"} </p>

            </div>
            <div className='meo' ref={sidebarRef}>

            </div>
            <Button onClick={() => {
                setFlag(!flag)
                sidebarRef.current.classList.toggle("active")
            }}>Change flag</Button>

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Card"
                    src=""
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card Title
                    </CardTitle>
                    <CardText>
                        This is some text within a card body.
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                        An item
                    </ListGroupItem>
                    <ListGroupItem>
                        A second item
                    </ListGroupItem>
                    <ListGroupItem>
                        And a third item
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Card Link
                    </CardLink>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Card"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card Title
                    </CardTitle>
                    <CardText>
                        This is some text within a card body.
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                        An item
                    </ListGroupItem>
                    <ListGroupItem>
                        A second item
                    </ListGroupItem>
                    <ListGroupItem>
                        And a third item
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Card Link
                    </CardLink>
                </CardBody>
            </Card>

            <Container>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                    <Col lg={3} md={4} sm={6} xs={6} className='border p-5'>row</Col>
                </Row>
            </Container>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
