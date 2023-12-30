import React from "react";
import "./Footer.css"
import { Facebook,Instagram,Twitter,LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";

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
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-links">
                        <a href="#" className="link-1">
                            Home
                        </a>

                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Welding House ©2023</p>
                </div>

                <div className="footer-center">
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

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span style={{color:"#99ba02"}}>About the company</span>
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
