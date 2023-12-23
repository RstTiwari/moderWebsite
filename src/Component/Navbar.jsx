import { AppBar, Toolbar,IconButton, Typography, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React ,{useState} from 'react'
import { Dropdown } from '@mui/base/Dropdown';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { Col, Drawer, Row,Menu, } from 'antd';
const Navbar = () => {
    const [service, setService] = useState(null);
    const [product, setProduct] = useState(null);
    const [drawerOpen,setDrawerOpen] = useState(false)


    const handeServicePopOverOpen = (event) => {
        setProduct(null)
        setService(event.currentTarget);
      };
    
      const handelServicePopoverClose = () => {
        setProduct(null)
        if(service){
            setTimeout(()=>{
                setService(null);
            },1500)
        }else{
            setService(null)
        }
      };
      const handelProductPopoverOpen = (event) => {
        setService(null)
        setProduct(event.currentTarget);
      };
    
      const handleProductPopoverClose = () => {
        setService(null)
          if (product) {
              setTimeout(() => {
                  setProduct(null);
              }, 1500);
          } else {
              setProduct(null);
          }
      };
      const handelDrawerOpen =()=>{
        console.log("function called")
        setDrawerOpen(!drawerOpen)
      }
      const serviceOpen = Boolean(service);
      const productOpen = Boolean(product);

      const menuItems = [
        {
            key :"/",
            label:"Home"
        },
        {
            key:"/about",
            label:"About"
        },
        {
            key:"service",
            label:"Services",
            children:[
              {
                subkey:"/fabrication",
                label:"Fabrication"
              },
              {
                subkey:"/fabrication",
                label:"Fabrication"
              },
             {
                subkey:"/fabrication",
                label:"Fabrication"
              },
              {
                subkey:"/fabrication",
                label:"Fabrication"
              }
            ]
        },
        {
            key:"product",
            label:"Products",
            children:[
              {
                subkey:"/product1",
                label:"Product"
              },
              {
                subkey:"/product1",
                label:"Product"
              },
             {
                subkey:"/product1",
                label:"Product"
              },
              {
                subkey:"/product1",
                label:"Product"
              }
            ]
        },
        {
            key:"/contact",
            label:"Contact Us"
        },

      ]

    
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
                      sx={{
                          flexGrow: 0.7,
                          display: { xs: "block", sm: "block" },
                      }}
                  >
                      WELDING HOUSE
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
                      <Row align={"center"} gutter={80}>
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
                              <Typography
                                  aria-owns={
                                      serviceOpen
                                          ? "service-popover"
                                          : undefined
                                  }
                                  sx={{
                                    cursor:"pointer"
                                  }}
                                  aria-haspopup="true"
                                  onMouseEnter={handeServicePopOverOpen}
                                  onMouseLeave={handelServicePopoverClose}
                              >
                              
                                  Services
                              </Typography>
                          </Col>
                          <Col span={4}>
                              <Typography
                                  aria-owns={
                                      productOpen
                                          ? "product-popover"
                                          : undefined
                                  }
                                  aria-haspopup="true"
                                  onMouseEnter={handelProductPopoverOpen}
                                  onMouseLeave={handleProductPopoverClose}
                              >
                                  Products
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
          {/**Service hover Page */}
          <Popover
              id="service-popover"
              sx={{
                  pointerEvents: "none",
                  cursor:"pointer"
              }}
              open={serviceOpen}
              anchorEl={service}
              anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
              }}
              transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
              }}
              onClose={handelServicePopoverClose}
          >
              <Typography sx={{ p: 1, width: "150px" }}>
                  <List>
                      <ListItem>
                          <Link to="/fabrication">Fabriaction </Link>
                      </ListItem>
                      <ListItem>
                          <Link to="fabrication">Fabriaction </Link>
                      </ListItem>
                      <ListItem>
                          <Link to="fabrication">Fabriaction </Link>
                      </ListItem>
                      <ListItem>
                          <Link to="fabrication">Fabriaction </Link>
                      </ListItem>
                  </List>
              </Typography>
          </Popover>
          {/**Product hover Page */}

          <Popover
              id="product-popover"
              sx={{
                  pointerEvents: "none",
                  width: "500px",
              }}
              open={productOpen}
              anchorEl={product}
              anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
              }}
              transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
              }}
              onClose={handleProductPopoverClose}
              disableRestoreFocus
          >
              <Typography sx={{ p: 1, width: "150px", cursor:"pointer" }}>
                  <List>
                      <ListItem>
                          <Link to={"/product1"}>Product1</Link>
                      </ListItem>
                      <ListItem>
                          <Link to={"/product1"}>Product1</Link>
                      </ListItem>
                      <ListItem>
                          <Link to="/product1">Product1</Link>
                      </ListItem>
                      <ListItem>
                          <Link to="/product1">Product1</Link>
                      </ListItem>
                  </List>
              </Typography>
          </Popover>
          <Drawer open={drawerOpen} placement="left" width={"200px"} style={{
          }}>
              <Menu style={{ color: "#1976d2" }} items={menuItems}  mode='inline'/>
          </Drawer>
      </Box>
  );
}

export default Navbar