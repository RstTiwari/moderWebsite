import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { Col, Drawer, Row, Menu, Dropdown, Space } from "antd";
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate()

    const handelDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        {
            key: "/",
            label: "Home",
        },
        {
            key: "/about",
            label: "About",
        },
        {
            key: "services",
            label: "Services",
            children: [
                {
                    key: "/fabrication1",
                    label: "Fabrication",
                },
                {
                    key: "/fabrication2",
                    label: "Fabrication",
                },
                {
                    key: "/fabrication3",
                    label: "Fabrication",
                },
                {
                    key: "/fabrication4",
                    label: "Fabrication",
                },
            ],
        },
        {
            key: "products",
            label: "Products",
            children: [
                {
                    key: "/product1",
                    label: "Product",
                },
                {
                    key: "/product2",
                    label: "Product",
                },
                {
                    key: "/product3",
                    label: "Product",
                },
                {
                    key: "/product4",
                    label: "Product",
                },
            ],
        },
        {
            key: "/contact",
            label: "Contact Us",
        },
    ];
  
    const handleMenuClick = (content)=>{
        setDrawerOpen(!drawerOpen)
        navigate(content.key)
    }
    return (
        <Box sx={{ display: "flex", color: "#99ba02", zIndex:"10000" }}>
            <CssBaseline />
            <AppBar
                component={"nav"}
                sx={{
                    backgroundColor: "#000000",
                    height: "75px",
                    color: "#99ba02",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={""}
                        sx={{ mr: 2, display: { sm: "none" } }}
                        onClick={handelDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        className="footer-left"
                        color={"#99ba02"}
                        sx={{
                            flexGrow: 0.7,
                            display: { xs: "block", sm: "block" },
                        }}
                    >
                        <h3>Welding House</h3>
                        
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                                paddingRight: "20px",
                                color: "#99ba02",
                            },
                        }}
                    >
                        <Row align={"center"} gutter={50}>
                            <Col span={4}>
                                <Link to={"/"}>
                                    <Typography color={"#99ba02"}>
                                        Home
                                    </Typography>
                                </Link>
                            </Col>
                            <Col span={4}>
                                <Link to={"/about"}>
                                    <Typography color={"#99ba02"}>
                                        About
                                    </Typography>
                                </Link>
                            </Col>
                            <Col span={4}>
                                <Typography className="dropdown">
                                    <Typography
                                        style={{
                                            color: "#99ba02",
                                        }}
                                    >
                                        Service
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Welding
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={4}>
                                <Typography className="dropdown">
                                    <Typography color={"#99ba02"}>
                                        Products{" "}
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Product1
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>Product1</Typography>
                                        </Link>
                                        <Link href="#" >
                                            <Typography color={"#99ba02"}>Product</Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={6}>
                                <Link to={"/contact"}>
                                    <Typography color={"#99ba02"}>Contact Us</Typography>
                                </Link>
                            </Col>
                        </Row>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                placement ={"top"}
                width={"350px"}
                height={"350px"}
                
            >
                <Menu
                    style={{
                        color: "#99ba02",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                    items={menuItems}
                    onSelect={handleMenuClick}
                    mode="inline"
                />
            </Drawer>
        </Box>
    );
};

export default Navbar;
