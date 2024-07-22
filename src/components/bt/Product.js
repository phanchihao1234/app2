import React from 'react'
import { Card, CardBody, CardLink, CardText, CardTitle, Col, ListGroup, ListGroupItem } from 'reactstrap'
import "./product.css"

export default function Product(prop) {
    const { pro } = prop
    return (
        <>
            <Col lg={3} md={4} sm={6} xs={6} style={{
                marginTop: "2rem",
                textAlign: "center",
                position: "relative"
            }}>
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
                            {pro.title}
                        </CardTitle>
                        <CardText>
                            {pro.category}
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            {pro.price} $
                        </ListGroupItem>
                        <ListGroupItem>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                            Add to Card
                        </CardLink>
                    </CardBody>
                </Card>
                <div className='tag'>12 off</div>
            </Col>
        </>
    )
}
