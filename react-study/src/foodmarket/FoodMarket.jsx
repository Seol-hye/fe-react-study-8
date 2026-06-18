import './FoodMarket.css'
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

// 화면에 보여주는 푸드 정보 기준 data import
import foodsData from './data/foodsdata';
import { useState } from 'react';
import FoodCard from './components/FoodCard';

import { Routes, Route, Link, useNavigate } from 'react-router';
import CustomerService from './pages/CustomerService';
import Home from './pages/Home';
import Detail from './pages/Detail';


function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    let navigate = useNavigate();


    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/detail") }}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/info") }}>Info</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/help") }}>고객센터</Nav.Link>

                        {/* <Nav.Link href="/info">Info</Nav.Link>
                        <Nav.Link href="/help">고객센터</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Home foods={foods} />} />
                <Route path='/help' element={<CustomerService />} />
                <Route path='/detail/:id' element={<Detail foods={foods} />} />
                <Route path='/detail' element={<div><h1>detail page</h1></div>} />
                <Route path='/info' element={<div><h1>info page</h1></div>} />
                <Route path='/*' element={<div><h1>잘못된 접근입니다.</h1></div>} />
            </Routes>


            {/* 
                이미지 사용

                1. css 에서 사용
                    이미지 경로 (상대경로 ./img/...)

                2. js(jsx) 에서 사용
                상대경로연결 사용 XXX
                <img src="../../image/menu.png"/>

                react 컴포넌트에서 이미지 사용시, import -> 사용 
                <img src="https://...외부url"/>
                <img src={import한 이미지}"/>

                3. public 폴더에 이미지를 미리 저장해놓고 사용
                현재 실행중인 서버가 public 경로를 통해 image 에 접근할 수 있는 서버 역할
                이미지 외부 url에 접근해서 사용하듯이 사용

                <img src={'https://localhost:5173/images/food1.jpg'} />
                <img src={'/images/food1.jpg'} />

                <img src={'https://localhost:7173/images/food1.jpg'} />
                <img src={'/images/food1.jpg'} />

                <img src={'https://localhost:7173/images/food1.jpg'} />
                <img src={'https://hellofoodmarket.com/images/food1.jpg'} />

                
                CRA     :   <img src={process.env.PUBLIC_URL + '/images/food1.jpg'} />
                            package.json
                            "homepage":"/detailServicePath" 상세경로설정

                Vite    :   <img src={import.meta.env.BASE_URL + '/images/food1.jpg'} />
                            vite.config.js
                            base: "/detailServicePath" 상세경로설정

            */}

        </div>
    )
}

export default FoodMarket;