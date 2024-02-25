import React from "react";
import Card from "./Card";
import data from "../data/data"

const Service = () => {
    return (
        <>
            <h1 className="headerTerxt" style={{backgroundColor:"#006635"}}>Our Service</h1>
            <div className="service_component">
                {data.serviceData.map((item) => {
                    return (
                        <div className="singleCard">
                            <Card
                                title={item.title}
                                image={item.image}
                                details={item.details}
                                actionName={item.actionName}
                                actionLink={item.actionLink}
                            />
                        </div>
                    );
                })}
            </div>
            
        </>
    );
};

export default Service;
