import React from "react";
import HomeImage from "./Assets/Homebanner.jpg";
import HomeImage1 from "./Assets/Homebanner1.jpg"
import HomeImage2 from "./Assets/Homebanner2.jpg"
import { Carousel } from "antd";
import { useMediaQuery } from "@mui/material";
import Service from "./Component/Service";

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
            <Carousel autoplay dots={false} effect={"fade"}>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                Welocme to the{" "}
                                <span style={{ color: "#1A8EC2" }}>
                                    Welding House
                                </span>
                            </h1>
                            <p>Leading Industral Fabricator and Welder</p>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage1} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                Welocme to the{" "}
                                <span style={{ color: "#1A8EC2" }}>
                                    Welding House
                                </span>
                            </h1>
                            <p>Leading Industral Fabricator and Welder</p>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage2} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                Welocme to the{" "}
                                <span style={{ color: "#1A8EC2" }}>
                                    Welding House
                                </span>
                            </h1>
                            <p>Leading Industral Fabricator and Welder</p>
                        </div>
                    </div>
                </div>
            </Carousel>
            <Service />

         
        </div>
    );
};

export default Home;
