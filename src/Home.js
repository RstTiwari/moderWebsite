import React from "react";
import HomeImage from "./Assets/Homebanner.jpg";
import HomeImage1 from "./Assets/Homebanner1.jpg"
import HomeImage2 from "./Assets/Homebanner2.jpg"
import HomeImage3 from "./Assets/home3 (1).jpg"
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
            <Carousel
                autoplay
                dots={false}
                effect={"scrollx "}
                autoplaySpeed={5000}
                style={{
                    color: "#99ba02"
                }}
            >
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage3} />
                    <div className="centeredText">
                        <div >
                            <h1 className="cauroselHeader">
                                Welcome to <span>WELDING HOUSE</span>
                            </h1>
                            <h6  className="cauroselText">
                                Shaping the Future of Welding & Cutting
                                Products, Consumables and Fabrication Technology
                            </h6>
                            <h6 className="cauroselText">
                                Welding House is a INDIA leader in welding and
                                cutting equipment and consumables. Our
                                innovative, INDIA -renowned equipment and
                                fabrication technology solutions are developed
                                with input from our customers and built on the
                                expertise and heritage of a global manufacturing
                                leader. Our collective vision is to transform
                                the industry and meet the needs of our customers
                                through our diverse product portfolio.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage1} />
                    <div className="centeredText">
                        <div >
                            <h1 className="cauroselHeader">Our Mission</h1>
                            <h6  className="cauroselText">
                                "Our Mission: To consistently deliver
                                exceptional welding services, exceeding industry
                                standards, while fostering a culture of
                                innovation, safety, and environmental
                                responsibility"
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage2} />
                    <div className="centeredText">
                        <div >
                            <h1 className="cauroselHeader">Our Vission</h1>
                            <h6  className="cauroselText">
                                "Our Vision: To be the premier provider of
                                welding solutions, setting the gold standard for
                                excellence in craftsmanship and innovation. We
                                envision a future where our company is
                                synonymous with cutting-edge welding
                                technologies, superior quality, and unwavering
                                dedication to client satisfaction."
                            </h6>
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
