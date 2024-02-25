import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { Col, Drawer, Row, Menu, Dropdown, Space } from "antd";
import logo from "../../src/Assets/logo.jpg"
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
            label: "Services/Products",
            children: [
                {
                    key: "/lesserwelding",
                    label: "Lesser Welding",
                },
                {
                    key: "/tigwelding",
                    label: "Tig Welding",
                },
                {
                    key: "/migwelding",
                    label: "Mig Welding",
                },
                {
                    key: "/arcwelding",
                    label: "Arc Welding",
                },
                {
                    key: "/bernzingwelding",
                    label: "Brenzing Welding",
                },
            ],
        },
        // {
        //     key: "otherservices",
        //     label: "Other Services",
        //     children: [
        //         {
        //             key: "/lessercutting",
        //             label: "Lesser cutting ",
        //         },
        //         {
        //             key: "/cncwelding",
        //             label: "Cnc welding",
        //         },
        //         {
        //             key: "/bufing",
        //             label:"Bufing",
        //         },
        //         {
        //             key: "/spotwelding",
        //             label: "Spot Welding",
        //         },
        //         {
        //             key: "/projectorwelding",
        //             label: "Projector welding ",
        //         },
        //     ],
        // },
        // {
        //     key: "industries",
        //     label: "Industries",
        //     children: [
        //         {
        //             key: "/agricultureandfood",
        //             label: "Agriculture and food",
        //         },
        //         {
        //             key: "/cement",
        //             label: "Cement",
        //         },
        //         {
        //             key: "/hydropower",
        //             label: "Hydropower",
        //         },
        //         {
        //             key: "/miningquarriesanearthmaring",
        //             label: "Mining quarries an earthmaring",
        //         },
        //         {
        //             key: "/oilandgaspetrochemical",
        //             label: "Oil and gas / petrochemical",
        //         },
        //         {
        //             key: "power",
        //             label: "Power",
        //         },
        //         {
        //             key: "/pulpandpaper",
        //             label: "Pulp and Paper",
        //         },
        //         {
        //             key: "/recyclingandwaste",
        //             label: "Recycling and waste",
        //         },
        //         {
        //             key: "/steelmaking",
        //             label: " Steel making",
        //         },
        //         {
        //             key: "/sugar",
        //             label: "Sugar",
        //         },
        //         {
        //             key: "/product4",
        //             label: "Product",
        //         },
        //         {
        //             key: "/ pharmaind",
        //             label: " Pharma Ind",
        //         },
        //     ],
        // },
        {
            key: "/contact",
            label: "Contact Us",
        },
    ];
  
    const handleMenuClick = (content)=>{
        setDrawerOpen(!drawerOpen)
        navigate("/")
    }
    return (
        <Box
            sx={{
                display: "flex",
                alignContent: "right",
                color: "#fff",
                zIndex: 1000,
            }}
        >
            <CssBaseline />
            <AppBar
                component={"nav"}
                sx={{
                    backgroundColor: "#006635",
                    height: "70px",
                    color: "#fff",
                    justifyContent: "center",
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
                    <Row
                        align={"middle"}
                        style={{ width: "30%", marginLeft: "2rem" }}
                    >
                        <Col>
                            <img
                                src={logo}
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Col>
                        <Col span={8}>
                            <Row style={{ fontSize: "1rem" }}>Welding </Row>
                            <Row>House</Row>
                        </Col>
                    </Row>
                    {/* <Typography
                        variant="h6"
                        component="div"
                        className="footer-left"
                        color={"#fff"}
                        sx={{
                            flexGrow: 0.8,
                            display: { xs: "block", sm: "block" },
                        }}
                    > 
                    </Typography> */}
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                                color: "#fff",
                                marginLeft: "3rem",
                            },
                        }}
                    >
                        <Row align={"center"} gutter={60}>
                            <Col span={4}>
                                <Link to={"/"}>
                                    <Typography color={"#fff"}>HOME</Typography>
                                </Link>
                            </Col>
                            <Col span={4}>
                                <Link to={"/about"}>
                                    <Typography color={"#fff"}>
                                        ABOUT
                                    </Typography>
                                </Link>
                            </Col>
                            <Col span={10}>
                                <Typography className="dropdown">
                                    <Typography
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                       PRODUCT & SERVICE
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Lesser Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Tig Welding GTAW
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Mig Welding GMAW
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Arc Welding SMAW
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Brenzing Welding
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            {/* <Col span={5}>
                                <Typography className="dropdown">
                                    <Typography color={"#fff"}>
                                        Other Service
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Lesser cutting
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                Cnc welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                {" "}
                                                Bufing
                                            </Typography>
                                        </Link>

                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                {" "}
                                                Spot Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#fff"}>
                                                {" "}
                                                Projector welding
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col> */}
                           
                            <Col span={5} style={{ zIndex: 100 }}>
                                <Link to={"/contact"}>
                                    <Typography color={"#fff"}>
                                        CONTACT
                                    </Typography>
                                </Link>
                            </Col>
                        </Row>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                placement={"left"}
                width={"350px"}
                height={"350px"}
                style={{
                    backgroundColor: "#006635",
                }}
            >
                <Menu
                    style={{
                        color: "#fff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        backgroundColor: "#006635",
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
