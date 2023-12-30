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
        {
            key: "products",
            label: "Products",
            children: [
                {
                    key: "/agricultureandfood",
                    label: "Agriculture and food",
                },
                {
                    key: "/cement",
                    label: "Cement",
                },
                {
                    key: "/hydropower",
                    label: "Hydropower",
                },
                {
                    key: "/miningquarriesanearthmaring",
                    label: "Mining quarries an earthmaring",
                },
                {
                    key: "/oilandgaspetrochemical",
                    label: "Oil and gas / petrochemical",
                },
                {
                    key: "power",
                    label: "Power",
                },
                {
                    key: "/pulpandpaper",
                    label: "Pulp and Paper",
                },
                {
                    key: "/recyclingandwaste",
                    label: "Recycling and waste",
                },
                {
                    key: "/steelmaking",
                    label: " Steel making",
                },
                {
                    key: "/sugar",
                    label: "Sugar",
                },
                {
                    key: "/product4",
                    label: "Product",
                },
                {
                    key: "/ pharmaind",
                    label: " Pharma Ind",
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
        <Box sx={{ display: "flex", color: "#99ba02", zIndex: 1000 }}>
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
                            flexGrow: 0.8,
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
                        <Row align={"center"} gutter={80}>
                            <Col span={3}>
                                <Link to={"/"}>
                                    <Typography color={"#99ba02"}>
                                        Home
                                    </Typography>
                                </Link>
                            </Col>
                            <Col span={3}>
                                <Link to={"/about"}>
                                    <Typography color={"#99ba02"}>
                                        About
                                    </Typography>
                                </Link>
                            </Col>
                            <Col span={3}>
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
                                                Lesser Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Tig Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Mig Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Arc Welding
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Brenzing Welding
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={4}>
                                <Typography className="dropdown">
                                    <Typography color={"#99ba02"}>
                                        Indrustries
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Agriculture and food
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Cement
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Hydropower
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Mining quarries an earthmaring
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Oil and gas / petrochemical
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Power
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Pulp and paper
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Railways
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Recycling and waste
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Steel making
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Sugar
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Film Ind
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Pharma Ind
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={5}>
                                <Typography className="dropdown">
                                    <Typography color={"#99ba02"}>
                                        Other Service
                                    </Typography>
                                    <div className="dropdown-content">
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Agriculture and food
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Cement
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Hydropower
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Mining quarries an earthmaring
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Oil and gas / petrochemical
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Power
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Pulp and paper
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Railways
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Recycling and waste
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                Steel making
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Sugar
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Film Ind
                                            </Typography>
                                        </Link>
                                        <Link href="#">
                                            <Typography color={"#99ba02"}>
                                                {" "}
                                                Pharma Ind
                                            </Typography>
                                        </Link>
                                    </div>
                                </Typography>
                            </Col>
                            <Col span={5} style={{ zIndex: 100 }}>
                                <Link to={"/contact"}>
                                    <Typography color={"#99ba02"}>
                                        Contact Us
                                    </Typography>
                                </Link>
                            </Col>
                        </Row>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                placement={"top"}
                width={"350px"}
                height={"350px"}
                style={{
                    backgroundColor: "#000000",
                }}
            >
                <Menu
                    style={{
                        color: "#99ba02",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        backgroundColor: "#000000",
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
