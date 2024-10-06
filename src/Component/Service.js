import React from "react";
import Card from "./Card";
import data from "../data/data";
import { Carousel } from "antd";
const { serviceData } = data;

const Service = () => {
    return (
        <>
            <h1 className="headerTerxt" style={{ backgroundColor: "#006635" }}>
                Our Service
            </h1>
            <Carousel
                autoplay={true}
                autoplaySpeed={1500}
                effect={"scrollx"}
                dotPosition={"bottom"}
            >
                <div className="singleCard">
                    <Card
                        title={serviceData[0].title}
                        image={serviceData[0].image}
                        details={serviceData[0].details}
                        actionName={serviceData[0].actionName}
                        actionLink={serviceData[0].actionLink}
                    />
                </div>

                <div className="singleCard">
                    <Card
                        title={serviceData[1].title}
                        image={serviceData[1].image}
                        details={serviceData[1].details}
                        actionName={serviceData[1].actionName}
                        actionLink={serviceData[1].actionLink}
                    />
                </div>
                <div className="singleCard">
                    <Card
                        title={serviceData[2].title}
                        image={serviceData[2].image}
                        details={serviceData[2].details}
                        actionName={serviceData[2].actionName}
                        actionLink={serviceData[2].actionLink}
                    />
                </div>
                <div className="singleCard">
                    <Card
                        title={serviceData[3].title}
                        image={serviceData[3].image}
                        details={serviceData[3].details}
                        actionName={serviceData[3].actionName}
                        actionLink={serviceData[3].actionLink}
                    />
                </div>
                <div className="singleCard">
                    <Card
                        title={serviceData[4].title}
                        image={serviceData[4].image}
                        details={serviceData[4].details}
                        actionName={serviceData[4].actionName}
                        actionLink={serviceData[4].actionLink}
                    />
                </div>
            </Carousel>
        </>
    );
};

export default Service;
