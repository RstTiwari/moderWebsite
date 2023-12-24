import React from "react";
import "./Footer.css"
import { Facebook,Instagram,Twitter,LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>
                        Welding<span>House</span>
                    </h3>

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
                        Service
                    </div>
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>
                            <span>444 S. Cedros Ave</span> Solana Beach,
                            California
                        </p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:support@company.com">
                                support@company.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing
                        elit. Fusce euismod convallis velit, eu auctor lacus
                        vehicula sit amet.
                    </p>

                    <div className="footer-icons">
                        <a href="#">
                            <Facebook />
                        </a>
                        <a href="#">
                            <Instagram />
                        </a>
                        <a href="#">
                            <Twitter/>
                        </a>
                        <a href="#">
                           <LinkedIn/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
