import React, {useEffect, useRef, useState} from "react";
import InfoSection from "../components/ui/InfoSection";
import MyCollection from "../components/ui/My-collection/MyCollection";
import {useParams} from "react-router-dom";

const Home = () => {



    return (
        <div>
            <InfoSection/>
            <MyCollection />
        </div>
    );
};

export default Home;
