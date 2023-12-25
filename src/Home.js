import React from "react";
import HomeImage from "./Assets/Homebanner.jpg";
import HomeImage1 from "./Assets/Homebanner1.jpg"
import HomeImage2 from "./Assets/Homebanner2.jpg"
import { Carousel } from "antd";
import { useMediaQuery } from "@mui/material";
import Service from "./Component/Service";
import Footer from "./Component/Footer"

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
            <Carousel autoplay dots={false} effect={"fade"} speed ={700}>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                Welcome to the{" "}
                                <span>
                                    Welding House
                                </span>
                            </h1>
                            <p>Leading Industrial Fabricator</p>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage1} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                Our Mission
                               
                            </h1>
                            <p>Leading Supplier of Welding and Fabrication Parts </p>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage2} />
                    <div className="centeredText">
                        <div className="typeWritterEffect">
                            <h1 className="cauroselHeader">
                                 Our Vission
                              
                            </h1>
                            <p>Creating You Vision with Love</p>
                        </div>
                    </div>
                </div>
            </Carousel>
            <Service />
            <Footer />

         
        </div>
    );
};

export default Home;
