import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mycollection.css";
import NftCard from "../Nft-card/NftCard";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector, useDispatch } from "react-redux";
import { nftFetch, nftSuccess, nftFailure } from "../../../store/nftSlice";
import { getNfts } from "../../../api";

const MyCollection = () => {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nft);

  useEffect(() => {
    dispatch(nftFetch());
    getNfts()
      .then((response) => {
        dispatch(nftSuccess(response.data.assets));
      })
      .catch((error) => dispatch(nftFailure(error)));
  }, []);

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
          {nfts.loading ? (
            <BeatLoader color="#5142fc" />
          ) : (
            nfts.items.map((item) => (
              <Col key={item.id} lg="3" className="mb-4">
                <NftCard {...item} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default MyCollection;
