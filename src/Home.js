import React from "react";

import { Carousel } from "antd";
import { useMediaQuery } from "@mui/material";
import Service from "./Component/Service";
import Footer from "./Component/Footer"
import data from "./data/data"
import HeadComponent from "./Component/HeadComponent";
import { Google } from "@mui/icons-material";
import GoogleMap from "./Component/GoogleMap";

const Home = () => {
    return (
        <div>
            <HeadComponent
                title={data.homeData.title}
                subtitle={data.homeData.subtitle}
                text={data.homeData.text}
                image={data.homeData.image}
            />
            <Service />
            <Footer />
            <GoogleMap/>
        </div>
    );
};

export default Home;
