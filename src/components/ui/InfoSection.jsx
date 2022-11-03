import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './infosection.css'
import infoImg from '../../assets/img/e5fc935b60035305099554810357012a.webp'

const InfoSection = () => {
    return (
        <section className="info__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="info__content">
                            <h2>My <span>ultra</span> super limited <span>rare</span> collection <span>digital art</span> NFTs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, beatae delectus
                                dolorem fuga iure labore maxime minus provident sit temporibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, beatae delectus
                                dolorem fuga iure labore maxime minus provident sit temporibus.</p>

                            <div className="info__btns d-flex align-item-center gap-4">
                                <button className="explore__btn d-flex align-item-center gap-2 ">
                                    <i className="ri-heart-fill"></i>
                                    <Link  to='/market'>Explore</Link>
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="info__img">
                            <img src={infoImg} alt="" className="w-100"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default InfoSection;