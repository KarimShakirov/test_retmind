import React, {useState, useEffect} from "react";
import Details from "../components/ui/Details/Details";
import {useParams} from "react-router-dom";
import {nftDetailFetch, nftDetailSuccess, nftDetailFailure} from '../store/nftDetailSlice'
import {getNftDetails} from "../api";
import {useSelector, useDispatch} from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

const NftDetail = () => {
    const dispatch = useDispatch();
    const dtls = useSelector((state) => state.detail)

    const {contractAddress, tokenId} = useParams();

    useEffect(() => {
        dispatch(nftDetailFetch())
        getNftDetails(contractAddress, tokenId)
            .then((response) => {
                dispatch(nftDetailSuccess(response.data.collection));
            })
            .catch((error) => dispatch(nftDetailFailure(error)));
    }, []);

    return (
        <div>
            {
                dtls.loading ? (
                    <BeatLoader color="#5142fc"/>
                ) : (
                    <Details dtls={dtls}/>
                )
            }
        </div>
    );
};

export default NftDetail;
