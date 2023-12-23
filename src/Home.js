import React from "react";
import HomeImage from "./Assets/Homebanner.jpg";
import { Carousel } from "antd";
import { useMediaQuery } from "@mui/material";

const Home = () => {
    return (
        <div
            style={{
                marginTop: "auto",
                height: "100vh",
                textAlign: "center",
                alignItems: "center",
                justifyContentL: "center",
            }}
        >
            <Carousel autoplay>
                <div className="sliderImageDiv">
                    <h1 >Welocme to the Welding House</h1>
                    <img alt="slider1" src={HomeImage} />
                </div>
                <div className="sliderImageDiv">
                    <h1>Welocme to the Welding House</h1>
                    <img alt="slider1" src={HomeImage} />
                </div>
            </Carousel>
        </div>
    );
};

export default Home;
