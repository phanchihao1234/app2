import React, { useState } from 'react'
import { Button, Container, Row, } from 'reactstrap';
import Product from './Product';
import "./bt.css"

export default function Bt() {
    const arr = [
        { name: "aaaaaa", price: "111" },
        { name: "bbb", price: "111" },
        { name: "ccc", price: "111" },
        { name: "ccc", price: "111" },
    ]

    const listSlide = [
        {
            id: 1,
            title: "Travel to london",
            subtitle: "Life is a adventure, makethe best of it",
            desc: "Enjoythe breathtaking view of nature. Relax and cherish your dreams to the fullest",
            img: "https://react-bootstrap-lovat.vercel.app/img/slide-1.png"
        },
        {
            id: 2,
            title: "Travel to Los Angeles",
            subtitle: "Exploring the Vibrant City of Angels: A Journey to Los Angeles",
            desc: "Welcome to the dazzling city of Los Angeles, where glitz, glamour, and a rich cultural tapestry await every traveler. Known as the Entertainment Capital of the World, Los Angeles",
            img: "https://react-bootstrap-lovat.vercel.app/img/slide-2.png"
        },
    ];
    const listCateTour = [
        { id: 1, title: "New York" },
        { id: 2, title: "London" },
        { id: 3, title: "Tokyo" },
        { id: 4, title: "Los Angeles" },
    ];


    const [listTour, setlistTour] = useState([
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
            special: true
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "New York",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
        },
        {
            id: 5,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "London",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png",
        },
        {
            id: 6,
            title: "Essence of Vietnam South to North",
            category: "London",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png",
            special: true
        },
        {
            id: 7,
            title: "Osa Peninsula to Dominical City Tour",
            category: "London",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png",
        },
        {
            id: 8,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "London",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png",
        },
        {
            id: 9,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Tokyo",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png",
            special: true
        },
        {
            id: 10,
            title: "Essence of Vietnam South to North",
            category: "Tokyo",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png",
        },
        {
            id: 11,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Tokyo",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png",
        },
        {
            id: 12,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Tokyo",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png",
            special: true
        },
        {
            id: 13,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Los Angeles",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png",
        },
        {
            id: 14,
            title: "Essence of Vietnam South to North",
            category: "Los Angeles",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png",
        },
        {
            id: 15,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Los Angeles",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png",
        },
        {
            id: 16,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Los Angeles",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png",
        },
    ]);

    const listBlog = [
        {
            id: 1,
            title: "Europe’s finest and most scenic train journeys",
            category: "Health & Fitness",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-1.png",
        },
        {
            id: 2,
            title: "The 5 best hikes around the world",
            category: "Creative",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-2.png",
        },
        {
            id: 3,
            title: "Pack wisely before traveling",
            category: "Family Travel",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-3.png",
        },
        {
            id: 4,
            title: "The Surfing Man Will Blow Your Mind",
            category: "Future of Travel",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-4.png",
        },
        {
            id: 5,
            title: "An arts and culture guide to Turin, Italy",
            category: "Family Travel",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-5.png",
        },
        {
            id: 6,
            title: "Pityful a rethoric question ran",
            category: "Future of Travel",
            img: "https://react-bootstrap-lovat.vercel.app/img/blog-6.png",
        },
    ];
    const [list, setList] = useState([
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
            special: true
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "New York",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
        },
    ])
    const handle_list = (value) => {
        console.log(listTour.filter(item => item.category == value))
        setList(listTour.filter(item => item.category == value))
    }
    return (
        <>
            <Container style={{
                textAlign: "center"
            }}>
                <h3>Perfect destination</h3>
                <h2>Trending destinations</h2>
            </Container>
            <div className='btn'>
                <Button className='ms-5 button active' onClick={() => handle_list("New York")}>New York</Button>
                <Button className='ms-5 button' onClick={() => handle_list("London")}>London</Button>
                <Button className='ms-5 button' onClick={() => handle_list("Tokyo")}>Tokyo</Button>
                <Button className='ms-5 button' onClick={() => handle_list("Los Angeles")}>Los Angeles</Button>
            </div>
            <Container >
                <Row >
                    {
                        list.map((item, index) => (
                            <Product key={index} pro={item} />
                        ))
                    }
                </Row>
            </Container >
        </>
    )
}
