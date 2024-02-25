import React from "react";
import "./Footer.css"
import { Facebook,Instagram,Twitter,LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Col ,List} from "antd";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Welding House</h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">
                            Home
                        </a>

                        <a href="#">About</a>
                        <a href="#">Contact Us</a>
                    </p>

                    <p className="footer-company-name">Welding House ©2023</p>
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>
                            Gala No. A-33/1,Lagu Udyog Indrustrial Estate,
                            <br />I .B Patel Road , Goregoan ( E ), Mumbai -
                            400063.
                        </p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>
                            <a href="tel:+919892689310">
                                Fahad Surve - 9892689310
                            </a>
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>

                        <p>
                            {" "}
                            <a href="tel:+919029536458">
                                Fawaj Surve - 9029536458
                            </a>
                        </p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:weldinghouse22@gmail.com">
                                weldinghouse22@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

             

                <div className="footer-center1">
                    <h3 color={"#fff"} >Indrustries</h3>
                      <List>
                        <List.Item>
                            <Typography color={"#fff"}>
                                Agriculture and food
                            </Typography>
                        </List.Item>
                        <List.Item>
                            <Typography color={"#fff"}>Cement</Typography>
                        </List.Item>
                        <List.Item>
                            <Typography color={"#fff"}>Hydropower</Typography>
                        </List.Item>
                        <List.Item>
                            <Typography color={"#fff"}>
                                {" "}
                                Mining quarries an earthmaring
                            </Typography>
                        </List.Item>
                         <List.Item>
                         <Typography color={"#fff"}>
                            {" "}
                            Oil and gas / petrochemical
                        </Typography>
                         </List.Item>
                         <List.Item>
                         <Typography color={"#fff"}> Power</Typography>

                         </List.Item>
                         <List.Item>
                         <Typography color={"#fff"}> Pulp and paper</Typography>

                         </List.Item>                
                          <List.Item>
                          <Typography color={"#fff"}> Railways</Typography>
                          </List.Item>                          
                          <List.Item>
                          <Typography color={"#fff"}>
                            {" "}
                            Recycling and waste
                        </Typography>
                          </List.Item>
                        
                        <List.Item>
                        <Typography color={"#fff"}>Steel making</Typography>

                        </List.Item>
                        <List.Item>
                        <Typography color={"#fff"}>Steel making</Typography>

                        </List.Item>
                        <List.Item>
                        <Typography color={"#fff"}> Sugar</Typography>

                        </List.Item>
                        <List.Item>
                        <Typography color={"#fff"}> Film Industry</Typography>

                        </List.Item>
                        <List.Item>
                        <Typography color={"#fff"}> Pharma Industry</Typography>
                        </List.Item>
                    </List>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <h3>About the company</h3>
                        <span style={{ color: "#fff" }}></span>
                        Welding House is a INDIA leader in welding and cutting
                        equipment and consumables. Our innovative, INDIA
                        -renowned equipment and fabrication technology solutions
                        are developed with input from our customers and built on
                        the expertise and heritage of a global manufacturing
                        leader. Our collective vision is to transform the
                        industry and meet the needs of our customers through our
                        diverse product portfolio
                    </p>

                    <div className="footer-icons">
                        <a href="#">
                            <Facebook />
                        </a>
                        <a href="#">
                            <Instagram />
                        </a>
                        <a href="#">
                            <Twitter />
                        </a>
                        <a href="#">
                            <LinkedIn />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
