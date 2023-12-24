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
            key: "",
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
            key: "",
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
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component={"nav"}>
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
                        sx={{
                            flexGrow: 0.7,
                            display: { xs: "block", sm: "block" },
                            font:"font: normal 36px 'Open Sans';"
                        }}
                    >
                        {" "}
                        <h3>
                            Welding<span>House</span>
                        </h3>
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                                paddingRight: "20px",
                            },
                        }}
                    >
                        <Row align={"center"} gutter={100}>
                            <Col span={4}>
                                <Link to={"/"}>
                                    <Typography>Home</Typography>
                                </Link>
                            </Col>
                            <Col span={4}>
                                <Link to={"/about"}>
                                    <Typography>About</Typography>
                                </Link>
                            </Col>
                            <Col span={4}>
                                <Typography className="dropdown">
                                    <Typography>Service</Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">Welding</Link>
                                        <Link href="#">Welding</Link>
                                        <Link href="#">Welding</Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={4}>
                                <Typography className="dropdown">
                                    <Typography>Products </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">Product1</Link>
                                        <Link href="#">Product1</Link>
                                        <Link href="#">Product1</Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={6}>
                                <Link to={"/contact"}>
                                    <Typography>Contact Us</Typography>
                                </Link>
                            </Col>
                        </Row>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                placement="left"
                width={"200px"}
                style={{}}
            >
                <Menu
                    style={{ color: "#1976d2" }}
                    items={menuItems}
                    onSelect={handleMenuClick}
                    mode="inline"
                />
            </Drawer>
        </Box>
    );
};

export default Navbar;
