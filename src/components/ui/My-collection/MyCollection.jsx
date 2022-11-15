import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./mycollection.css";
import NftCard from "../Nft-card/NftCard";
import BeatLoader from "react-spinners/BeatLoader";
import {useSelector, useDispatch} from "react-redux";
import {nftFetch, nftSuccess, nftFailure, setCurrentPage} from "../../../store/nftSlice";
import {getNft, getNftOffset} from "../../../api";
import Pagination from "../../Pagination";
import {nftFetchAction} from "../../../store/action";


const MyCollection = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const {loading, items } = useSelector((state) => state.nft);

    const onChangePage = number => {
        setCurrentPage(number)
    }

    useEffect(() => {
        dispatch(nftFetchAction(currentPage));
    }, [currentPage]);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="122" className="mb-4">
                        <div className="my__collection__top d-flex align-items-center justify-content-between ">
                            <h3>
                                <span>My Collection</span>
                            </h3>
                        </div>
                    </Col>
                    {loading ? (
                        <BeatLoader color="#5142fc"/>
                    ) : (
                        items.map((item) => (
                            <Col key={item.id} lg="3" className="mb-4">
                                <NftCard {...item} />
                            </Col>
                        ))
                    )}
                    <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                </Row>
            </Container>
        </section>
    );
};

export default MyCollection;
