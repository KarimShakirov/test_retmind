import React, { useEffect, useState } from "react";
import img01 from "../../../assets/img/img-09.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

// import api from '../../../api/posts';

const NftCard = ({ image_url, name, asset_contract, token_id }) => {
  return (
    <>
      <div className="single__nft__card mb-5">
        <div className="nft__img">
          <img src={image_url} alt="" className="w-100" />
        </div>
        <div className="nft__content">
          <h5 className="nft__title">{name}</h5>
          <div className="creator__info-wrapper d-flex gap-3">
            <button className="more__btn d-flex align-item-center gap-2 ">
              <i className="ri-more-2-fill"></i>
              {/*<Link to={`/details/${id}`}>Explore</Link>*/}
              <Link to={`/details/${asset_contract.address}/${token_id}`}>
                Explore
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCard;
